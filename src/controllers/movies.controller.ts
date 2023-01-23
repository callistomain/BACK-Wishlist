import { Request, Response } from "express";
import { moviesService } from "@/services";

export async function getMovies (req: Request, res: Response) {
  try {
    const movies = await moviesService.getAll();
    res.send(movies);
  } catch (err) {
    res.sendStatus(500);
  }
};

export async function getMoviesCountByGenre (req: Request, res: Response) {
  try {
    const movies = await moviesService.getCountByGenre();
    res.send(movies);
  } catch (err) {
    res.sendStatus(500);
  }
};

export async function postMovie (req: Request, res: Response) {
  try {
    const statusResult = await moviesService.postOneById(req.body);
    res.sendStatus(statusResult);
  } catch (err) {
    res.sendStatus(500);
  }
};

export async function patchMovie (req: Request, res: Response) {
  const { id } = req.params;

  try {
    const statusResult = await moviesService.patchOneById(req.body, +id);
    res.sendStatus(statusResult);
  } catch (err) {
    res.sendStatus(500);
  }
};

export async function deleteMovie (req: Request, res: Response) {
  const { id } = req.params;

  try {
    const statusResult = await moviesService.deleteOneById(+id);
    res.sendStatus(statusResult);
  } catch (err) {
    res.sendStatus(500);
  }
};