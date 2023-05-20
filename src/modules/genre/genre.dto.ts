import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().max(39);
const image = Joi.string().uri();

export const getGenreDto = Joi.object({
  id: id.required(),
});

export const createGenreContentDto = Joi.object({
  image: image.required(),
  name: name.required()
});

export const updateGenreDto = Joi.object({
  image: image,
 name: name,
});
