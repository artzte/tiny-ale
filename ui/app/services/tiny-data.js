import Service from '@ember/service';
import dayjs from 'dayjs';
import { warn } from '../utils/logger';
import fetch from '../utils/fetch';
import clone from '../utils/clone';

let stateCallbacks = [];

export const tinyDataService = {
  init(...args) {
    this._super(...args);
    this._init();
  },

  _init() {
    this.flush();
    this.setToday(new Date());
  },

  setYears(years) {
    this._data.years = years.map(year => parseInt(year, 10));
  },

  getYears() {
    return this._data.years.concat([]);
  },

  getToday() {
    return dayjs(this._data.today);
  },

  setToday(date) {
    this._data.today = date;
  },

  getUser() {
    return clone(this._data.user);
  },

  setUser(user) {
    this._data.user = user;
  },

  setSchoolYear(schoolYear) {
    this._data.schoolYear = schoolYear;
  },

  getSchoolYear() {
    return parseInt(this._data.schoolYear, 10);
  },

  getReportingBaseMonth() {
    return parseInt(this._data.reportingBaseMonth, 10);
  },

  setReportingBaseMonth(reportingBaseMonth) {
    this._data.reportingBaseMonth = reportingBaseMonth;
  },

  getPeriods() {
    return this._data.periods;
  },

  setPeriods(periodsSetting) {
    this._data.periods = periodsSetting.attributes.periods;
  },

  async getLearningRequirementCategories() {
    if (!this._data.competencyCategories) {
      this._data.competencyCategories = await fetch('/api/learning-requirements/categories');
    }
    return this._data.competencyCategories;
  },

  flush() {
    this._store = {};
    this._data = {};
  },

  fetch(...args) {
    return fetch(...args)
      .then(result => {
        this.addResult(result);
        return result;
      });
  },

  addResult(result) {
    if (!result) return;

    const additions = {};

    function _add(entity) {
      additions[entity.type] = { ...additions[entity.type] || {} };
      additions[entity.type][entity.id] = { ...entity };
    }

    const data = Array.isArray(result.data) ? result.data : [result.data];

    data.forEach(entity => {
      _add(entity);
    });

    const included = result.included || [];
    included.forEach(entity => {
      _add(entity);
    });

    const store = this._store;

    const mergedAdditions = Object.keys(additions)
      .reduce((memo, type) => {
        const storeForType = store[type] || {};
        const additionsForType = additions[type];
        const addedIds = Object.keys(additionsForType);

        // merge new attributes into existing attributes and retain
        // that merged object as the incoming entity. any relationships
        // are retained from the newest object received.
        //
        addedIds.forEach(addedId => {
          const existingObject = storeForType[addedId] || {};
          const newObject = additionsForType[addedId];

          // build a new object. new base-level attributes are merged with
          // the old.
          additionsForType[addedId] = {
            ...existingObject,
            ...newObject,
          };
        });

        // replace the type-store with the merge of the new (merged) data
        // and the old.
        memo[type] = { ...storeForType, ...additionsForType };
        return memo;
      }, {});

    this._store = { ...store, ...mergedAdditions };
    this._reportUpdatedState();
  },

  get(type, id) {
    if (!id && arguments.length === 2) throw new Error('null ID passed');

    try {
      const records = this._store[type];

      if (!records) throw new Error(`Cannot find records of type ${type}`);

      if (id) return clone(records[id]);

      return clone(Object.values(records));
    } catch (e) {
      warn('JSON-API-STORE', 'no entity matching?', type, id);
      throw e;
    }
  },

  addRecord(data) {
    this.addResult({ data });
    this._reportUpdatedState();
  },

  deleteRecord(data) {
    const store = this._store;

    // clone root and tree
    this._store = {
      ...store,
      [data.type]: { ...store[data.type] },
    };

    // delete item from cloned tree
    delete this._store[data.type][data.id];

    this._reportUpdatedState();
  },

  registerForUpdates(callback) {
    stateCallbacks = stateCallbacks.concat([callback]);
  },

  unregisterForUpdates(callback) {
    stateCallbacks = stateCallbacks.filter(cb => cb !== callback);
  },

  _reportUpdatedState() {
    stateCallbacks.forEach(callback => callback());
  },

  getNotes(notables) {
    const [firstNotable] = notables;
    if (!firstNotable) return Promise.resolve({ data: [], meta: { count: 0 } });

    const notableType = firstNotable.type;
    const notableIds = notables.map(notable => notable.id);
    return this.fetch('/api/notes', {
      query: {
        notableType,
        notableIds: notableIds.join(','),
        order: 'createdAt DESC',
      },
    });
  },

  getEmptyRecord(type, additions = {}) {
    return {
      type,
      id: null,
      attributes: {},
      relationships: {},
      included: [],
      ...additions,
    };
  },
};

export default Service.extend(tinyDataService);
