type SuccesServiceResponse<T> = {
  status: 'SUCCESS',
  data: T,
};

export type ErrorStatus = 'INVALID_VALUE' | 'CONFLICT';

type ErrorServiceResponse = {
  status: ErrorStatus,
  data: { message: string },
};

export type SyncServiceResponse<T> = SuccesServiceResponse<T> | ErrorServiceResponse;

export type AsyncServiceResponse<T> = Promise<SyncServiceResponse<T>>;
