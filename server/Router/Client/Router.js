import express from "express";
import { otpSend, otpVerify, userLogin, userRegister } from "../../Controller/Client/AuthController.js";
import {
    BookingSubmitResApi,
    CityListResApi,
    EventFetchOnSelectResApi,
    FootballGroundResApi,
    GroundFetchOnSelectResApi,
    GroundListResApi,
    GroundViewResApi,
    SelectTypeResApi,
    TimeSlotResApi,
    UserBookingDetailFetchResApi,
    UserDataFetchResApi,
    UserEditResApi,
} from "../../Controller/Client/ClientController.js";
import { clientVerifyToken } from "../../Middleware/AuthVerify.js";
const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/otp-send", otpSend);
router.post("/otp-verify", otpVerify);
router.get("/city-list", CityListResApi);
router.get("/ground-list", GroundListResApi);
router.get("/football-ground-list", FootballGroundResApi);
router.get("/ground-view", GroundViewResApi);
router.get("/time-slot", TimeSlotResApi);
router.get("/select-type", SelectTypeResApi);
router.get("/selected-type", GroundFetchOnSelectResApi);
router.get("/event-fetch", EventFetchOnSelectResApi);
router.post("/booking-submit",clientVerifyToken, BookingSubmitResApi)
router.get("/user-data",clientVerifyToken,UserDataFetchResApi)
router.patch('/user-edit',clientVerifyToken,UserEditResApi)
router.get("/booking-data",clientVerifyToken,UserBookingDetailFetchResApi)

export default router;
