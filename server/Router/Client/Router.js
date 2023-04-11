import express from "express";
import { otpSend, otpVerify, userLogin, userRegister } from "../../Controller/Client/AuthController.js";
const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/otp-send", otpSend);
router.post("/otp-verify", otpVerify);

export default router;
