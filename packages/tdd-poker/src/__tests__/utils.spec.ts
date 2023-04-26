import { sortByValue, groupSuits, stringToCardList } from '../utils';
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

  describe('stringToCardList', () => {
    it('should convert hand to card list correctly', () => {
      const hand = 'AS 2S 2D TD 6D';
      const result = stringToCardList(hand);
      expect(result).toEqual(cards);
    });

    it('should throw error when card is invalid', () => {
      try {
        const handWithInvalidCard = 'AS 2S 2D PP 6D';
        const result = stringToCardList(handWithInvalidCard);
      } catch (e) {
        expect(e.message).toBe('Invalid card format.');
      }
    });

    it('should throw error when card number is invalid', () => {
      try {
        const handWithInvalidCardNumber = 'AS 2S 2D 6D';
        const result = stringToCardList(handWithInvalidCardNumber);
      } catch (e) {
        expect(e.message).toBe('Invalid card number in hand.');
      }
    });
  });
});
