export type Collaboration = {
  id: number,
  characterId: number,
  audiovisualContentId: number,
}

export type CreateCollaboration = Omit<Collaboration, 'id'>;
export type UpdateCollaboration = Partial<CreateCollaboration>;
