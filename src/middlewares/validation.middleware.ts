import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, "body");
}

export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, "params");
}

function validate(schema: ObjectSchema, type: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {abortEarly: false});

    if (error) {
      const message = error.details.map(d => d.message);
      return res.status(422).send(message);
    }

    next();
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;