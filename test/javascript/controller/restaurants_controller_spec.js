/**
 * Created by arunkumarr on 02/05/14.
 */

describe("restrauntController", function () {

    var scope, controller, _restaurants, _httpService;

    beforeEach(function () {
        module('restrauntApp');
        inject(function ($rootScope, $controller, restaurants, httpService) {
            scope = $rootScope.$new();
            controller = $controller('restrauntCtrl', {$scope: scope});
            _restaurants = restaurants;
            _httpService = httpService;
        });
        data = { name: "someData" };
        scope.newRestaurant = data;
        spyOn(_httpService, 'post').andReturn(201);
    });

    it('should add new restaurant', function () {
        scope.addNewRestaurant();
        expect(scope.restaurants).toEqual([ data ]);
        expect(_httpService.post).toHaveBeenCalled();
    });
});