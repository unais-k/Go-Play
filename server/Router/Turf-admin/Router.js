import express from "express";
import { TurfAdminLogin, TurfAdminRegister } from "../../Controller/TurfAdmin/AuthController.js";
import {
    AddEventResApi,
    AvailableStatusChangeResApi,
    CanceledTimeResApi,
    EventDetailFetchResApi,
    FindCity,
    GroundDetailSubmitResApi,
    GroundListResApi,
    GroundViewResApi,
    RuleAddResApi,
    RuleDeleteResApi,
    RuleFindResApi,
    RuleUpdateFindResApi,
    RuleUpdateResApi,
    SelectedTimeResApi,
    TimeSaveOnEventResApi,
    TimeSlotResApi,
    addGroundReq,
} from "../../Controller/TurfAdmin/TurfAdminController.js";
import { turfAdminVerifyToken } from "../../Middleware/AuthVerify.js";

const router = express.Router();

router.post("/login", TurfAdminLogin);
router.post("/register", TurfAdminRegister);
// auth ----------

router.post("/ground-add", turfAdminVerifyToken, addGroundReq);
router.get("/ground-list", turfAdminVerifyToken, GroundListResApi);
router.get("/ground-view", turfAdminVerifyToken, GroundViewResApi);
router.get("/time-slot", turfAdminVerifyToken, TimeSlotResApi);
router.get("/find-city", turfAdminVerifyToken, FindCity);
router.patch("/available-status", turfAdminVerifyToken, AvailableStatusChangeResApi);
router.get("/rule-fetch", turfAdminVerifyToken, RuleFindResApi);
router.post("/rule-add", turfAdminVerifyToken, RuleAddResApi);
router.delete("/rule-delete", turfAdminVerifyToken, RuleDeleteResApi);
router.get("/rule-update-find", turfAdminVerifyToken, RuleUpdateFindResApi);
router.patch("/rule-update", turfAdminVerifyToken, RuleUpdateResApi);
router.post("/selected-time-slot", turfAdminVerifyToken, SelectedTimeResApi);
router.post("/add-event", turfAdminVerifyToken, AddEventResApi);
router.post("/canceled-time-slot", turfAdminVerifyToken, CanceledTimeResApi);
router.post("/ground-detail-form-submit", turfAdminVerifyToken, GroundDetailSubmitResApi);
router.post("/add-time-on-event", turfAdminVerifyToken, TimeSaveOnEventResApi);
router.get("/event-detail", turfAdminVerifyToken, EventDetailFetchResApi);

export default router;
