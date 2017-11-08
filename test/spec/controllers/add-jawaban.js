'use strict';

describe('Controller: AddJawabanCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AddJawabanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddJawabanCtrl = $controller('AddJawabanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddJawabanCtrl.awesomeThings.length).toBe(3);
  });
});
