import { User } from "@prisma/client";
import { generateStringWithLength } from "../../src/utils/strings";
import { nameMaxLength, nameMinLength, passwordMaxLength, passwordMinLength } from "../../src/services/validations/schemas/account.schema";

const account: User = {
  id: 'UUID',
  email: 'example@example.com',
  name: 'Name',
  password: '12345678',
};

const { id: _i, ...accountCreationFields } = account;

const { name: _n, ...signInFields } = accountCreationFields;

const tooShortName = generateStringWithLength(nameMinLength - 1);
const tooLongName = generateStringWithLength(nameMaxLength + 1);

const tooShortPassword = generateStringWithLength(passwordMinLength - 1);
const tooLongPassword = generateStringWithLength(passwordMaxLength + 1);

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
