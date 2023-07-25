export type SignPayload = {
  id: string;
  email: string;
  username: string;
  imageUrl: string | null;
};

type SuccessValidation = {
  valid: true,
  data: SignPayload,
};

type ErrorValidation = {
  valid: false;
  data: null;
};

export type ValidationResponse = SuccessValidation | ErrorValidation;
