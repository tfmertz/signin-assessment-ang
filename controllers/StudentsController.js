signinApp.controller("StudentsController", function StudentsController($scope, StudentsFactory) {

  //get the students from the factory
  $scope.students = StudentsFactory.students;

  $scope.toggleState = function(student) {
    student.present = !student.present;
  };


});
