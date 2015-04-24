signinApp.controller('PresenceController', function PresenceController($scope, StudentsFactory) {

  //get the students from the factory
  $scope.students = StudentsFactory.students;

  


});
