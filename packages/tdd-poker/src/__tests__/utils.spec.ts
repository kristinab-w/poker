import { Card } from '../types';
import {
  sortByValue,
  groupSuits,
  stringToCardList,
  stringArrToCardList,
  findGroupsWithTheSameValue,
} from '../utils';
import { cards, sortedCards, groupedCards } from './test-constants';

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

  describe('stringToCardList', () => {
    it('should convert hand to card list correctly', () => {
      const hand = 'AS 2S 2D TD 6D';
      const result = stringToCardList(hand);
      expect(result).toEqual(cards);
    });

    it('should throw error when card is invalid', () => {
      try {
        const handWithInvalidCard = 'AS 2S 2D PP 6D';
        stringToCardList(handWithInvalidCard);
      } catch (e) {
        expect(e.message).toBe('Invalid card format.');
      }
    });

    it('should throw error when card number is invalid', () => {
      try {
        const handWithInvalidCardNumber = 'AS 2S 2D 6D';
        stringToCardList(handWithInvalidCardNumber);
      } catch (e) {
        expect(e.message).toBe('Invalid card number in hand.');
      }
    });
  });

  describe('stringArrToCardList', () => {
    it('should convert hand list to card list correctly', () => {
      const hand = ['AS', '2S', '2D', 'TD', '6D'];

      const result = stringArrToCardList(hand);
      expect(result).toEqual(cards);
    });

    it('should throw error when card is invalid', () => {
      try {
        const handWithInvalidCard = ['AS', '2S', '2D', 'PP', '6D'];
        stringArrToCardList(handWithInvalidCard);
      } catch (e) {
        expect(e.message).toBe('Invalid card format.');
      }
    });
  });

  describe('findGroupsWithTheSameValue', () => {
    it('should group same value cards', () => {
      const groupedSameValueCards: Card[][] = [
        [{ value: 'A', suit: 'S' }],
        [
          { value: '2', suit: 'S' },
          { value: '2', suit: 'D' },
        ],
        [{ value: 'T', suit: 'D' }],
        [{ value: '6', suit: 'D' }],
      ];
      const result = findGroupsWithTheSameValue(cards);
      expect(result).toEqual(groupedSameValueCards);
    });
  });
});
