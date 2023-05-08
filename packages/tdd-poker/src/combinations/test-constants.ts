import { TestCase } from '../test-types';

export const testCaseList: TestCase[] = [
  {
    hands: ['2H 3H 4H 5H 6H', 'KS AS TS QS JS'],
    result: -1,
  },
  {
    hands: ['2H 3H 4H 5H 6H', 'AS AD AC AH JD'],
    result: 1,
  },
  {
    hands: ['AS AH 2H AD AC', 'JS JD JC JH 3D'],
    result: 1,
  },
  {
    hands: ['2S AH 2H AS AC', 'JS JD JC JH AD'],
    result: -1,
  },
  {
    hands: ['2S AH 2H AS AC', '2H 3H 5H 6H 7H'],
    result: 1,
  },
  {
    hands: ['AS 3S 4S 8S 2S', '2H 3H 5H 6H 7H'],
    result: 1,
  },
  {
    hands: ['2H 3H 5H 6H 7H', '2S 3H 4H 5S 6C'],
    result: 1,
  },
  {
    hands: ['2S 3H 4H 5S 6C', '3D 4C 5H 6H 2S'],
    result: 0,
  },
  {
    hands: ['2S 3H 4H 5S 6C', 'AH AC 5H 6H AS'],
    result: 1,
  },
  {
    hands: ['2S 2H 4H 5S 4C', 'AH AC 5H 6H AS'],
    result: -1,
  },
  {
    hands: ['2S 2H 4H 5S 4C', 'AH AC 5H 6H 7S'],
    result: 1,
  },
  {
    hands: ['6S AD 7H 4S AS', 'AH AC 5H 6H 7S'],
    result: -1,
  },
  {
    hands: ['2S AH 4H 5S KC', 'AH AC 5H 6H 7S'],
    result: -1,
  },
  {
    hands: ['2S 3H 6H 7S 9C', '7H 3C TH 6H 9S'],
    result: -1,
  },
  {
    hands: ['4S 5H 6H TS AC', '3S 5H 6H TS AC'],
    result: 1,
  },
  {
    hands: ['2S AH 4H 5S 6C', 'AD 4C 5H 6H 2C'],
    result: 0,
  },
];
