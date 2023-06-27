import sinon from 'sinon';
import jwt from 'jsonwebtoken';
import jwtUtil from '../../src/lib/jwt';
import chai from 'chai';

const { expect } = chai;

describe('jwt utility unit tests', function () {
  beforeEach(sinon.restore);

  describe('createToken', function () {
    it('should throw an erro if no secret environment variable was found', async function () {
      process.env.JWT_SECRET = '';
      sinon.stub(jwt, 'sign');

      const callback = () => jwtUtil.createToken(
        { email: 'email', username: 'name' },
      );

      expect(callback).to.throw('Secret not found');
    });
  });
});
