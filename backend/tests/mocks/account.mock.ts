import { Account } from "@prisma/client";
import { generateStringWithLength } from "../../src/utils/strings";
import * as schemas from "../../src/services/validations/schemas/account.schema";

const account: Account = {
  id: 'UUID',
  email: 'example@example.com',
  username: 'Name',
  password: '12345678',
  imageUrl: null,
};

const { id: _i, ...accountCreationFields } = account;

const { username: _n, ...signInFields } = accountCreationFields;

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
