import express from "express";
import { adminLogin, notificationReqApi, userListReqApi } from "../../Controller/Admin/adminController.js";
const router = express.Router();

router.post("/", adminLogin);
router.get("/client-list", userListReqApi);
router.get("/notification", notificationReqApi);

export default router;
