import { VALUE_LIST } from './constants';
import { Card, CardSuit, Rank } from './types';
import { findGroupsWithTheSameValue, groupSuits, sortByValue } from './utils';

const isNumberOfAKind = (
  sortedAndGroupedHand: Record<CardSuit, Card[]>,
  numberOfCards: number,
) => {
  const cardGroups = Object.entries(sortedAndGroupedHand);
  let suit;
  for (const [key, list] of cardGroups) {
    if (list.length === numberOfCards) {
      suit = key;
    }
  }
  return !!suit;
};

const isStaightFlush = (
  cardsSortedByValue: Card[],
  cardsSortedBySuit: Record<CardSuit, Card[]>,
) => {
  const isSameSuit = isFlush(cardsSortedBySuit);
  const hasStraightCombination = isStraight(cardsSortedByValue);
  return isSameSuit && hasStraightCombination;
};

const hasFourSameValueCards = (sortedGroups: Card[][]) => {
  if (sortedGroups.length > 2) {
    return false;
  }
  return sortedGroups[0].length === 4 || sortedGroups[1].length === 4;
};

const isFullHouse = (sortedGroups: Card[][]) => {
  if (sortedGroups.length < 2) {
    return false;
  } else if (sortedGroups[0].length === 2 && sortedGroups[1].length === 3) {
    return true;
  } else if (sortedGroups[0].length === 3 && sortedGroups[1].length === 2) {
    return true;
  } else {
    return false;
  }
};

const isFlush = (cardsSortedBySuit: Record<CardSuit, Card[]>) =>
  isNumberOfAKind(cardsSortedBySuit, 5);

const isStraight = (cardsSortedByValue: Card[]) => {
  const first = cardsSortedByValue[0];
  const startIndex = VALUE_LIST.findIndex((el) => el === first.value);

  const timesMatchesPlace = cardsSortedByValue.reduce((acc, card, index) => {
    return card.value === VALUE_LIST[startIndex + index] ? acc + 1 : acc;
  }, 0);

  if (
    timesMatchesPlace === 4 &&
    startIndex === 0 &&
    cardsSortedByValue[4].value === VALUE_LIST[VALUE_LIST.length - 1]
  ) {
    return true;
  }
  return timesMatchesPlace === 5;
};

const isThreeOfaKind = (sortedGroups: Card[][]) => sortedGroups[0].length === 3;

const isTwoPairs = (sortedGroups: Card[][]) =>
  sortedGroups[0].length === 2 && sortedGroups[1].length === 2;

const isPair = (sortedGroups: Card[][]) =>
  sortedGroups[0].length === 2 && sortedGroups[1].length === 1;

const getHighestCard = (cardsSortedByValue: Card[]) =>
  cardsSortedByValue[cardsSortedByValue.length - 1];

const findRank = (cardsInHand: Card[]): Rank => {
  const cardsSortedByValue = sortByValue(cardsInHand);
  const cardsSortedBySuit = groupSuits(cardsInHand);

  if (isStaightFlush(cardsSortedByValue, cardsSortedBySuit)) {
    return Rank.STRAIGHT_FLUSH;
  }

  const groupsOfSameValue = findGroupsWithTheSameValue(cardsSortedByValue);
  const sortedGroupsByLength = groupsOfSameValue.sort(
    (group1, group2) => group2.length - group1.length,
  );

  if (hasFourSameValueCards(sortedGroupsByLength)) {
    return Rank.FOUR_OF_KIND;
  }
  if (isFullHouse(sortedGroupsByLength)) {
    return Rank.FULL_HOUSE;
  }
  if (isStraight(cardsSortedByValue)) {
    return Rank.STRAIGHT;
  }
  if (isFlush(cardsSortedBySuit)) {
    return Rank.FLUSH;
  }
  if (isThreeOfaKind(sortedGroupsByLength)) {
    return Rank.THREE_OF_KIND;
  }
  if (isTwoPairs(sortedGroupsByLength)) {
    return Rank.TWO_PAIRS;
  }
  if (isPair(sortedGroupsByLength)) {
    return Rank.PAIR;
  }

  return Rank.HIGH_CARD;
};

export { findRank, getHighestCard };
