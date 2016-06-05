'use strict';

describe('Service: ghService', function () {

  // load the service's module
  beforeEach(module('repoExplorerApp.ghService'));

  // instantiate service
  var ghService;
  beforeEach(inject(function (_ghService_) {
    ghService = _ghService_;
  }));

  it('should do something', function () {
    expect(!!ghService).toBe(true);
  });

});
