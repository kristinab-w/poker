import { findRank, getHighestCard } from './combinations';
import { sortByValue, stringArrToCardList, stringToCardList } from './utils';

export const removeAllDublicates = (cards: string[]): string[] => {
  const groupedCards: Record<string, number> = {} as Record<string, number>;
  for (const card of cards) {
    if (!groupedCards[card]) {
      groupedCards[card] = 1;
    } else {
      groupedCards[card] = groupedCards[card] + 1;
    }
  }
  const groupedCardsEntries = Object.entries(groupedCards);
  const uniqueCards: string[] = [];

  for (const group of groupedCardsEntries) {
    const [key, val] = group;
    if (val === 1) {
      uniqueCards.push(key);
    }
  }

  return uniqueCards;
};

export default function comparePokerHands(hands: string[]): -1 | 0 | 1 | void {
  try {
    const firstHandCardList = stringToCardList(hands[0]);
    const secHandCardList = stringToCardList(hands[1]);
    const firstHandRank = findRank(firstHandCardList);
    const secHandRank = findRank(secHandCardList);
    console.log(firstHandRank, secHandRank);

    if (firstHandRank < secHandRank) {
      return -1;
    }
    if (firstHandRank === secHandRank) {
      const cards = hands.reduce(
        (acc, curr) => [...acc, ...curr.split(' ')],
        [] as string[],
      );
      const onlyUnique = removeAllDublicates(cards);
      if (!onlyUnique.length) {
        return 0;
      }
      const onlyUniqueCards = stringArrToCardList(onlyUnique);
      const sortedCards = sortByValue(onlyUniqueCards);
      const highestCard = getHighestCard(sortedCards);

      const isFirstHandWinner = hands[0].match(
        `${highestCard.value}${highestCard.suit}`,
      );
      if (!isFirstHandWinner) {
        return -1;
      }
    }
    return 1;
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
  }
}
