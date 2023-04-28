import { VALUE_LIST } from './constants';
import { Card, CardSuit, CardValue } from './types';

export const sortByValue = (cardList: Card[]) => {
  return [...cardList].sort((a, b) => {
    const aa = a.value;
    const bb = b.value;
    if (aa === bb) {
      return 0;
    }
    const indexA = VALUE_LIST.findIndex((val) => val === aa);
    const indexB = VALUE_LIST.findIndex((val) => val === bb);
    if (indexA > indexB) {
      return 1;
    }
    return -1;
  });
};

export const groupSuits = (cardList: Card[]): Record<CardSuit, Card[]> => {
  return cardList.reduce((acc, card) => {
    const cardSuit = card.suit;

    if (acc[cardSuit]) {
      acc[cardSuit] = [...acc[cardSuit], card];
    } else {
      acc[cardSuit] = [card];
    }
    return acc;
  }, {} as Record<CardSuit, Card[]>);
};

const isCard = (card: { value: string; suit: string }): card is Card => {
  const isValueValid =
    card.value.match(/([2,3,4,5,6,7,8,9,T,J,Q,K,A])/g)?.length === 1;
  const isSuitValid = card.suit.match(/([S,H,D,C])/g)?.length === 1;
  return isValueValid && isSuitValid;
};

export const stringToCardList = (hand: string): Card[] => {
  const list = hand.split(' ');
  if (list.length !== 5) {
    throw new Error('Invalid card number in hand.');
  }

  return stringArrToCardList(list);
};

export const stringArrToCardList = (list: string[]): Card[] => {
  return list.map((item) => {
    const value = item.charAt(0);
    const suit = item.charAt(1);
    const card = { value, suit };

    if (!isCard(card)) {
      throw new Error('Invalid card format.');
    }

    return card;
  });
};

export const findGroupsWithTheSameValue = (
  cardsSortedByValue: Card[],
): Card[][] => {
  let uniqueCardValues: CardValue[] = [];

  for (const card of cardsSortedByValue) {
    if (!uniqueCardValues.length) {
      uniqueCardValues = [card.value];
    } else {
      let found = false;
      for (const cardValue of uniqueCardValues) {
        if (cardValue === card.value) {
          found = true;
          break;
        }
      }
      if (!found) {
        uniqueCardValues = [...uniqueCardValues, card.value];
      }
    }
  }
  let groups: Card[][] = [];
  for (const uniqueCardValue of uniqueCardValues) {
    const group = cardsSortedByValue.filter(
      (card) => card.value === uniqueCardValue,
    );
    groups = [...groups, group];
  }

  return groups;
};
