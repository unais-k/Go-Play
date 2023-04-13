import express from "express";
import {
    AddCity,
    ApproveTurfAdmin,
    FindCity,
    adminLogin,
    notificationReqApi,
    userListReqApi,
} from "../../Controller/Admin/adminController.js";
import { verifyToken } from "../../Middleware/AuthVerify.js";
const router = express.Router();

router.post("/", adminLogin);
router.get("/client-list", verifyToken, userListReqApi);
router.get("/notification", verifyToken, notificationReqApi);
router.post("/approve-turf-admin", verifyToken, ApproveTurfAdmin);
router.get("/find-city", FindCity);
router.post("/add-city", verifyToken, AddCity);

export default router;
