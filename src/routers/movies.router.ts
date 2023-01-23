import { Router } from "express";
import { deleteMovie, postMovie, getMovies, patchMovie, getMoviesCountByGenre } from "@/controllers";
import { validateBody } from "@/middlewares";
import { patchMovieSchema, postMovieSchema } from "@/schemas";

const moviesRouter = Router();

moviesRouter
  .get("/", getMovies)
  .get("/genres", getMoviesCountByGenre)
  .post("/", validateBody(postMovieSchema), postMovie)
  .patch("/:id", validateBody(patchMovieSchema), patchMovie)
  .delete("/:id", deleteMovie);

export { moviesRouter };