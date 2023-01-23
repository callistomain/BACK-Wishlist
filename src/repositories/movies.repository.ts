import { QueryResult } from "pg";
import { connection } from "@/config";
import { Movie, MovieEntity } from "@/protocols";

export function selectAll(): Promise<QueryResult<MovieEntity>> {
  return connection.query(`SELECT * FROM movies`);
}

export function selectCountByGenre(): Promise<QueryResult<MovieEntity>> {
  return connection.query(`
    SELECT genre, COUNT(genre) AS "moviesCount" FROM movies
    GROUP BY genre
  `);
}

export function insertOne(movie: Movie): Promise<QueryResult> {
  const { name, platform, genre } = movie;

  return connection.query(`
    INSERT INTO movies (name, platform, genre) VALUES ($1, $2, $3)
  `, [name, platform, genre]);
}

export function updateOne(note: string, id: number): Promise<QueryResult> {
  return connection.query(`
    UPDATE movies SET status=true, note=$1 WHERE id=$2
  `, [note, id]);
}

export function deleteOne(id: number): Promise<QueryResult> {
  return connection.query(`
    DELETE FROM movies WHERE id=$1
  `, [id]);
}
