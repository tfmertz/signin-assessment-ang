signinApp.controller("StudentsController", function StudentsController($scope, StudentsFactory) {

  //get the students from the factory
  $scope.students = StudentsFactory.students;

  

});
