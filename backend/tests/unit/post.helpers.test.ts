import sinon from 'sinon';
import prisma from '../../src/lib/prisma';
import postHelpers from '../../src/services/helpers/post.helpers';
import postMock from '../mocks/post.mock';
import dates from '../../src/utils/dates';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

const { expect } = chai;

describe('Post helpers unit tests', function () {
  beforeEach(sinon.restore);

  describe('getWeekPosts', function () {
    it('should call findMany and date util and return', async function () {
      sinon.stub(prisma, 'post').value({
        findMany: sinon.stub().resolves(postMock.postList),
      });
      sinon.stub(dates, 'getDateDaysAgo').returns(new Date());

      const result = await postHelpers.getWeekPosts();

      expect(dates.getDateDaysAgo).to.have.been.called;
      expect(result).to.be.equal(postMock.postList);
    });
  });
});
