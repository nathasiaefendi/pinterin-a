'use strict';

describe('Controller: AddKategoriCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AddKategoriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddKategoriCtrl = $controller('AddKategoriCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddKategoriCtrl.awesomeThings.length).toBe(3);
  });
});
