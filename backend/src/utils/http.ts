import { ErrorStatus } from '../types/ServiceResponse';

const INTERNAL_SERVER_ERROR = 500;
const map: Record<ErrorStatus, number> = {
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

export const mapErrorStatus = (errorStatus: ErrorStatus): number => {
  return map[errorStatus] || INTERNAL_SERVER_ERROR;
};
