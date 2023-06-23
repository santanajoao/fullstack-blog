type SuccessServiceResponse<T> = {
  success: true;
  data: T;
};

type ErrorServiceResponse = {
  success: false;
  data: {
    message: string,
  },
};

export type ServiceResponse<T> = SuccessServiceResponse<T> | ErrorServiceResponse;
