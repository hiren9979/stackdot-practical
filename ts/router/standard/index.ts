import { Router } from "express";
import addStandard from "../../controller/standard/post";
import getStandard from "../../controller/standard/get";

const router = Router();

router.post("", addStandard);
router.get("", getStandard);


export default router;
