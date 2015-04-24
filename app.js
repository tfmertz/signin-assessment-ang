signinApp = angular.module('signinApp', ['ui.router']);

signinApp.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

});
