import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const criteria = [
  {
    id: 1,
    category: "Bathroom",
    questions: [
      {
        idQuestion: 1,
        question: 'Is it clean?'
      },
      {
        idQuestion: 2,
        question: 'Is there toilet paper?'
      }
    ]
  },
  {
    id: 2,
    category: "Business Center",
    questions: [
      {
        idQuestion: 1,
        question: 'Is it clean?'
      },
      {
        idQuestion: 3,
        question: 'Paper in the copier?'
      }
    ]
  }
];


class CriteriaApi {
  static getAllCriteria() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], criteria));
      }, delay);
    });
  }
}

export default CriteriaApi;
