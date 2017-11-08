'use strict';

describe('Controller: JawabanCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var JawabanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JawabanCtrl = $controller('JawabanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JawabanCtrl.awesomeThings.length).toBe(3);
  });
});
