import { Router } from "express";
import register from "./register";
import standard from "./standard";
import subject from "./subject";

export const router = Router();

router.use("/register", register);
router.use("/standard", standard);
router.use("/subject", subject);