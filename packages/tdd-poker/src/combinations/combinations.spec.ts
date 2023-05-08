import { Card } from '../types';
import { comparatorForTwoHands } from '../sorting/comparator';
import { testCaseList } from './test-constants';
import { TestCase } from '../test-types';
import { getHighestCard } from './combinations';

describe('combinations', () => {
  describe('comparatorForTwoHands', () => {
    it.each(testCaseList)('testcase %o', (tc: TestCase) => {
      const { hands, result } = tc;
      const retrievedResult = comparatorForTwoHands(hands);
      expect(retrievedResult).toBe(result);
    });
  });
  describe('getHighestCard', () => {
    it('should find highest card', () => {
      const sortedCards: Card[] = [
        { value: '2', suit: 'S' },
        { value: '2', suit: 'D' },
        { value: '6', suit: 'D' },
        { value: 'T', suit: 'D' },
        { value: 'A', suit: 'S' },
      ];
      const highCard = getHighestCard(sortedCards);
      expect(highCard).toEqual(sortedCards[sortedCards.length - 1]);
    });
  });
});
