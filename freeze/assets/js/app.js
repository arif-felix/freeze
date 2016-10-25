var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.messageHome = 'Home';
  $scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function($scope) {
  $scope.messageBlog = 'Blog';
  $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope, $http) {

  $scope.messageBlog = 'About';
  $scope.message = 'Hello from About';

  $http({
    method : "GET",
    //url : "https://jsonplaceholder.typicode.com/users"
    url : "/api/user"
  }).then(function mySucces(response) {
      console.log(response.data)
      $scope.messageAbout = 'Users';
      $scope.message = response.data[1].name;
      console.log(response.data)
      $scope.users = response.data;
      $scope.user = response.data[0];
      console.log($scope.user);
    }, function myError(response) {
      $scope.messageAbout = response.statusText;
  });



});