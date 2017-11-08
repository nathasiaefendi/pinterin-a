'use strict';

describe('Controller: AddAboutCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AddAboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddAboutCtrl = $controller('AddAboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddAboutCtrl.awesomeThings.length).toBe(3);
  });
});
