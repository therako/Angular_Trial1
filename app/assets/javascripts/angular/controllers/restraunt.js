var restrauntApp = angular.module('restrauntApp', ['ngResource']);

restrauntApp.controller('restrauntCtrl', [ '$scope', 'restaurants', '$http', function ($scope, restaurants, $http) {
	$scope.heading = "Restraunt";
    $scope.newRestaurant = {};
    var data = restaurants.query(function () {
        $scope.restaurants = data;
    });

    $scope.addNewRestaurant = function () {
        $http.post('/restaurants', $scope.newRestaurant)
            .success(function (resource) {
            $scope.restaurants.push(resource);
            $scope.newRestaurant = {};
            })
            .error(function (response) {
                console.log(response);
            });
    };
}]);

restrauntApp.factory('restaurants', ['$resource', function ($resource) {
    return $resource('/restaurants.json');
}]);