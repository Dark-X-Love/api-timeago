import { Router } from "express";
import { getTime } from "../controllers/app.controller.js";

const router = Router();

router.get("/", getTime);

export default router;
