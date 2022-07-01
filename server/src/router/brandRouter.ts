import Router from "express";

import BrandController from "../controllers/brandController";

const router = Router();

router.post("/", BrandController.create);
router.get("/", BrandController.getAll);

export default router;
