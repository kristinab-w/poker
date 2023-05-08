import { comparatorForTwoHands } from './sorting/comparator';
import { errorHandler } from './error-handler/error-handler';

export default function comparePokerHands(hands: string[]): -1 | 0 | 1 | void {
  try {
    if (hands.length !== 2) {
      throw new Error('Invalid hand number.');
    }
    return comparatorForTwoHands(hands);
  } catch (error) {
    errorHandler(error);
  }
}
