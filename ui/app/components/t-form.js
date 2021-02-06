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
    this._super();
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

  didInsertElement(...args) {
    this._super(...args);
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
    onChange(_value, _name) {
      const { name, value } = this.extractNameValue(_name, _value);

      this.handleChange(name, value, 'pojo');
    },

    // Set up to handle simple one-of relationships to allow a control
    // to just send a simple value which should be an ID. In this case
    // the value is changed to an object reference. If the control
    // sends a change event with an object, that object becomes the
    // value sent.
    onChangeRelationship(_value, _name) {
      const { name, value } = this.extractNameValue(_name, _value);
      let reference;

      if (typeof value === 'object') {
        // an object is assumed to be a fully-fledged reference
        reference = value;
      } else if (value) {
        // a non-empty string was passed (i.e., an id)
        reference = { id: value };
      } else {
        // a blank was passed (i.e., a prompt value)
        reference = null;
      }
      this.handleChange(name, reference, 'relationships');
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
  },

  extractNameValue(_name, _value) {
    let value;
    let name;

    if (_value instanceof Event) {
      ({ value, name } = _value.target);
    } else {
      value = _value;
      name = _name;
    }
    return { name, value };
  },

  handleChange(name, value, updatePath) {
    const updates = {
      [name]: value,
    };

    this.updatePojo(updates, updatePath);
    this.updatePojo(updates, `updates-${updatePath}`);

    this.validate();
  },

  validate() {
    let results = { isInvalid: false, errors: {} };

    if (this.validator) {
      const { isInvalid, errors } = this.validator.validate({ ...this.pojo, ...this['updates-pojo'] });
      results = { isInvalid, errors };
    }

    if (this.validateRelationships) {
      const { isInvalid, errors } = this.validateRelationships.validate({ ...this.relationships, ...this['updates-relationships'] });
      results = { isInvalid: isInvalid || results.isInvalid, errors: { ...results.errors, ...errors } };
    }

    this.setProperties(results);

    return results;
  },

  // Builds output models - a full model with updates, a boolean indicating
  // whether any updates happened, and a lightweight updates model with changes only.
  //
  serialize() {
    const {
      pojo,
      'updates-pojo': pojoUpdates,
      relationships,
      'updates-relationships': relationshipsUpdates,
      model: _model,
    } = this;

    const model = this.serializeModel(pojo, _model, relationships);
    const hasUpdates = Boolean(Object.keys(pojoUpdates).length || Object.keys(relationshipsUpdates).length);
    const updates = this.serializeModel(pojoUpdates, { id: model.id }, relationshipsUpdates);

    return {
      model,
      updates,
      hasUpdates,
    };
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

    this.set('disabled', true);

    const { model, hasUpdates, updates } = this.serialize();
    const result = this.save(model, hasUpdates && updates);

    result.finally(() => {
      if (this.isDestroyed) return;

      this.set('disabled', false);
    });
  },
});
