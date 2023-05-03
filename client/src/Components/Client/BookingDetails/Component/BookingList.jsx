import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CiViewBoard } from "react-icons/ci";
import { UserBookingDetailFetchReqApi } from "../../../../API/Services/ClientRequest";

function BookingList() {
  const token = useSelector((state) => state.userLogin.token);
  const [bookings, setBookings] = useState([]);

  const data = async () => {
    const response = await UserBookingDetailFetchReqApi(token);
    console.log(response.data.result);
    if (response.status === 201) {
      setBookings(response.data.result);
    }
  };
  useEffect(() => {
    token && data();
  }, [token]);
  return (
    <div>
      <div className="text-lime-600 font-semibold text-2xl mb-5">
        My Bookings
      </div>
      <div>
        <div class="">
          <div class="w-full">
            <div class="overflow-auto lg:overflow-visible ">
              <table class="table text-gray-400 border-separate space-y-6 text-sm">
                <thead class="bg-gray-400 text-gray-500">
                  <tr>
                    <th class="p-3">Ground</th>
                    <th class="p-3 text-left">Date</th>
                    <th class="p-3 text-left">Time</th>
                    <th class="p-3 text-left">Place</th>
                    <th class="p-3 text-left">Advance</th>
                    <th class="p-3 text-left">View</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length > 0 ? (
                    bookings.map((res) => {
                      return (
                        <tr class="bg-gray-800">
                          <td class="p-3">
                            <div class="flex align-items-center">
                              <img
                                class="rounded-full h-12 w-12  object-cover"
                                src={res.photo}
                                alt="unsplash image"
                              />
                              <div class="ml-3">
                                <div class="">Appple</div>
                                <div class="text-gray-500">mail@rgmail.com</div>
                              </div>
                            </div>
                          </td>
                          <td class="p-3">Technology</td>
                          <td class="p-3 font-bold">200.00$</td>
                          <td class="p-3">
                            <span class="bg-green-400 text-gray-50 rounded-md px-2">
                              available
                            </span>
                          </td>
                          <td class="">
                            <CiViewBoard size={23} />
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <>
                      {/* <div>You have not made any previous Bookings!</div> */}
                    </>
                  )}

                  {/* <tr class="bg-gray-800">
                    <td class="p-3">
                      <div class="flex align-items-center">
                        <img
                          class="rounded-full h-12 w-12   object-cover"
                          src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80"
                          alt="unsplash image"
                        />
                        <div class="ml-3">
                          <div class="">Samsung</div>
                          <div class="text-gray-500">mail@rgmail.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3">Technology</td>
                    <td class="p-3 font-bold">200.00$</td>
                    <td class="p-3">
                      <span class="bg-yellow-400 text-gray-50  rounded-md px-2">
                        start sale
                      </span>
                    </td>
                    <td class="p-3">
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100 mr-2"
                      >
                        <i class="material-icons-outlined text-base">
                          visibility
                        </i>
                      </a>
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100 mx-2"
                      >
                        <i class="material-icons-outlined text-base">edit</i>
                      </a>
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100 ml-2"
                      >
                        <i class="material-icons-round text-base">
                          delete_outline
                        </i>
                      </a>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingList;
