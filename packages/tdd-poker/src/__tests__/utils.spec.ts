import { sortByValue, groupSuits } from '../utils';
import { cards, sortedCards, groupedCards } from './mocks';

describe('utils', () => {
  describe('sortByValue', () => {
    it('should sort correctly', () => {
      const result = sortByValue(cards);
      expect(result).toEqual(sortedCards);
    });
  });

  describe('groupSuits', () => {
    it('should group successfully', () => {
      const result = groupSuits(cards);
      expect(result).toEqual(groupedCards);
    });
  });
});
