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
