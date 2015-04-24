signinApp = angular.module('signinApp', ['ui.router']);

signinApp.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
  });

  $stateProvider.state("sign-in", {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: 'StudentsController',
  });

  $stateProvider.state("presence", {
    url: "/presence",
    templateUrl: "partials/presence.html",
    controller: "PresenceController",
  });
});
