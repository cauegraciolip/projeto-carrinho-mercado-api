import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes/routes";
import "express-async-errors";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof Error) {
        return response.status(400).json({
          message: err,
        });
      }
      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err}`,
      });
    }
  );

export { app }