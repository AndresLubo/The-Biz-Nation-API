import Joi from 'joi';

const id = Joi.number().integer();
const image = Joi.string().uri();
const name = Joi.string().max(39);
const age = Joi.number().integer();
const weight = Joi.number().integer();
const history = Joi.string();

export const getCharacterDto = Joi.object({
  id: id.required(),
});

export const createCharacterDto = Joi.object({
  image: image.required(),
  name: name.required(),
  age: age.required(),
  weight: weight.required(),
  history: history.required(),
});

export const updateCharacterDto = Joi.object({
  image: image,
  name: name,
  age: age,
  weight: weight,
  history: history
});
