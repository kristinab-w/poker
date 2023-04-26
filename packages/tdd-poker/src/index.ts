import { Card, CardValue } from './types';
import { groupSuits, sortByValue, stringToCardList } from './utils';

const isNumberOfAKind =
  (sortedAndGroupedHand: Record<'S' | 'H' | 'D' | 'C', string[]>) =>
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

const isNumberOfSameValue = (sortedCards: string[], numberOfCards: number) => {
  const cards = sortedCards.map((card) => card.split(''));
  const sameValueCardList: string[][] = [];

  // const valuesSorted: Record<CardValue, Card[]> = {};
  // for(let i = 0; i < cards.length; i++){
  //   const [value, _suit] = cards[i];

  //   if(valuesSorted[value])
  //   valuesSorted[value] =

  // }

  return false;
};

// same suit + straight
const isStaightFlush = (sortedAndGroupedHand: string[]) => {
  // const isSameSuit = isFlush(sortedAndGroupedHand);
  const isAllStraight = isStraight();
  // return isSameSuit && isAllStraight;
};

// Four cards of the same value
const hasFourSameValueCards = () => {};

// DONE
// Combination of three of a kind and a pair
const isFullHouse = (hasNumberOfCards: (numberOfCards: number) => boolean) =>
  hasNumberOfCards(3) && hasNumberOfCards(2);

// DONE
// 5 cards of the same suit
const isFlush = (hasNumberOfCards: (numberOfCards: number) => boolean) =>
  hasNumberOfCards(5);

// Sequence of 5 cards in increasing value (Ace can precede 2 and follow up King)
const isStraight = () => {};
// Three cards with the same value
const isThreeOfaKind = () => {};
// Two times two cards with the same value
const isTwoPairs = () => {};
// Two cards with the same value
const isPair = () => {};
// Simple value of the card. Lowest: 2 – Highest: Ace (King in the example)
// asfdadfadfadfaf
const isHighCard = () => {};

export default function comparePokerHands(hands: string[]): -1 | 0 | 1 {
  // sort from lowest to highest
  // get grouped by suit
  const firstHandCardList = stringToCardList(hands[0]);
  const cardsSortedByValue = sortByValue(firstHandCardList);
  const cardsSortedBySuit = groupSuits(firstHandCardList);
  // const hasNumberOfCardsOfSameSuit = isNumberOfAKind(firstHand);

  // find highest first hand rank - check for the same and higher hand rank
  return 0;
}
