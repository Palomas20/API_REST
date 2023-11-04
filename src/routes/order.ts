import { Router } from "express";
import { getItems } from "../controller/order";
import { checkJwt } from "../middleware/session";

/**
 * Esta ruta solo pueden accesar las personas que tiene sesion activa!
 * que tengan JWT valido
 */
const router = Router();

router.get('/', checkJwt, getItems);

export { router };