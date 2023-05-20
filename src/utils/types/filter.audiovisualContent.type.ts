export type filterAudiovisualContent = {
  title: string,
  genre: number,
  order: string
}

export interface Query {
  title?: string;
  genre?: number;
  order?: string;
}

export type filter = Partial<filterAudiovisualContent>;
