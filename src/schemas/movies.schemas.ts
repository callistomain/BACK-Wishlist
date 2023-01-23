import joi from "joi";

export const postMovieSchema = joi.object({
  name: joi.string().required(),
  platform: joi.string().required(),
  genre: joi.string().required()
});

export const patchMovieSchema = joi.object({
  note: joi.string().required()
});
