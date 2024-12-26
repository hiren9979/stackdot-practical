import { Router } from "express";
import addSubject from "../../controller/subject/post";
import getSubjects from "../../controller/subject/get";

const router = Router();

router.post("", addSubject);
router.get("", getSubjects);


export default router;
