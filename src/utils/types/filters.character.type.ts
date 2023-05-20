export type filterCharacter = {
  name: string,
  age: number,
  movie: number
}

export interface Query {
  name?: string;
  age?: number;
  movie?: number
}

export type filter = Partial<filterCharacter>;
