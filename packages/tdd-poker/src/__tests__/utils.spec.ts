import { sortByValue, groupSuits } from '../utils';
import {
  cardsForGrouping,
  cardsForValueSorting,
  sortedCards,
  groupedCards,
} from './mocks';

describe('utils', () => {
  const invalidCards = ['AS', '2S', '2D', 'TD', 'PP'];

  describe('sortByValue', () => {
    it('should sort correctly', () => {
      const result = sortByValue(cardsForValueSorting);
      expect(result).toEqual(sortedCards);
    });
  });

  describe('groupSuits', () => {
    it('should group successfully', () => {
      const result = groupSuits(cardsForGrouping);
      expect(result).toEqual(groupedCards);
    });
  });
});
