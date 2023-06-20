import { mapErrorStatus } from "../../src/utils/http";
import chai from 'chai';

const { expect } = chai;

describe('http util integration tests', function () {
  describe('mapErrorStatus', function () {
    it('should return status 500 if a invalid value was sent', function () {
      const status = mapErrorStatus('AKSDLJASDLALSDKLASKDLAJGCX' as any);
      expect(status).to.be.equal(500);
    });
  });
});
