import React, { useEffect, useRef, useState } from "react";
import {
  EventFetchOnSelectReqApi,
  GroundFetchOnSelectReqApi,
  GroundViewReqApi,
  SelectTypeOfReqApi,
} from "../../../API/Services/ClientRequest";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import RulesComponent from "./RulesComponent";
import ReviewComponent from "./Review/ReviewComponent";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ModalBookingComponent from "./Modal";
import GroundDetailComponent from "./Components/GroundDetailComponent";
import { FiDelete } from "react-icons/fi";
import ReviewAddComponent from "./Review/ReviewAddComponent";

function GroundViewPage() {
  const navigate = useNavigate();

  const token = useSelector((state) => state.userLogin.token);
  const location = useLocation();
  const { id } = useParams();
  const [state, setState] = useState([]);
  const [sport, setSport] = useState([]);
  const [selectedSport, setSelectedSport] = useState({});
  const [time, setTime] = useState([]);
  const [event, setEvent] = useState([]);
  const [selectSlot, setSelectSlot] = useState([]);
  const [eventOnTime, setEventOnTime] = useState([]);
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [review, setReview] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: "",
    eventId: "",
    groundId: "",
    price: "",
    time: "",
    sport: "",
  });

  const [showDiv, setShowDiv] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [ground, setGround] = useState([]);
  const selected = [];
  useEffect(() => {
    if (id) {
      GroundData();
    } else {
      console.log("use");
    }
  }, [id]);

  useEffect(() => {}, [time]);
  const movingDiv = useRef(null);
  const movingDiv1 = useRef(null);
  const movingDiv2 = useRef(null);
  const movingDiv3 = useRef(null);
  const movingDiv4 = useRef(null);

  const bookNow = () => {
    setShowDiv(true);
    movingDiv?.current?.scrollIntoView({ behavior: "smooth" });
    setShowDiv1(false);
  };
  const bookNow1 = () => {
    setShowDiv1(true);
    movingDiv1?.current?.scrollIntoView({ behavior: "smooth" });
    setShowDiv2(false);
    setShowDiv3(false);
    setShowDiv4(false);
    setPrice(0);
    setSelectSlot([]);
  };
  const bookNow2 = () => {
    setShowDiv2(true);
    movingDiv2?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const bookNow3 = () => {
    setShowDiv3(true);
    movingDiv3?.current?.scrollIntoView({ behavior: "smooth" });
    setShowDiv4(false);
  };
  const bookNow4 = () => {
    setShowDiv4(true);
    movingDiv3?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const GroundData = async () => {
    const response = await GroundViewReqApi(id);

    if (response.status === 200) {
      setState(response.data.result);
      setEvent(response.data.events);
      setReview(response.data.review);
    } else {
      message.error("Something went wrong");
    }
  };

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 5);

  const isDateDisabled = ({ date }) => {
    return date.getDay() === 0;
  };
  const handleBooking = async (id) => {
    const compare = await selectSlot.find(
      (res) => JSON.stringify(res) === JSON.stringify(id)
    );
    if (!compare) {
      setSelectSlot([...selectSlot, id]);
      setPrice(+price + +id.price);
    } else {
      message.warning("Already selected");
    }
    bookNow4();
  };

  const handleBookNow = async (id) => {
    const response = await SelectTypeOfReqApi(id);
    setSport(response.data.result);
    bookNow();
  };

  const handleSelectedSport = async (id) => {
    setSelectedSport(id.value);
    console.log(id, "value");
    const response = await GroundFetchOnSelectReqApi(id);
    if (response.status === 201) {
      setGround(response.data.result);
      bookNow1();
    }
  };

  const handleSelectGround = async (id) => {
    const response = await EventFetchOnSelectReqApi(id);
    setTime(response.data.slots);
    setEventOnTime(response.data.result[0]);
    bookNow2();
  };

  const handleClearSelection = async () => {
    setSelectSlot([]);
    setPrice(0);
    bookNow4();
    setShowDiv4(false);
  };

  const handleBookingSubmit = async () => {
    setBookingData({
      date: date,
      price: price,
      eventId: eventOnTime._id,
      groundId: id,
      time: selectSlot,
      sport: selectedSport,
    });
    setShowModal(true);
    bookNow();
    bookNow1();
    bookNow2();
    bookNow3();
    bookNow4();
    price(0);
    selectSlot([]);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-9/12">
          <div>
            <h1 className="text-3xl font-bold text-lime-600 my-3">
              {state.name} -by Go Play
            </h1>
          </div>
          {/* GroundDetailComponent */}
          <GroundDetailComponent state={state} handleBookNow={handleBookNow} />
          {showDiv && (
            <div ref={movingDiv}>
              <div className="text-lime-600 mt-5 text-2xl font-bold">
                Step 1: Select Sport
              </div>
              <div className="flex">
                {sport?.map((res) => {
                  return (
                    <div
                      className="bg-gray-200 px-4 py-2 m-2 mb-10"
                      key={Math.floor(Math.random) * 0.2351 + 124}
                      onClick={() =>
                        handleSelectedSport({ value: res, groundId: state._id })
                      }
                    >
                      {res}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {showDiv1 && (
            <div ref={movingDiv1}>
              <div className="text-lime-600 text-2xl font-bold">
                Step 2: Select Ground
              </div>
              <div className="flex">
                {ground?.map((res) => {
                  return (
                    <div
                      className="flex flex-col w-fit bg-gray-200 m-3 p-5"
                      onClick={() => handleSelectGround(res._id)}
                    >
                      <div className="mb-3">{res.groundName}</div>
                      <div>-{res.type}</div>
                      <div>-{res.size}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {showDiv2 && (
            <div ref={movingDiv2}>
              <div className="text-lime-600 text-2xl font-bold">
                Step 3: Select Date
              </div>
              <div className="w-96">
                <Calendar
                  minDate={new Date()}
                  maxDate={maxDate}
                  selected={date}
                  tileDisabled={isDateDisabled}
                  onClickDay={() => bookNow3()}
                  onChange={(date) => setDate(date)}
                />
              </div>
            </div>
          )}
          {showDiv3 && (
            <div ref={movingDiv3}>
              <div className="text-lime-600 text-2xl font-bold mt-5">
                Step 4: Select Time
              </div>
              <div></div>
              <div className="flex flex-wrap my-10 w-6/12">
                {time?.length > 0 &&
                  time?.map((res, index) => {
                    return (
                      <div className="m-2">
                        {parseInt(res.index) > 17 || parseInt(res.index) < 6 ? (
                          <div
                            className="flex bg-gray-200 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                            onClick={() =>
                              handleBooking({
                                timeId: res._id,
                                slots: res.time,
                                price: eventOnTime.priceAtNight,
                                sport: selectedSport,
                              })
                            }
                          >
                            {res.time}
                            <br></br>
                            Rs.{eventOnTime.priceAtNight}
                          </div>
                        ) : (
                          <div
                            className="flex bg-gray-200 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                            onClick={() =>
                              handleBooking({
                                timeId: res._id,
                                slots: res.time,
                                price: eventOnTime.price,
                                sport: selectedSport,
                              })
                            }
                          >
                            {res.time}
                            <br></br>
                            Rs.{eventOnTime.price}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
              <div className="flex" onClick={handleClearSelection}>
                <FiDelete size={23} className="me-3" /> Clear Selection
              </div>
            </div>
          )}
          {showDiv4 && (
            <div ref={movingDiv4} className="flex justify-center">
              <div className="fixed flex justify-between bg-green-400 w-2/5 bottom-2">
                <p></p>
                <p className="p-3">
                  Total Slot booked: {selectSlot ? selectSlot.length : ""}
                </p>
                <p className="p-3">Total price: {price ? price : ""}</p>
                <p className="p-3">Total price: {price ? price : ""}</p>
                <p
                  className=" bg-orange-400 m-1 p-2 rounded"
                  onClick={handleBookingSubmit}
                >
                  Book Now
                </p>
                {showModal && (
                  <ModalBookingComponent
                    bookingData={bookingData}
                    setShowModal={setShowModal}
                  />
                )}
                <p></p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-9/12">
          <div className="">
            <RulesComponent state={state} />
          </div>
          <div className="pb-10 border-b">
            <ReviewComponent review={review} />
          </div>
          <div>
            {token ? (
              <ReviewAddComponent state={state} />
            ) : (
              <div className="py-10">
                <h2 className=" py-3 text-3xl font-bold text-lime-600">
                  Write a review
                </h2>
                <a
                  onClick={() => navigate("/login")}
                  className="text-orange-400"
                >
                  Login
                </a>{" "}
                or{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="text-orange-400"
                >
                  Register
                </a>{" "}
                first
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroundViewPage;
