import express from "express";
import { TurfAdminLogin, TurfAdminRegister } from "../../Controller/TurfAdmin/AuthController.js";
const router = express.Router();

router.post("/login", TurfAdminLogin);
router.post("/register", TurfAdminRegister);

export default router;
