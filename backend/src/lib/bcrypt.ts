import bcrypt from 'bcrypt';

const encrypt = (data: string, sync: boolean = false): Promise<string> | string => {
  const SALT_ROUNDS = 10;
  if (sync === true) {
    return bcrypt.hashSync(data, SALT_ROUNDS);
  }
  return bcrypt.hash(data, SALT_ROUNDS);
};

const compare = async (hash: string, data: string): Promise<boolean> => {
  const isEqual = await bcrypt.compare(data, hash);
  return isEqual;
};

export default {
  encrypt,
  compare,
};
