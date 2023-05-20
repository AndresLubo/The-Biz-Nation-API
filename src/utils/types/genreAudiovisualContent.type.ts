export type GenreAudiovisualContent = {
  id: number,
  genreId: number,
  audiovisualContentId: number
}


export type CreateGenreAudiovisualContent = Omit<GenreAudiovisualContent, 'id'>;
export type UpdateGenreAudiovisualContent = Partial<CreateGenreAudiovisualContent>;
