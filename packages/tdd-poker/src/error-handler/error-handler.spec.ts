import { errorHandler } from './error-handler';

describe('errorHandler', () => {
  let logSpy = jest.spyOn(global.console, 'log');
  beforeEach(() => {
    logSpy.mockRestore();
    logSpy = jest.spyOn(global.console, 'log');
  });

  it('should console log error message', () => {
    const error = new Error('Wow');
    errorHandler(error);
    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Wow');
  });

  it('should console log stringified error', () => {
    const error = { a: 'test' };
    errorHandler(error);
    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('{"a":"test"}');
  });
});
