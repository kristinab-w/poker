import { Card, CardSuit } from '../types';

export const cards: Card[] = [
  { value: 'A', suit: 'S' },
  { value: '2', suit: 'S' },
  { value: '2', suit: 'D' },
  { value: 'T', suit: 'D' },
  { value: '6', suit: 'D' },
];

export const sortedCards: Card[] = [
  { value: '2', suit: 'S' },
  { value: '2', suit: 'D' },
  { value: '6', suit: 'D' },
  { value: 'T', suit: 'D' },
  { value: 'A', suit: 'S' },
];

export const groupedCards: Record<CardSuit, Card[]> = {
  S: [
    { value: 'A', suit: 'S' },
    { value: '2', suit: 'S' },
  ],
  D: [
    { value: '2', suit: 'D' },
    { value: 'T', suit: 'D' },
    { value: '6', suit: 'D' },
  ],
} as Record<CardSuit, Card[]>;
