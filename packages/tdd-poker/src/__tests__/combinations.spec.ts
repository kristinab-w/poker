import { findGroupsWithTheSameValue } from '../combinations';
import { Card } from '../types';

describe('combinations', () => {
  describe('findPairs', () => {
    it('should find pair', () => {
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
      const pairs = findGroupsWithTheSameValue(sortedCards);
      expect(pairs).toEqual(expectedPairs);
    });
    it('should find 2 groups', () => {
      const sortedCards: Card[] = [
        { value: '2', suit: 'S' },
        { value: '2', suit: 'H' },
        { value: 'A', suit: 'H' },
        { value: 'A', suit: 'S' },
        { value: 'A', suit: 'C' },
      ];

      const expectedGroups: Card[][] = [
        [
          { value: '2', suit: 'S' },
          { value: '2', suit: 'H' },
        ],
        [
          { value: 'A', suit: 'H' },
          { value: 'A', suit: 'S' },
          { value: 'A', suit: 'C' },
        ],
      ];
      const pairs = findGroupsWithTheSameValue(sortedCards);
      expect(pairs).toEqual(expectedGroups);
    });
  });
});
