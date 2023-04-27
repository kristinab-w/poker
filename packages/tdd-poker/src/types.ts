export type CardValue =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'T'
  | 'J'
  | 'Q'
  | 'K'
  | 'A';
export type CardSuit = 'S' | 'H' | 'D' | 'C';

export interface Card {
  value: CardValue;
  suit: CardSuit;
}

export const enum Rank {
  STRAIGHT_FLUSH = 9,
  FOUR_OF_KIND = 8,
  FULL_HOUSE = 7,
  FLUSH = 6,
  STRAIGHT = 5,
  THREE_OF_KIND = 4,
  TWO_PAIRS = 3,
  PAIR = 2,
  HIGH_CARD = 1,
}
