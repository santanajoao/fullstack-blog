import { SignUpFields } from "./SignUp";

export type SignInFields = Omit<SignUpFields, 'username'>;
