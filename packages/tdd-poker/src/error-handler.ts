type ErrorWithMessage = {
  message: string;
};

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

const reportErrorWithMessage = (error: ErrorWithMessage) => {
  console.log(error.message);
};

const reportUnknownError = (error: unknown) => {
  console.log(JSON.stringify(error));
};

export const errorHandler = (error: unknown) => {
  if (isErrorWithMessage(error)) {
    reportErrorWithMessage(error);
  } else {
    reportUnknownError(error);
  }
};
