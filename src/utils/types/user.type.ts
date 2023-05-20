export type User = {
  id: number,
  email: string,
  password: string,
  nickname: string,
  createdAt: Date
}

export type CreateUser =  Omit<User, 'id' | 'createdAt'>;

export type UpdateUser = Partial<CreateUser>;

export type GetUser = Omit<User, 'password'>;
