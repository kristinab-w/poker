import { valueRank } from './constants';
import { Card, CardSuit } from './types';

export const sortByValue = (cardList: Card[]) => {
  return cardList.sort((a, b) => {
    const aa = a.value;
    const bb = b.value;
    if (aa === bb) {
      return 0;
    }
    const indexA = valueRank.findIndex((val) => val === aa);
    const indexB = valueRank.findIndex((val) => val === bb);
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

export const isCard = (card: { value: string; suit: string }): card is Card => {
  const isValueValid =
    card.value.match(/([2,3,4,5,6,7,8,9,T,J,Q,K,A])/g)?.length === 1;
  const isSuitValid = card.suit.match(/([S,H,D,C])/g)?.length === 1;
  return isValueValid && isSuitValid;
};

export const stringToCardList = (hand: string): Card[] => {
  const list = hand.split(' ');
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
