'use strict';

describe('Controller: AddSoalCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AddSoalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddSoalCtrl = $controller('AddSoalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddSoalCtrl.awesomeThings.length).toBe(3);
  });
});
