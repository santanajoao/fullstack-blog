import sinon from 'sinon';
import chai from 'chai';
import treatQuantity from '../../src/services/validations/treatQuantity';

const { expect } = chai;

describe('Services validations unit tests', function () {
  describe('treatQuantity', function () {
    it('should return a default value if a not number was sent', async function () {
      const result = treatQuantity('20' as any);

      expect(typeof result).to.be.equal('number');
    });

    it('should return the same valid if is a number', function () {
      const result = treatQuantity(20);

      expect(result).to.be.equal(20);
    })
  });
});