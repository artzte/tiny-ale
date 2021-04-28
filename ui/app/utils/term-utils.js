export const STATUS_INACTIVE = 'inactive';
export const STATUS_ACTIVE = 'active';

export function sortTerms(terms) {
  return terms
    .sort((t1, t2) => {
      const year = t2.attributes.schoolYear - t1.attributes.schoolYear;
      if (year) {
        return year;
      }
      return t1.attributes.name.localeCompare(t2.attributes.name);
    });
}
