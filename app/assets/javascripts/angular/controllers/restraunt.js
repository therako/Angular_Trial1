var restrauntApp = angular.module('restrauntApp', ['ngResource']);

restrauntApp.controller('restrauntCtrl', [ '$scope', 'restaurants', 'httpService', function ($scope, restaurants, httpService) {
	$scope.heading = "Restraunt";
    $scope.restaurants = [];
    $scope.newRestaurant = {};

    var data = restaurants.query(function () {
        $scope.restaurants = data;
    });

    $scope.addNewRestaurant = function () {
        var result = httpService.post('/restaurants', $scope.newRestaurant);
        if (result == 201) {
            $scope.restaurants.push($scope.newRestaurant);
            $scope.newRestaurant = {};
        }
        else {
            console.log("Error");
        }
    };
}]);

restrauntApp.factory('restaurants', ['$resource', function ($resource) {
    return $resource('/restaurants.json');
}]);

restrauntApp.service('httpService', ['$http', function ($http) {
    return {
      post: function (uri, data) {
          $http.post(uri, data).success(function () {
              return 201;
          }).error(function () {
              return 404;
          })
      }
    };
}]);