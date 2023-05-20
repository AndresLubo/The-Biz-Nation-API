export type Genre = {
  id: number,
  name: string,
  image: string
};

export type CreateGenre = Omit<Genre, 'id'>;

export type UpdateGenre = Partial<CreateGenre>;
