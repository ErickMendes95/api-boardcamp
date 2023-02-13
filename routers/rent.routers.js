import { Router } from "express";
import { buscarAlugueis, finalizarAluguel, inserirAluguel, deletarAluguel } from "../controllers/rent.controllers.js";
import { rentSchema } from "../models/rentSchema.js";
import {validateSchema} from "../middleware/validateSchema.middleware.js"

const router = Router();

router.get("/rentals", buscarAlugueis);
router.post("/rentals",validateSchema(rentSchema), inserirAluguel);
router.post("/rentals/:id/return", finalizarAluguel);
router.delete("/rentals/:id", deletarAluguel);

export default router