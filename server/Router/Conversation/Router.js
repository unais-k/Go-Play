import express from "express";
import {
    GetAdminListReqApi,
    GetConversationListResApi,
    GetConversationResApi,
    GetOwnerListReqApi,
    NewConversationReqApi,
} from "../../Controller/Conversation/conversationController.js";
import { ChatVerificationToken } from "../../Middleware/AuthVerify.js";
const router = express.Router();

router.post("/add-conversation", ChatVerificationToken, NewConversationReqApi);
router.get("/get-conversation/:userId", ChatVerificationToken, GetConversationResApi);
router.get("/get-owner", ChatVerificationToken, GetOwnerListReqApi);
router.get("/get-admin", ChatVerificationToken, GetAdminListReqApi);
router.get("/get-conversation-list", ChatVerificationToken, GetConversationListResApi);

export default router;
