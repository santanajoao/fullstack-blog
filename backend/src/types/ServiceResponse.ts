export type SuccesServiceResponse<T> = {
  status: 'SUCCESS',
  data: T,
};

export type ErrorServiceResponse = {
  status: 'ERROR',
  data: {
    message: string,
  },
};

export type SyncServiceResponse<T> = SuccesServiceResponse<T> | ErrorServiceResponse;

export type AsyncServiceResponse<T> = Promise<SyncServiceResponse<T>>;
