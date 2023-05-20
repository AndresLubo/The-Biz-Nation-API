import Joi from 'joi';

const id = Joi.number().integer();
const email = Joi.string().email().max(30);
const password = Joi.string().min(8).max(30);
const nickname = Joi.string().min(5).max(30);

export const getUserDto = Joi.object({
  id: id.required(),
});

export const createUserDto = Joi.object({
  email: email.required(),
  password: password.required(),
  nickname: nickname.required(),
});

export const updateUserDto = Joi.object({
  email: email,
  nickname: nickname,
});

