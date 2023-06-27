import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import prisma from '../../src/lib/prisma';
import app from '../../src/app';
import postMock from '../mocks/post.mock';
import postTopicService from '../../src/services/post.topic.service';

chai.use(chaiHttp);

const { expect } = chai;

describe('Post routes integration tests', function () {
  beforeEach(sinon.restore);

  describe('GET /posts/popular', function () {
    it('should return the post list', async function () {
      sinon.stub(postTopicService, 'getWeekTopicsPosts')
        .resolves({ status: 'SUCCESS', data: [] });
      
      sinon.stub(prisma, 'post').value({
        findMany: sinon.stub().resolves(postMock.postList),
      });
  
      const { status, body } = await chai
        .request(app)
        .get('/posts/popular');
    
      expect(status).to.be.equal(200)
      expect(body).to.be.deep.equal(postMock.postListResponse);
    });
  });
});
