import sinon from 'sinon';
import prisma from '../../src/lib/prisma';
import postMock from '../mocks/post.mock';
import dates from '../../src/utils/dates';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import postService from '../../src/services/post.service';

chai.use(sinonChai);

const { expect } = chai;

describe('Post unit tests', function () {
  beforeEach(sinon.restore);

  describe('getWeekPosts', function () {
    it('should call findMany and date util and return', async function () {
      sinon.stub(prisma, 'post').value({
        findMany: sinon.stub().resolves(postMock.postList),
      });
      sinon.stub(dates, 'getDateDaysAgo').returns(new Date());

      const { status, data } = await postService.getWeekPosts();

      expect(dates.getDateDaysAgo).to.have.been.called;
      expect(status).to.be.equal('SUCCESS');
      expect(data).to.be.equal(postMock.postList);
    });
  });
});
