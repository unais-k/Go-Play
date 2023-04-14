import express from "express";
import { TurfAdminLogin, TurfAdminRegister } from "../../Controller/TurfAdmin/AuthController.js";
import { GroundListResApi, addGroundReq } from "../../Controller/TurfAdmin/TurfAdminController.js";
import { verifyToken } from "../../Middleware/AuthVerify.js";

const router = express.Router();

router.post("/login", TurfAdminLogin);
router.post("/register", TurfAdminRegister);
// auth ----------

router.post("/ground-add", verifyToken, addGroundReq);
router.get("/ground-list", verifyToken, GroundListResApi);

export default router;
