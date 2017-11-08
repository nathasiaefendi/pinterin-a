'use strict';

describe('Controller: KategoriCtrl', function () {

  // load the controller's module
  beforeEach(module('pinterinApp'));

  var KategoriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KategoriCtrl = $controller('KategoriCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KategoriCtrl.awesomeThings.length).toBe(3);
  });
});
