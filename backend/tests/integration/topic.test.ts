import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import prisma from '../../src/lib/prisma';
import app from '../../src/app';
import topicMock from '../mocks/topic.mock';
import postTopicService from '../../src/services/post.topic.service';

chai.use(chaiHttp);

const { expect } = chai;

describe('Topic routes integration tests', function () {
  beforeEach(sinon.restore);

  describe('GET /topics/popular', function () {
    it('should return the topic list', async function () {
      sinon.stub(postTopicService, 'getWeekTopicsPosts')
        .resolves({ status: 'SUCCESS', data: [] });
      sinon.stub(prisma, 'topic').value({
        findMany: sinon.stub().resolves(topicMock.topicList),
      });
  
      const { status, body } = await chai
        .request(app)
        .get('/topics/popular');
    
      expect(status).to.be.equal(200)
      expect(body).to.be.deep.equal(topicMock.topicList);
    });
  });
});
