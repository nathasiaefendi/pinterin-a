'use strict';

describe('Controller: AboutWebCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AboutWebCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutWebCtrl = $controller('AboutWebCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutWebCtrl.awesomeThings.length).toBe(3);
  });
});
