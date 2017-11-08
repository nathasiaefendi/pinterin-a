'use strict';

describe('Controller: AddFeaturesCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AddFeaturesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddFeaturesCtrl = $controller('AddFeaturesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddFeaturesCtrl.awesomeThings.length).toBe(3);
  });
});
