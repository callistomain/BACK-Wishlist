import { Router } from "express";
import { deleteOne, insertOne, listAll, listCountByGenre, patchOne } from "../controllers/movies.controller.js";
import { validateSchema } from "../middlewares/schemaValidation.middleware.js";
import { patchMovieSchema, postMovieSchema } from "../schemas/movie.schemas.js";
const router = Router();

router.get("/movies", listAll);
router.get("/movies/countByGenre", listCountByGenre);
router.post("/movies", validateSchema(postMovieSchema), insertOne);
router.patch("/movies/:id", validateSchema(patchMovieSchema), patchOne);
router.delete("/movies/:id", deleteOne);

export default router;