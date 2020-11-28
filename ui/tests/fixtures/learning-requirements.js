// GET /api/learning-requirements
export default {
  data: [
    {
      id: '1',
      type: 'learningRequirement',
      attributes: {
        ealr: 'Acquiro cena coruscus versus utrum.',
        seq: '1.1',
        category: 'Category 1',
      },
    },
    {
      id: '2',
      type: 'learningRequirement',
      attributes: {
        ealr: 'Allatus subseco beatus voluptate voveo.',
        seq: '1.2',
        category: 'Category 1',
      },
    },
    {
      id: '3',
      type: 'learningRequirement',
      attributes: {
        ealr: 'Vulariter trado totus cibo vulgivagus.',
        seq: '2.1',
        category: 'Category 2',
      },
    },
    {
      id: '4',
      type: 'learningRequirement',
      attributes: {
        ealr: 'Cresco vaco curso curis aut.',
        seq: '2.2',
        category: 'Category 2',
      },
    },
  ],
  meta: {
    count: 4,
  },
};
