/*
- just log updates as a parallel process; the pojo is still the source of truth for the form
- updates should be the only things pushed on submit
*/


import Component from '@ember/component';
import clone from '../utils/clone';

export default Component.extend({
  showErrors: false,
  classNames: ['t-form'],
  tagName: 'form',

  didReceiveAttrs() {
    if (this.lastModel === this.model) {
      return;
    }

    const pojo = this.normalizeModel(this.model);
    const relationships = this.normalizeRelationships(this.model);

    this.lastModel = this.model;

    this.setProperties({
      pojo,
      relationships,
      'updates-pojo': {},
      'updates-relationships': {},
    });

    this.validate();

    if (this.onUpdatePojo) {
      this.onUpdatePojo(this.serializeModel(this.pojo, this.model, this.relationships));
    }
  },

  didInsertElement() {
    const autofocus = this.element.querySelector('[autofocus]');

    if (autofocus) {
      autofocus.focus();
      autofocus.select();
    }
  },

  actions: {
    toggleValue(name, event) {
      event.stopPropagation();
      this.handleChange(name, !this.pojo[name], 'pojo');
    },

    /* An action handler for change events, that works both with various
       controls that send along the value, name signature, along with
       generic DOM inputs that send an event
     */
    onChange(value, name) {
      this.handleChange(name, value, 'pojo');
    },

    onChangeRelationship(value, name) {
      this.handleChange(name, value, 'relationships');
    },
  },

  normalizeModel(model) {
    return clone(model.attributes);
  },

  /* Helper function callable by forms to update a relationship
   */
  updateRelationship(key, relation) {
    if (typeof key !== 'string') throw new Error('Requires relationship key for first argument');

    return this.handleChange(key, relation, 'relationships');
  },

  /*
   * Relationships are normalized into a more compact form,
   * with keys pointing directly to the resource linkage
   * (skipping the data attribute). E.g.
   *
   *   { relationships: { boo: { data: { id: 1, type: 'foo' }}}}
   *
   * is normalized as
   *
   *   { boo: { id: 1, type: 'foo' } }
   *
   * Allows for easier use in templates and easier validation
   */
  normalizeRelationships(model) {
    const modelRelationships = model.relationships;
    if (!modelRelationships) return null;

    const relationships = Object.keys(modelRelationships)
      .reduce((memo, key) => {
        const relation = modelRelationships[key];
        if (!relation) throw new Error(`Malformed relationship: "${key}"`);
        memo[key] = relation.data;
        return memo;
      }, {});

    return relationships;
  },

  serializeModel(pojo, model, relationships) {
    const serialized = {
      ...model,
      attributes: {
        ...pojo,
      },
    };

    // with relationships if present
    if (relationships) {
      return {
        ...serialized,
        relationships: this.serializeRelationships(relationships),
      };
    }

    return serialized;
  },

  serializeRelationships(relationships) {
    return Object.keys(relationships)
      .reduce((memo, key) => {
        memo[key] = {
          data: relationships[key],
        };
        return memo;
      }, {});
  },

  updatePojo(updates, updatePath = 'pojo') {
    const pojo = this[updatePath];

    const newPojo = {
      ...pojo,
      ...updates,
    };

    this.set(updatePath, newPojo);

    if (this.onUpdatePojo) {
      this.onUpdatePojo(this.serializeModel(this.pojo, this.model, this.relationships));
    }

    this.validate();
  },

  handleChange(_name, _value, updatePath) {
    let value;
    let name;

    if (_value instanceof Event) {
      ({ value, name } = _value.target);
    } else {
      value = _value;
      name = _name;
    }

    const updates = {
      [name]: value,
    };

    this.updatePojo(updates, updatePath);
    this.updatePojo(updates, `updates-${updatePath}`);
  },

  validate() {
    if (!this.validator) return { isValid: true, errors: {} };

    const validationResult = this.validator.validate({ ...this.pojo, ...this['updates-pojo'] });

    this.setProperties(validationResult);

    return validationResult;
  },

  submit(event) {
    event.preventDefault();

    if (this.isInvalid) {
      this.set('showErrors', true);
      if (this.reportError) {
        this.reportError(this.errors);
      }
      return;
    }

    const {
      pojo,
      'updates-pojo': pojoUpdates,
      relationships,
      'updates-relationships': relationshipsUpdates,
      model,
    } = this;

    this.set('disabled', true);

    // submit both a full model, which is the original pojo with all updates,
    // and an updates model, which only has the touches to the attributes and
    // relationships groups.
    //
    const fullModel = this.serializeModel(pojo, model, relationships);
    const hasUpdates = Boolean(Object.keys(pojoUpdates).length || Object.keys(relationshipsUpdates).length);
    const result = this.save(fullModel, hasUpdates && this.serializeModel(pojoUpdates, { id: model.id }, relationshipsUpdates));

    result.finally(() => {
      if (this.isDestroyed) return;

      this.set('disabled', false);
    });
  },
});
