'use strict';

describe('Service: mixins', function () {

  // load the service's module
  beforeEach(module('mixinaidApp'));

  // instantiate service
  var mixins;
  beforeEach(inject(function (_mixins_) {
    mixins = _mixins_;
  }));

  it('should do something', function () {
    expect(!!mixins).toBe(true);
  });

});
