import sinon from 'sinon';
import jwt from 'jsonwebtoken';
import { createToken } from '../../src/lib/jwt';
import chai from 'chai';

const { expect } = chai;

describe('jwt utility unit tests', function () {
  describe('createToken', function () {
    it('should throw an erro if no secret environment variable was found', async function () {
      process.env.JWT_SECRET = '';
      sinon.stub(jwt, 'sign');

      const callback = () => createToken(
        { email: 'email', name: 'name' },
      );

      expect(callback).to.throw('Secret not found');
    });
  });
});
