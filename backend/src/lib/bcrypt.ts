import bcrypt from 'bcrypt';

const encrypt = async (data: string): Promise<string> => {
  const SALT_ROUNDS = 10;
  const hash = await bcrypt.hash(data, SALT_ROUNDS);
  return hash;
}

const compare = async (hash: string, data: string): Promise<boolean> => {
  const isEqual = await bcrypt.compare(data, hash);
  return isEqual;
};

export default {
  encrypt,
  compare,
};
