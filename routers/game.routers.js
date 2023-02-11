import { Router } from "express";
import { buscarJogos, inserirJogo } from "../controllers/game.controllers";
import { gameSchema } from "../models/gameSchema";
import {validateSchema} from "../middleware/validateSchema.middleware"

const router = Router();

router.get("/games", buscarJogos);
router.post("/games",validateSchema(gameSchema), inserirJogo);

export default router