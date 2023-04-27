import { findRank } from './combinations';
import { stringToCardList } from './utils';

export default function comparePokerHands(hands: string[]): -1 | 0 | 1 | void {
  try {
    const firstHandCardList = stringToCardList(hands[0]);
    const secHandCardList = stringToCardList(hands[1]);

    const firstHandRank = findRank(firstHandCardList);
    const secHandRank = findRank(secHandCardList);

    if (firstHandRank > secHandRank) {
      return 1;
    }
    if (firstHandRank < secHandRank) {
      return -1;
    }
    return 0;
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
  }
}
