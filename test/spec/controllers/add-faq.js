'use strict';

describe('Controller: AddFaqCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AddFaqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddFaqCtrl = $controller('AddFaqCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddFaqCtrl.awesomeThings.length).toBe(3);
  });
});
