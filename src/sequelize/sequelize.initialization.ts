import { Sequelize } from "sequelize";

import { Character, CharacterSchema } from "./models/character.model";
import { AudiovisualContent, AudiovisualContentSchema } from "./models/audiovisualContent.model";
import { Genre, GenreSchema } from "./models/genre.model";
import {User, UserSchema } from "./models/user.model";
import { Collaboration, CollaborationSchema } from "./models/collaborations.model";
import { GenreAudiovisualContent, GenreAudiovisualContentSchema } from "./models/genre-audiovisualContent.model";

export const setupModels = (sequelize: Sequelize): void => {
  Character.init(CharacterSchema, Character.config(sequelize));
  AudiovisualContent.init(AudiovisualContentSchema, AudiovisualContent.config(sequelize));
  Genre.init(GenreSchema, Genre.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Collaboration.init(CollaborationSchema, Collaboration.config(sequelize));
  GenreAudiovisualContent.init(GenreAudiovisualContentSchema, GenreAudiovisualContent.config(sequelize));

  Character.associate(sequelize.models);
  AudiovisualContent.associate(sequelize.models);
  Genre.associate(sequelize.models);
  User.associate(sequelize.models);
};
