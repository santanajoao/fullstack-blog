import crypt from '../../src/lib/bcrypt';
import bcrypt from 'bcrypt';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

const { expect } = chai;

describe('bcrypt utility module unit tests', function () {
  beforeEach(sinon.restore);

  describe('encrypt', function () {
    it('should call hash with the correct arguments', async function () {
      const toEncript = '12345678';
      const expectedSaltRounds = 10;
      sinon.stub(bcrypt, 'hash').resolves('test hash');

      const hash = await crypt.encrypt(toEncript);
      
      expect(bcrypt.hash).to.have.been.calledWith(toEncript, expectedSaltRounds);
      expect(hash).to.be.equal('test hash');
    });
  });

  describe('compare', function () {
    it('should call compare with the correct arguments', async function () {
      const toDecript = '12345678';
      const toCompare = '87654321';
      const returned = false;
      sinon.stub(bcrypt, 'compare').resolves(returned);

      const isEqual = await crypt.compare(toDecript, toCompare);
      
      expect(bcrypt.compare).to.have.been.calledWith(toCompare, toDecript);
      expect(isEqual).to.be.equal(returned);
    });
  });
});
