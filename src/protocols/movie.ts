export type MovieEntity = {
  id: number,
  name: string,
  platform: string,
  genre: string,
  status: boolean
};

export type Movie = Omit<MovieEntity, "id">;
