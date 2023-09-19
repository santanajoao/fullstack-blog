import { AccountPublicFields } from './account';

type SuccessValidation = {
  valid: true,
  data: AccountPublicFields,
};

type ErrorValidation = {
  valid: false;
  data: null;
};

export type Payload = Omit<AccountPublicFields, 'imageUrl'>;

export type ValidationResponse = SuccessValidation | ErrorValidation;
