import { Router } from "express";
import gameRouters from "../routers/game.routers.js";
import clientRouters from "../routers/client.routers.js";

const router = Router();

router.use(gameRouters);
router.use(clientRouters);

export default router;