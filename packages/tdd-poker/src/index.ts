import { comparatorForTwoHands } from './comparator';

export default function comparePokerHands(hands: string[]): -1 | 0 | 1 | void {
  try {
    if (hands.length !== 2) {
      throw new Error('Invalid hand number.');
    }
    return comparatorForTwoHands(hands);
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
  }
}
