import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { ComputadorController } from "./../controllers";

const router = Router();
router.get("/", (req, res) => {
  return res.send("Hello World!" );
});

router.post("/computador", ComputadorController.createValidation, ComputadorController.create);

export { router };
