type SuccessServiceResponse<T> = {
  success: true;
  data: T;
  status: number;
  message: null;
};

type ErrorServiceResponse = {
  success: false;
  data: null;
  status: number;
  message: string;
};

type TServiceResponse<T> = SuccessServiceResponse<T> | ErrorServiceResponse;

export default TServiceResponse;
