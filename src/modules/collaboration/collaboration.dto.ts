import joi from 'joi';

const id = joi.number().integer();
const characterId = joi.number().integer();
const audiovisualContentId = joi.number().integer();

export const getCollaborationDto = joi.object({
  id: id.required()
})

export const createCollaborationDto = joi.object({
  characterId: characterId.required(),
  audiovisualContentId: audiovisualContentId.required()
})

export const updateCollaborationDto = joi.object({
  characterId: characterId,
  audiovisualContentId: audiovisualContentId
})
