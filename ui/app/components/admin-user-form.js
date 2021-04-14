import { action, get } from '@ember/object';
import {
  roleTypes,
  ROLE_STUDENT,
  ROLE_STAFF,
  ROLE_ADMIN,
  isStaffRole,
  STATUS_INACTIVE,
} from '../utils/user-utils';
import Validator from '../utils/validator';
import TForm from './t-form';

function getVerifyFunctionForRole(...roles) {
  return (key, value, pojo) => roles.includes(pojo.role);
}

export default class AdminUserForm extends TForm {
  roleOptions = roleTypes;

  get isActive() {
    return this.pojo.status === 'active';
  }

  get isExistingUser() {
    return Boolean(this.args.model.id);
  }

  get isStudent() {
    return this.pojo.role === ROLE_STUDENT;
  }

  get isStaff() {
    const { role } = this.pojo;
    return isStaffRole(role);
  }

  get coordinatorOptions() {
    return this.args.staff
      .map(staff => ({
        id: staff.id,
        name: `${staff.attributes.lastName}, ${staff.attributes.firstName}`,
      }));
  }

  grades = [
    { name: 'Freshman', value: '9' },
    { name: 'Sophomore', value: '10' },
    { name: 'Junior', value: '11' },
    { name: 'Senior', value: '12' },
  ];

  get validator() {
    const { isStudent } = this;

    // dateInactive must be present if isActive is false
    // dateInactive must >= dateInactive
    let validationsHash = {
      dateInactive: [{
        type: 'required',
        if: (key, value, pojo) => pojo.status === STATUS_INACTIVE,
        message: 'Inactive date is required if user is inactive',
      }, {
        type: 'valid',
        if: (key, value, pojo) => pojo.dateInactive,
        isValid: (key, value, pojo) => value >= pojo.dateActive,
        message: 'Inactive date should be later than active date',
      }, {
        type: 'valid',
        if: (key, value) => Boolean(value),
        isValid: (key, value, pojo) => pojo.status === STATUS_INACTIVE,
        message: 'Inactive date should not be filled out for an active user',
      }],
    };

    const requiredForAll = [
      'dateActive',
      'status',
      'firstName',
      'lastName',
      'role',
    ];

    const requiredForStaff = [
      'email',
    ];

    const requiredForStudents = [
      'districtId',
      'districtGrade',
    ];

    validationsHash = requiredForAll.reduce((memo, key) => {
      memo[key] = { type: 'required' };
      return memo;
    }, validationsHash);

    if (isStudent) {
      validationsHash = requiredForStudents.reduce((memo, key) => {
        memo[key] = {
          type: 'required',
          if: getVerifyFunctionForRole(ROLE_STUDENT),
        };
        return memo;
      }, validationsHash);
    } else {
      validationsHash = requiredForStaff.reduce((memo, key) => {
        memo[key] = {
          type: 'required',
          if: getVerifyFunctionForRole(ROLE_STAFF, ROLE_ADMIN)
        };
        return memo;
      }, validationsHash);
    }

    return new Validator(validationsHash);
  }

  validateRelationships = new Validator({
    coordinator: [{
      type: 'required',
      if: getVerifyFunctionForRole(ROLE_STUDENT),
      message: 'Coordinator must be assigned to student',
    }],
  });

  @action handleCoordinatorChange(coordinatorId) {
    this.updatePojo({ coordinatorId });
  }

  @action updateDate(date, name) {
    const update = {};
    update[name] = date;
    this.updatePojo(update);
    this.validate();
  }
}
