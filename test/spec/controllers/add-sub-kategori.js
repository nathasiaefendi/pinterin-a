'use strict';

describe('Controller: AddSubKategoriCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var AddSubKategoriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddSubKategoriCtrl = $controller('AddSubKategoriCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddSubKategoriCtrl.awesomeThings.length).toBe(3);
  });
});
