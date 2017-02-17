export default {
  ajaxCallsInProgress: 0,
  inspection: [{
    id: 1,
    hotel: 'Park Place',
    date: '08/09/16',
    inspector: 'Fake guy',
    room: 101,
    results: [
      {
        idResult: 1,
        category: 'Bathroom',
        question: 'Is it clean?',
        result: 'Good'
      },
      {
        idResult: 2,
        category: 'Bathroom',
        question: 'Is there toilet paper?',
        result: 'Needs Work',
        attention: false,
        problemNote: 'Complete lack of toilet paper'
      }
    ]
  },{
    id: 2,
    hotel: 'Park Place',
    date: '08/10/16',
    inspector: 'Fake guy',
    room: 102,
    results: [
      {
        idResult: 1,
        category: 'Bathroom',
        question: 'Is it clean?',
        result: 'Needs work',
        attention: true,
        problemNote: 'Not clean at all'
      },
      {
        idResult: 2,
        category: 'Bathroom',
        question: 'Is there toilet paper?',
        result: 'Good'
      }
    ]
  }],
  criteria: []
};
