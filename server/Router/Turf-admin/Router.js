import express from "express";
import { TurfAdminLogin, TurfAdminRegister } from "../../Controller/TurfAdmin/AuthController.js";
import { addGroundReq } from "../../Controller/TurfAdmin/TurfAdminController.js";

const router = express.Router();

router.post("/login", TurfAdminLogin);
router.post("/register", TurfAdminRegister);
// auth ----------

router.post("/ground-add", addGroundReq);

export default router;
