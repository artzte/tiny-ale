import Big from 'big.js';

/*
 * Returns accepted hours for a credit assignment
 */
export function getHours(creditAssignment) {
  return creditAssignment.attributes.overrideHours
    || creditAssignment.attributes.creditHours
    || 0;
}

/*
 * Returns suitable course name
 */
export function getCourseName(creditAssignment, credit) {
  return (credit && credit.attributes.courseName)
    || creditAssignment.attributes.creditCourseName
    || creditAssignment.attributes.contractName;
}

/*
 * Returns a safe new credit assignment model for a creditable
 */
export function getNewCreditAssignmentForCreditable(creditable) {
  return {
    attributes: {
      creditHours: 0.5,
    },
    relationships: {
      [creditable.type]: {
        data: {
          id: creditable.id,
          type: creditable.type,
        },
      },
    },
  };
}

export function buildCombineModel(creditAssignments, tinyData) {
  const creditHours = creditAssignments
    .reduce(
      (sum, ca) => sum.add(ca.attributes.creditHours),
      new Big(0)
    )
    .toFixed(2);

  const [firstCredit] = creditAssignments;
  const creditCandidate = tinyData.get('credit', firstCredit.relationships.credit.data.id);
  const termCandidate = tinyData.get('term', firstCredit.relationships.contractTerm.data.id);
  const defaultCredit = creditCandidate.attributes.status === 'active' ? { id: creditCandidate.id } : null;

  return {
    id: null,
    type: 'creditAssignment',
    attributes: {
      enableOverride: false,
      creditHours,
      creditsOverride: creditHours,
    },
    relationships: {
      contractTerm: { data: termCandidate.attributes.status === 'active' ? { id: termCandidate.id } : null },
      credit: { data: defaultCredit },
      childCreditAssignments: {
        data: creditAssignments.map(ca => ({
          id: ca.id,
          type: ca.type,
        })),
      },
    },
  };
}
