import express from "express";
import {
    AddCity,
    ApproveTurfAdmin,
    CancelTurfAdmin,
    FindCity,
    GroundListAdminResApi,
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
router.post("/cancel-turf-admin", verifyToken, CancelTurfAdmin);
router.get("/find-city", verifyToken, FindCity);
router.post("/add-city", verifyToken, AddCity);
router.get("/ground-list", verifyToken, GroundListAdminResApi);

export default router;
