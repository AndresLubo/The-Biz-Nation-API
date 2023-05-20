export type Character = {
  id: number,
  image: string,
  name: string,
  age: number,
  weight: number,
  history: string,
  audiovisualContents: any[],
}


export type CreateCharacter = Omit<Character, 'id' | 'audiovisualContents'>;

export type UpdateCharacter = Partial<CreateCharacter>;
