import { Router } from "express";

import { ComputadorController } from "./../controllers";

const router = Router();
router.get("/", (req, res) => {
  return res.send("Hello World!");
});

router.get(
  "/computador",
  ComputadorController.getAllValidation,
  ComputadorController.getAll
);
router.post(
  "/computador",
  ComputadorController.createValidation,
  ComputadorController.create
);
router.get(
  "/computador/:numeroSerie",
  ComputadorController.getByNSValidation,
  ComputadorController.getByNS
);
router.put(
  "/computador/:numeroSerie",
  ComputadorController.updateByNSValidation,
  ComputadorController.updateByNS
);
router.delete(
  "/computador/:numeroSerie",
  ComputadorController.deleteByNSValidation,
  ComputadorController.deleteByNS
);

export { router };
