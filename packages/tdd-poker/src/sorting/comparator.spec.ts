import { comparatorForTwoHands } from './comparator';

describe('comparePokerHands', () => {
  it('should return -1 when sec hand rank is higher than first hand rank', () => {
    const result = comparatorForTwoHands(['2S AH 2H AS AC', 'JS JD JC JH AD']);
    expect(result).toBe(-1);
  });

  it('should return 1 when first hand rank is higher than sec hand rank', () => {
    const result = comparatorForTwoHands(['2H 3H 4H 5H 6H', 'AS AD AC AH JD']);
    expect(result).toBe(1);
  });

  it('should return 0 when hand ranks are equal rank', () => {
    const result = comparatorForTwoHands(['2S 3H 4H 5S 6C', '3D 4C 5H 6H 2S']);
    expect(result).toBe(0);
  });

  it('should return 1 when hand ranks are equal rank but first hand has higher card', () => {
    const result = comparatorForTwoHands(['4S 5H 6H TS AC', '3S 5H 6H TS AC']);
    expect(result).toBe(1);
  });
});
