/*
- just log updates as a parallel process; the pojo is still the source of truth for the form
- updates should be the only things pushed on submit
*/

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import clone from '../utils/clone';

function normalizeModel(model) {
  return clone(model.attributes);
}

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
function normalizeRelationships(model) {
  const modelRelationships = model.relationships;
  if (!modelRelationships) return null;

  const relationships = Object.keys(modelRelationships)
    .reduce((memo, key) => {
      const relation = modelRelationships[key];

      if (!relation) return memo;

      memo[key] = relation.data;
      return memo;
    }, {});

  return relationships;
}

function serializeRelationships(relationships) {
  return Object.keys(relationships)
    .reduce((memo, key) => {
      memo[key] = {
        data: relationships[key],
      };
      return memo;
    }, {});
}

function serializeModel(pojo, model, relationships) {
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
      relationships: serializeRelationships(relationships),
    };
  }

  return serialized;
}

function extractNameValue(_name, _value) {
  let value;
  let name;

  if (_value instanceof Event) {
    ({ value, name } = _value.target);
  } else {
    value = _value;
    name = _name;
  }
  return { name, value };
}

export default class TForm extends Component {
  @tracked showErrors = false;

  @tracked disabled = false;

  @tracked pojo = {};

  @tracked relationships = {};

  constructor(...args) {
    super(...args);

    const { model } = this.args;

    this.pojo = normalizeModel(model);
    this.relationships = normalizeRelationships(model);

    this['updates-pojo'] = {};
    this['updates-relationships'] = {};

    this.validate();

    if (this.onUpdatePojo) {
      this.onUpdatePojo(serializeModel(this.pojo, model, this.relationships));
    }
  }

  @action toggleValue(name, event) {
    event.stopPropagation();
    this.handleChange(name, !this.pojo[name], 'pojo');
  }

  /* An action handler for change events, that works both with various
     controls that send along the value, name signature, along with
     generic DOM inputs that send an event
  */
  @action onChange(_value, _name) {
    const { name, value } = extractNameValue(_name, _value);

    this.handleChange(name, value, 'pojo');
  }

  // Set up to handle simple one-of relationships to allow a control
  // to just send a simple value which should be an ID. In this case
  // the value is changed to an object reference. If the control
  // sends a change event with an object, that object becomes the
  // value sent.
  @action onChangeRelationship(_value, _name) {
    const { name, value } = extractNameValue(_name, _value);
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
  }

  @action onSubmit(event) {
    event.preventDefault();

    if (this.isInvalid) {
      this.showErrors = true;
      if (this.args.reportError) {
        this.args.reportError(this.errors);
      }
      return;
    }

    this.disabled = true;

    const { model, hasUpdates, updates } = this.serialize();
    const result = this.args.save(model, hasUpdates && updates);

    result.finally(() => {
      if (this.isDestroyed) return;

      this.disabled = false;
    });
  }

  /* Helper function callable by forms to update a relationship
  */
  updateRelationship(key, relation) {
    if (typeof key !== 'string') throw new Error('Requires relationship key for first argument');

    return this.handleChange(key, relation, 'relationships');
  }

  updatePojo(updates, updatePath = 'pojo') {
    const pojo = this[updatePath];

    const newPojo = {
      ...pojo,
      ...updates,
    };

    this[updatePath] = newPojo;

    if (this.onUpdatePojo) {
      this.onUpdatePojo(serializeModel(this.pojo, this.model, this.relationships));
    }
  }

  handleChange(name, value, updatePath) {
    const updates = {
      [name]: value,
    };

    this.updatePojo(updates, updatePath);
    this.updatePojo(updates, `updates-${updatePath}`);

    this.validate();
  }

  validate() {
    let results = { isInvalid: false, errors: {} };
    const validator = this.args.validator || this.validator;

    if (validator) {
      const { isInvalid, errors } = validator.validate({ ...this.pojo, ...this['updates-pojo'] });
      results = { isInvalid, errors };
    }

    const validateRelationships = this.args.validateRelationships || this.validateRelationships;

    if (validateRelationships) {
      const { isInvalid, errors } = validateRelationships.validate({ ...this.relationships, ...this['updates-relationships'] });
      results = {
        isInvalid: (isInvalid || results.isInvalid),
        errors: { ...results.errors, ...errors },
      };
    }

    this.isInvalid = results.isInvalid;
    this.errors = results.errors;

    return results;
  }

  // Builds output models - a full model with updates, a boolean indicating
  // whether any updates happened, and a lightweight updates model with changes only.
  //
  serialize() {
    const {
      pojo,
      'updates-pojo': pojoUpdates,
      relationships,
      'updates-relationships': relationshipsUpdates,
    } = this;

    const {
      model: _model,
    } = this.args;

    const model = serializeModel(pojo, _model, relationships);
    const hasUpdates = Boolean(Object.keys(pojoUpdates).length || Object.keys(relationshipsUpdates).length);
    const updates = serializeModel(pojoUpdates, { id: model.id }, relationshipsUpdates);

    return {
      model,
      updates,
      hasUpdates,
    };
  }
}
