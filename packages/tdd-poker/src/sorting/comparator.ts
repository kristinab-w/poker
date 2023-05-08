import { findRank } from '../combinations/combinations';
import { RANKS_REQUIRE_HIGH_CARD_CHECK, VALUE_LIST } from '../constants';
import { Card } from '../types';
import { sortByValue, stringToCardList } from '../utils/utils';

const compareTwoHighCards = (firstHigh: Card, secHigh: Card): -1 | 0 | 1 => {
  const first = VALUE_LIST.indexOf(firstHigh.value);
  const sec = VALUE_LIST.indexOf(secHigh.value);

  if (first > sec) {
    return 1;
  }
  if (sec > first) {
    return -1;
  }
  return 0;
};

const findHighestCardOwningHand = (
  firstSortedCards: Card[],
  secSortedCards: Card[],
): -1 | 0 | 1 => {
  for (let i = 4; i >= 0; i--) {
    const first = firstSortedCards[i];
    const sec = secSortedCards[i];
    const result = compareTwoHighCards(first, sec);

    if (result !== 0) {
      return result;
    }
  }
  return 0;
};

const comparatorForTwoHands = (hands: string[]): -1 | 0 | 1 => {
  const firstHandCardList = stringToCardList(hands[0]);
  const secHandCardList = stringToCardList(hands[1]);

  const firstHandRank = findRank(firstHandCardList);
  const secHandRank = findRank(secHandCardList);

  if (firstHandRank < secHandRank) {
    return -1;
  }
  if (firstHandRank > secHandRank) {
    return 1;
  }

  const firstCardsSortedByValue = sortByValue(firstHandCardList);
  const secCardsSortedByValue = sortByValue(secHandCardList);

  if (RANKS_REQUIRE_HIGH_CARD_CHECK.includes(firstHandRank)) {
    return findHighestCardOwningHand(
      firstCardsSortedByValue,
      secCardsSortedByValue,
    );
  }
  return 0;
};

export { comparatorForTwoHands };
