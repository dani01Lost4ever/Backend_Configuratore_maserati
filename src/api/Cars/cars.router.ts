import {Router} from "express";
import {getCategorieOptional, getModelli, getOptional, setMongoid} from "./Cars.controller";

const router = Router();
router.use("/getModelli", getModelli);
router.use("/getOptional", getOptional);
router.use("/getCategorieOptional", getCategorieOptional);
router.use("/setMongoid", setMongoid);
export default router;