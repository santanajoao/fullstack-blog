import * as jwt from 'jsonwebtoken';
import { SignPayload, ValidationResponse } from '../types/jwt';

const getSecret = (): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('Secret not found');
  }
  return secret;
}

const createToken = (payload: SignPayload): string => {
  const options = { expiresIn: '2d' };
  const secret = getSecret();
  const token = jwt.sign(payload, secret, options);
  return token;
};

const readToken = (token: string): ValidationResponse => {
  const secret = getSecret();

  try {
    const tokenData = jwt.verify(token, secret) as SignPayload;
    return { valid: true, data: tokenData };
  } catch {
    return { valid: false, data: null };
  }
}

export default {
  createToken,
  readToken,
};
