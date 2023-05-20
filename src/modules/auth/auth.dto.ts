import joi from 'joi'

const email = joi.string().email();
const password = joi.string();

export const login = joi.object({
  email: email.required(),
  password: password.required(),
});


