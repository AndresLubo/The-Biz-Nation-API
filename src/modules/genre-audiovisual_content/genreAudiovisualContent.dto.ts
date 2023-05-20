import joi from 'joi';

const id = joi.number().integer();
const genreId = joi.number().integer();
const audiovisualContentId = joi.number().integer();

export const getGenreAudiovisualContentDto = joi.object({
  id: id.required()
})

export const createGenreAudiovisualContentDto = joi.object({
  genreId: genreId.required(),
  audiovisualContentId: audiovisualContentId.required()
})

export const updateGenreAudiovisualContentDto = joi.object({
  genreId: genreId,
  audiovisualContentId: audiovisualContentId
})
