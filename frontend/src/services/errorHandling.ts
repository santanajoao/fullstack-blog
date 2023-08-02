import TServiceResponse from '@/types/ServiceResponse';
import { AxiosResponse, AxiosError } from 'axios';

export const treatFetchResponse = async <T>(
  requestInfos: unknown,
): Promise<TServiceResponse<T>> => {
  const result = {
    success: false,
    data: null,
    message: null,
    status: null,
  } as unknown as TServiceResponse<T>;

  if (!(requestInfos instanceof Response)) {
    throw new Error('Algo inesperado aconteceu');
  }

  result.status = requestInfos.status;

  try {
    const data = await requestInfos.json();

    if (!requestInfos.ok) {
      result.message = data?.message ?? requestInfos.statusText;
      return result;
    }

    result.data = data as T;
    result.success = true;
    result.message = null;
  } catch {
    result.message = 'Erro ao ler os dados da resposta';
  }

  return result;
};

export const treatAxiosResponse = async <T>(
  requestCallback: () => Promise<AxiosResponse<T>>,
): Promise<TServiceResponse<T>> => {
  const result = {
    success: false,
    data: null,
    message: null,
    status: null,
  } as unknown as TServiceResponse<T>;

  try {
    const response = await requestCallback();
    result.success = true;
    result.data = response.data;
    result.status = response.status;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      result.status = error.response?.status;
      result.message = error.response.data?.message;
      return result;
    }

    throw new Error('Algo inesperado aconteceu');
  }

  return result;
};
