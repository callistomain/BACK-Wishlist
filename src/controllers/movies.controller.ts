import { Request, Response } from "express";
import { Movie, MovieNote } from "../protocols/movie.js";
import { deleteUnique, findCountGenre, findMany, insertUnique, patchUnique } from "../repositories/movie.repository.js";

export async function listAll (req: Request, res: Response) {
  try {
    const result = await findMany();
    res.send(result.rows);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};

export async function listCountByGenre (req: Request, res: Response) {
  try {
    const result = await findCountGenre();
    res.send(result.rows);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};

export async function insertOne (req: Request, res: Response) {
  const movie = res.locals.data as Movie;

  try {
    const result = await insertUnique(movie);
    const status = result.rowCount ? 201 : 400;
    res.sendStatus(status);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};

export async function patchOne (req: Request, res: Response) {
  const { id } = req.params;
  const body = res.locals.data as MovieNote;

  try {
    const result = await patchUnique(body.note, +id);
    const status = result.rowCount ? 200 : 400;
    res.sendStatus(status);
  } catch (err) {
    console.log("aqui", err.message);
    res.sendStatus(500);
  }
};

export async function deleteOne (req: Request, res: Response) {
  const { id } = req.params;

  try {
    const result = await deleteUnique(+id);
    const status = result.rowCount ? 204 : 400;
    res.sendStatus(status);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};