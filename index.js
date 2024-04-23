// Primitive data types: prepacked/predefined with the language itself
// Non-primitive: up to the programmer to define

// Primitive: String, Number, Boolean, undefined, null

let username = 'Kamogelo';
let age = 21;
let isStudent = true;
let isInPrison;
let surname = Moremedi
let Number ='0649048551'
let email = 'kamogelocmoremedi29@gmail.com'


console.log({ username, age, isStudent, isInPrison, surname});

// Non-primitive: Array, Object, LinkedLists ...
// Array of students
let listOfSkills = ['HTML','CSS','JavaScript']
console.log({ listOfSkills });
console.log(listOfSkills.length );

// object of student Kamogelo
let student = {
    name: 'Kamogelo',
    surname: 'Moremedi',
    age: 21,
    Number: +27649048551, 
    isStudent: true

}
// Non-primitive: Array, Object, LinkedLists ...
// Array of students
let listOfEducation = ['Skills Certificate:Computer Technology, Web Development, Graphic Design']
console.log({ listOfEducation });
console.log(listOfEducation.length );

// object of student Kamogelo
let address = {
    street: 'Waterworks',
    city: 'Kimberley',
}

let experience = [
  {
    company: 'Vooruitsig Primary',
    position: 'ICT/E-CRED Assistance',
    startDate: '13/05/2023',
    endDate: '31/11/2023',
    responsibilities: [
      'Developed and maintained web applications using JavaScript, HTML, and CSS.',
      'Collaborated with cross-functional teams to design and launch new features.',
      'Wrote automated tests and performed code reviews to ensure code quality.',
    ],
  },
];
let portfolio = [
  {
    name: 'Project 1',
    description: 'This is a description of Project 1.',
    url: 'https://project1.com',
  },
  {
    name: 'Project 2',
    description: 'This is a description of Project 2.',
    url: 'https://project2.com',
  },
];

const form = document.querySelector('form')
const fullName = document.getElementById("name")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const mess = document.getElementById("message")

  renderPersonalInfo(personalInfo);