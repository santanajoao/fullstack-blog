import dates from "../../src/utils/dates";
import chai from 'chai';

const { expect } = chai;

describe('dates util unit tests', function () {
  describe('getDateDaysAgo', function () {
    it('should return a date n days ago now', function () {
      const daysAgo = 7;
  
      const today = new Date();
      const todayDay = today.getDate();
  
      const result = dates.getDateDaysAgo(daysAgo);
      const resultDay = result.getDate();
  
      expect(resultDay).to.be.equal(todayDay - daysAgo)
    })
  });

  describe('getDateBetweenNowAnd', function () {
    it('should return a date in the correct range', function () {
      const daysAgo = 7;
      const today = new Date();
      const todayDay = today.getDate();
      const daysAgoDay = todayDay - daysAgo;

      for (let index = 0; index <= 50; index += 1) {
        const randomDate = dates.getDateBetweenNowAnd(daysAgo);
        const day = randomDate.getDate();
        expect(day).to.be.within(daysAgoDay, todayDay);
      }
    });
  });
});