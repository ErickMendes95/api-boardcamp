import { Router } from "express";
import { buscarJogos, inserirJogo } from "../controllers/game.controllers.js";
import { gameSchema } from "../models/gameSchema.js";
import {validateSchema} from "../middleware/validateSchema.middleware.js"

const router = Router();

router.get("/games", buscarJogos);
router.post("/games",validateSchema(gameSchema), inserirJogo);

export default router;