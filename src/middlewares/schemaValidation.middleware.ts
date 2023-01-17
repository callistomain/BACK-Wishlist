import { Request, Response, NextFunction } from "express";
import joi from "joi";

export function validateSchema(schema: joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const { error } = schema.validate(data, {abortEarly: false});

    if (error) {
      const message = error.details.map(e => e.message);
      return res.status(422).send(message);
    }

    res.locals.data = data;
    next();
  };
}