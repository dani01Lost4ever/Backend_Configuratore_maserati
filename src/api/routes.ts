import { Router } from "express";
import cars from "./Cars/cars.router";

const router = Router();

router.use("/cars", cars);

export default router;
