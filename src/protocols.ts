export type MovieEntity = {
  id: number,
  name: string,
  platform: string,
  genre: string,
  status: boolean,
  note: string
};

export type Movie = Omit<MovieEntity, "id" | "status" | "note">;
export type MovieNote = { note: string };
