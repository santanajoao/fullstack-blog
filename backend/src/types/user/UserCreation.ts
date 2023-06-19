import { User } from "@prisma/client";

type UserCreation = Omit<User, 'id'>;

export default UserCreation;
