'use strict';

describe('Controller: SubKategoriCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var SubKategoriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubKategoriCtrl = $controller('SubKategoriCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubKategoriCtrl.awesomeThings.length).toBe(3);
  });
});
