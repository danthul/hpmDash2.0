import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const inspections = [
  {
    id: 1,
    category: "Bathroom",
    questions: [
      {
        idQuestion: 1,
        question: 'Is it clean?',
        result: 'Good'
      },
      {
        idQuestion: 2,
        question: 'Is there toilet paper?',
        result: 'Needs Work'
      }
    ]
  },
  {
    id: 2,
    category: "Business Center",
    questions: [
      {
        idQuestion: 1,
        question: 'Is it clean?',
        result: 'Needs Work'
      },
      {
        idQuestion: 3,
        question: 'Paper in the copier?',
        result: 'Good'
      }
    ]
  }
];

//This would be performed on the server in a real app. Just stubbing in.
let generateId = 3;

class InspectionApi {

  static saveInspectionResult(inspection) {
    inspection = Object.assign({}, inspection); // to avoid manipulating object passed in.
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate server-side validation

        if (inspection.id) {
          const existingInspectionIndex = inspections.findIndex(a => a.id == inspection.id);
          inspections.splice(existingInspectionIndex, 1, inspection);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          generateId++;
          inspection.id = generateId;
          inspections.push(inspection);
        }

        resolve(inspection);
      }, delay);
    });
  }

  // static deleteCourse(courseId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfCourseToDelete = courses.findIndex(course => {
  //         course.id == courseId;
  //       });
  //       courses.splice(indexOfCourseToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default InspectionApi;

