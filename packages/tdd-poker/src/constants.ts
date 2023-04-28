import { CardSuit, CardValue, Rank } from './types';

export const VALUE_LIST: CardValue[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'J',
  'Q',
  'K',
  'A',
];
export const SUIT_LIST: CardSuit[] = ['S', 'H', 'D', 'C'];

export const RANKS_REQUIRE_HIGH_CARD_CHECK = [
  Rank.HIGH_CARD,
  Rank.PAIR,
  Rank.TWO_PAIRS,
  Rank.FLUSH,
  Rank.FOUR_OF_KIND,
  Rank.STRAIGHT_FLUSH,
];
