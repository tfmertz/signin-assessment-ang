signinApp.factory('StudentsFactory', function StudentsFactory() {

  //create the factory object
  var factory = {};

  //give it a property that is a prefilled students array
  factory.students = [
    {name: "Tom Mertz", present: false},
    {name: "Connor Abdelnoor", present: false},
    {name: "John Franti", present: false},
    {name: "Tanner Heffner", present: false},
    {name: "Brett Moore", present: false},
    {name: "Jill Kuchman", present: false},

  ];

  //return the factory
  return factory;

});
