export type AudiovisualContent = {
  id: number,
  image: string,
  title: string,
  creationDate: Date,
  rating: number,
  characters: any[],
};


export type CreateAudiovisualContent = Omit<AudiovisualContent, 'id' |'characters'>;

export type UpdateAudioVisualContent = Partial<CreateAudiovisualContent>;
