import Joi from 'joi';

const id = Joi.number().integer();
const image = Joi.string().uri();
const title = Joi.string().max(39);
const creationDate = Joi.date()
const rating = Joi.number().integer();
const order = Joi.string().valid('DESC', 'ASC');

export const getAudiovisualContentDto = Joi.object({
  id: id.required(),
});

export const createAudiovisualContentDto = Joi.object({
  image: image.required(),
  title: title.required(),
  creationDate: creationDate.required(),
  rating: rating.required(),
});

export const updateAudiovisualContentDto = Joi.object({
  image: image,
  title: title,
  creationDate: creationDate,
  rating: rating
});

export const queryFiltersDto = Joi.object({
  title: title,
  genre: id,
  order: order
})
