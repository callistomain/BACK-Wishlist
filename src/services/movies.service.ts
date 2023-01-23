import { Movie, MovieNote } from "@/protocols";
import { deleteOne, selectCountByGenre, selectAll, insertOne, updateOne } from "@/repositories";

async function getAll() {
  const result = await selectAll();
  return result.rows;
}

async function getCountByGenre() {
  const result = await selectCountByGenre();
  return result.rows;
}

async function postOneById(movie: Movie) {
  const result = await insertOne(movie);
  const status = result.rowCount ? 201 : 400;
  return status;
}

async function patchOneById(movieNote: MovieNote, id: number) {
  const result = await updateOne(movieNote.note, id);
  const status = result.rowCount ? 200 : 400;
  return status;
}

async function deleteOneById(id: number) {
  const result = await deleteOne(id);
  const status = result.rowCount ? 204 : 400;
  return status;
}

export const moviesService = {
  getAll,
  getCountByGenre,
  postOneById,
  patchOneById,
  deleteOneById
};
