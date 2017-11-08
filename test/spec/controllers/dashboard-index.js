'use strict';

describe('Controller: DashboardIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var DashboardIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardIndexCtrl = $controller('DashboardIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardIndexCtrl.awesomeThings.length).toBe(3);
  });
});
