import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookingDetailViewReqApi, SubmitReviewReqApi } from "../../../../API/Services/ClientRequest";
import { useSelector } from "react-redux";
import ReviewAddComponent from "../../GroundView/Review/ReviewAddComponent";
import { message } from "antd";

function BookingViewCard() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.userLogin.token);
    const [bookingData, setBookingData] = useState({});
    const [groundData, setGroundData] = useState({});
    const [eventData, setEventData] = useState({});
    const [time, setTime] = useState({});
    const params = useParams();
    const id = params.id;
    console.log(id);
    const detail = async () => {
        const response = await BookingDetailViewReqApi(id, token);
        console.log(response.data.result);
        if (response.status === 201) {
            setBookingData(response.data.result);
            setGroundData(response.data.result.turf);
            setEventData(response.data.result.event);
            setTime(response.data.result.time);
        }
    };

    const handleSubmitReview = async (data) => {
        const response = await SubmitReviewReqApi(data, id, token);
        if (response.status === 201) {
            message.success("Review added");
            detail();
        }
    };
    useEffect(() => {
        if (id) {
            detail();
        }
    }, [token]);
    console.log(time);
    return (
        <div>
            <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Booking Details</h3>
                    <p class="mt-1 max-w-2xl text-xs text-gray-500">Details and informations about booking.</p>
                </div>
                <div class="border-t border-gray-200">
                    <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Turf name</dt>
                            <dd
                                onClick={() => navigate(`/ground-view/${groundData._id}`)}
                                class="mt-1 text-sm text-gray-900 text-underline sm:mt-0 sm:col-span-2"
                            >
                                {groundData.name}
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Ground</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{eventData.groundName}</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Turf address</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{groundData.address}</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Selected Sport</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bookingData.sport}</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Time</dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {time.length > 0 &&
                                    time?.map((res) => {
                                        return <div className="flex flex-col">{res.slots}</div>;
                                    })}
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Date</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {new Date(bookingData.bookDate).toDateString()}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div>{bookingData.review ? <></> : <ReviewAddComponent handleSubmitReview={handleSubmitReview} />}</div>
        </div>
    );
}

export default BookingViewCard;
