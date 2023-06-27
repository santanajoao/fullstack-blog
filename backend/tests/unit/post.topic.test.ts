import sinon from 'sinon';
import chai from 'chai'
import sinonChai from 'sinon-chai';
import prisma from "../../src/lib/prisma";
import postTopicMocks from "../mocks/post.topic.mock";
import postService from '../../src/services/post.service';
import postTopicService from '../../src/services/post.topic.service';

chai.use(sinonChai);

const { expect } = chai;

describe('PostTopic unit tests', function () {
  beforeEach(sinon.restore);

  describe('getWeekTopicsPosts', function () {
    it('should call the expected functions and return', async function () {
      sinon.stub(prisma, 'postTopic').value({
        findMany: sinon.stub().resolves(postTopicMocks.postTopicList),
      });
      
      const arrayMapMock = { map: sinon.stub().resolves([]) };
      sinon.stub(postService, 'getWeekPosts')
        .resolves({ status: 'SUCCESS', data: arrayMapMock as any });

      const { status, data } = await postTopicService.getWeekTopicsPosts();
      
      expect(arrayMapMock.map).to.have.been.called;
      expect(status).to.be.equal('SUCCESS');
      expect(data).to.be.deep.equal(postTopicMocks.postTopicList);
    });
  });
});
