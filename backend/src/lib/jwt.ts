import * as jwt from 'jsonwebtoken';
import { Payload } from '../types/jwt/Payload';

const getSecret = (): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('Secret not found');
  }
  return secret;
}

const createToken = (payload: Payload): string => {
  const options = { expiresIn: '5d' };
  const secret = getSecret();
  const token = jwt.sign(payload, secret, options);
  return token;
};

export default {
  createToken,
};
