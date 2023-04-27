import { suits, values } from './constants';
import { Card, CardSuit, CardValue, Rank } from './types';
import { groupSuits, sortByValue } from './utils';

export const findPairs = (cardsSortedByValue: Card[]): Card[][] => {
  let pairs: Card[][] = [];

  for (let i = 0; i < cardsSortedByValue.length - 1; i++) {
    const card = cardsSortedByValue[0];

    for (let j = i + 1; j < cardsSortedByValue.length; j++) {
      const nextCard = cardsSortedByValue[j];

      if (card.value === nextCard.value) {
        pairs = [...pairs, [card, nextCard]];
        i = j;
        break;
      }
    }
  }

  return pairs;
};

const isNumberOfAKind =
  (sortedAndGroupedHand: Record<CardSuit, Card[]>) =>
  (numberOfCards: number) => {
    const cardGroups = Object.entries(sortedAndGroupedHand);
    let suit;
    for (const [key, list] of cardGroups) {
      if (list.length === numberOfCards) {
        suit = key;
      }
    }
    return !!suit;
  };

// same suit + straight
const isStaightFlush = (
  cardsSortedByValue: Card[],
  cardsSortedBySuit: Record<CardSuit, Card[]>,
) => {
  const isSameSuit = isNumberOfAKind(cardsSortedBySuit)(5);
  const hasStraightCombination = isStraight(cardsSortedByValue);
  return isSameSuit && hasStraightCombination;
};

// Four cards of the same value
const hasFourSameValueCards = (cards: Card[]) => {
  const pairs = findPairs(cards);
  return pairs.length === 4;
};

// Combination of three of a kind and a pair
const isFullHouse = (cards: Card[]) => {
  const pairs = findPairs(cards);
  if (pairs.length !== 2) {
    return false;
  } else if (pairs[0].length === 2 && pairs[1].length === 3) {
    return true;
  } else if (pairs[0].length === 3 && pairs[1].length === 2) {
    return true;
  } else {
    return false;
  }
};

// 5 cards of the same suit
const isFlush = (cardsSortedBySuit: Record<CardSuit, Card[]>) => {
  for (const suit of suits) {
    if (cardsSortedBySuit[suit] && cardsSortedBySuit[suit].length === 5) {
      return true;
    }
  }
  return false;
};

// Sequence of 5 cards in increasing value (Ace can precede 2 and follow up King)
const isStraight = (cardsSortedByValue: Card[]) => {
  const first = cardsSortedByValue[0];
  const start = values.findIndex((el) => el === first.value);
  if (start === -1) {
    return false;
  }
  // handle A as starting point
  let timesMatchesPlace = 0;
  if (start === values.length - 1) {
    timesMatchesPlace = 1;
    for (let i = 1; i < 5; i++) {
      if (cardsSortedByValue[i].value === values[i - 1]) {
        timesMatchesPlace += 1;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    if (cardsSortedByValue[i].value === values[start + i]) {
      timesMatchesPlace += 1;
    }
  }
  if (timesMatchesPlace === 5) {
    return true;
  }
  return false;
};

// Three cards with the same value
const isThreeOfaKind = (cards: Card[]) => {
  const pairs = findPairs(cards);
  return pairs.length === 3;
};

// Two times two cards with the same value
const isTwoPairs = (cards: Card[]) => {
  const pairs = findPairs(cards);
  return pairs.length === 2;
};

// Simple value of the card. Lowest: 2 – Highest: Ace (King in the example)
const getHighestCard = (cardsSortedByValue: Card[]) => {
  return cardsSortedByValue[cardsSortedByValue.length - 1];
};

const getHighestSameValueCardList = (cards: Card[]): Card[] => {
  const cardsSortedByValue = sortByValue(cards);
  const valuesSorted = {} as Record<CardValue, Card[]>;

  for (const card of cardsSortedByValue) {
    const { value, suit: _suit } = card;

    if (valuesSorted[value]) {
      valuesSorted[value] = [...valuesSorted[value], card];
    } else {
      valuesSorted[value] = [card];
    }
  }

  let highestLengthCardList: Card[] = [];
  for (const value of values) {
    if (
      valuesSorted[value] &&
      valuesSorted[value].length > highestLengthCardList.length
    ) {
      highestLengthCardList = valuesSorted[value];
    }
  }

  return highestLengthCardList;
};

const getHighestSameSuitCardList = (cardsInHand: Card[]): Card[] => {
  const cardsSortedBySuit = groupSuits(cardsInHand);
  const cardGroups = Object.entries(cardsSortedBySuit);

  let highestLengthCardList: Card[] = [];
  for (const [_key, list] of cardGroups) {
    if (list.length > highestLengthCardList.length) {
      highestLengthCardList = list;
    }
  }
  return highestLengthCardList;
};

const findRank = (cardsInHand: Card[]): Rank => {
  // highest number of the same value cards
  // highest number of the same suit cards
  // highest card
  const cardsSortedByValue = sortByValue(cardsInHand);
  const cardsSortedBySuit = groupSuits(cardsInHand);

  if (isStaightFlush(cardsSortedByValue, cardsSortedBySuit)) {
    return Rank.STRAIGHT_FLUSH;
  } else if (hasFourSameValueCards(cardsSortedByValue)) {
    return Rank.FOUR_OF_KIND;
  } else if (isFullHouse(cardsSortedByValue)) {
    return Rank.FULL_HOUSE;
  } else if (isFlush(cardsSortedBySuit)) {
    return Rank.FLUSH;
  } else if (isStraight(cardsSortedByValue)) {
    return Rank.STRAIGHT;
  } else if (isThreeOfaKind(cardsSortedByValue)) {
    return Rank.THREE_OF_KIND;
  } else if (isTwoPairs(cardsSortedByValue)) {
    return Rank.TWO_PAIRS;
  } else if (getHighestCard(cardsSortedByValue)) {
    return Rank.HIGH_CARD;
  }
  return Rank.HIGH_CARD;
};

export { findRank, getHighestCard };
