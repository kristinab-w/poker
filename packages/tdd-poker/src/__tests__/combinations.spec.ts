import { findPairs } from '../combinations';
import { Card } from '../types';

describe('combinations', () => {
  describe('findPairs', () => {
    it('should find pairs', () => {
      const sortedCards: Card[] = [
        {
          value: '2',
          suit: 'S',
        },
        {
          value: '6',
          suit: 'D',
        },
        {
          value: 'T',
          suit: 'D',
        },
        {
          value: 'A',
          suit: 'S',
        },
        {
          value: '2',
          suit: 'D',
        },
      ];

      const expectedPairs: Card[][] = [
        [
          {
            value: '2',
            suit: 'S',
          },
          {
            value: '2',
            suit: 'D',
          },
        ],
      ];
      const pairs = findPairs(sortedCards);
      expect(pairs).toEqual(expectedPairs);
    });
  });
});
