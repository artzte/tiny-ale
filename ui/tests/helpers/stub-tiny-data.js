import Service from '@ember/service';
import { getContext } from '@ember/test-helpers';
import { tinyDataService } from 'tinysis-ui/services/tiny-data';

export function getTinyData() {
  const { owner } = getContext();
  return owner.lookup('service:tiny-data');
}

export function buildTinyData(overrides = {}) {
  return { ...tinyDataService, ...overrides };
}

export function stubTinyData(overrides = {}) {
  const { owner } = getContext();

  const tinyDataServiceMock = buildTinyData(overrides);

  owner.register('service:tiny-data', Service.extend(tinyDataServiceMock));

  return getTinyData();
}
