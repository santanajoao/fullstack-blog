import postHelpers from "../../src/services/helpers/post.helpers";
import topicPostHelpers from "../../src/services/helpers/postTopic.helpers";
import sinon from 'sinon';
import chai from 'chai'
import sinonChai from 'sinon-chai';
import prisma from "../../src/lib/prisma";
import topicPostMock from "../mocks/topic.post.mock";

chai.use(sinonChai);

const { expect } = chai;

describe('TopicPost helpers unit tests', function () {
  beforeEach(sinon.restore);

  describe('getWeekTopicsPosts', function () {
    it('should call the expected functions and return', async function () {
      sinon.stub(prisma, 'postTopic').value({
        findMany: sinon.stub().resolves(topicPostMock.postTopicList),
      });
      
      const arrayMapMock = { map: sinon.stub().resolves([]) };
      sinon.stub(postHelpers, 'getWeekPosts').resolves(arrayMapMock as any);

      const result = await topicPostHelpers.getWeekTopicsPosts();
      
      expect(arrayMapMock.map).to.have.been.called;
      expect(result).to.be.deep.equal(topicPostMock.postTopicList);
    });
  });
});
