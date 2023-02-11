import { Router } from "express";
import { buscarClientes, buscarClientePorId, inserirCliente, atualizarCliente } from "../controllers/client.controllers";
import { clientSchema } from "../models/clientSchema";
import {validateSchema} from "../middleware/validateSchema.middleware"

const router = Router();

router.get("/customers", buscarClientes);
router.get("customers/:id", buscarClientePorId);
router.post("/customers",validateSchema(clientSchema), inserirCliente);
router.put("/customers/:id",validateSchema(clientSchema), atualizarCliente);

export default router