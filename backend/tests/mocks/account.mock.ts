import { generateStringWithLength } from '../../src/utils/strings';
import * as schemas from '../../src/services/validations/schemas/account.schema';

const account = {
  id: 'UUID',
  email: 'example@example.com',
  username: 'Name',
  password: '12345678',
  imageUrl: null,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { id: _i, ...accountCreationFields } = account;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { username: _u, ...signInFields } = accountCreationFields;

const tooShortName = generateStringWithLength(schemas.nameMinLength - 1);
const tooLongName = generateStringWithLength(schemas.nameMaxLength + 1);

const tooShortPassword = generateStringWithLength(schemas.passwordMinLength - 1);
const tooLongPassword = generateStringWithLength(schemas.passwordMaxLength + 1);

const invalidEmail = 'anyrandomthing';

export default {
  account,
  accountCreationFields,
  tooShortName,
  tooLongName,
  tooShortPassword,
  tooLongPassword,
  invalidEmail,
  signInFields,
};
