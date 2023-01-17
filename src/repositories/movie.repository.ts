import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Movie, MovieEntity, MovieNote } from "../protocols/movie.js";

export function findMany(): Promise<QueryResult<MovieEntity>> {
  return connection.query(`SELECT * FROM movies`);
}

export function findCountGenre(): Promise<QueryResult<MovieEntity>> {
  return connection.query(`
    SELECT genre, COUNT(genre) AS "moviesCount" FROM movies
    GROUP BY genre
  `);
}

export function insertUnique(movie: Movie): Promise<QueryResult> {
  const { name, platform, genre } = movie;

  return connection.query(`
    INSERT INTO movies (name, platform, genre) VALUES ($1, $2, $3)
  `, [name, platform, genre]);
}

export function patchUnique(note: string, id: number): Promise<QueryResult> {
  return connection.query(`
    UPDATE movies SET status=true, note=$1 WHERE id=$2
  `, [note, id]);
}

export function deleteUnique(id: number): Promise<QueryResult> {
  return connection.query(`
    DELETE FROM movies WHERE id=$1
  `, [id]);
}
