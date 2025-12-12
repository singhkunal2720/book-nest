import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircleCheckBig } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookRoomCTA = () => {
  const today = new Date();
  const tomorrow = new Date(Date.now() + 86400000);
  const navigate = useNavigate()
  const [checkIn, setCheckIn] = useState([today]);
  const [checkOut, setCheckOut] = useState([tomorrow]);
  const [roomType, setRoomType] = useState("Standard");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inDate = checkIn[0];
    const outDate = checkOut[0];

    if (!inDate || !outDate || inDate >= outDate) {
      toast.error("Please select valid check-in and check-out dates.");
      return;
    }
    navigate("/booking-review")
  };

  const adjustValue = (setter, value, delta, min = 0) => {
    setter(Math.max(min, value + delta));
  };

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-br from-[#fdf4e7] to-[#f6e9d7]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT */}
        <div className="md:w-1/2 space-y-6 md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Premium Stay in Vasai, Maharashtra
          </h2>
          <p className="text-gray-600 text-lg">
            Nestled in the heart of Vasai, our luxurious rooms offer the perfect blend of comfort and elegance. Book your stay today and experience unmatched hospitality.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li className="flex gap-2"><CircleCheckBig /> Guest Rooms</li>
            <li className="flex gap-2"><CircleCheckBig /> Prime Location</li>
            <li className="flex gap-2"><CircleCheckBig /> Flexible Check-in/Check-out</li>
          </ul>
        </div>

        {/* RIGHT */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-white p-6 rounded-3xl shadow-xl space-y-5"
        >
          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
            <input
              value="Vasai, Maharashtra"
              disabled
              className="w-full border border-gray-200 rounded-md px-4 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Rooms", value: rooms, setter: setRooms, min: 1 },
              { label: "Adults", value: adults, setter: setAdults, min: 1 },
              { label: "Children", value: children, setter: setChildren, min: 0 },
            ].map(({ label, value, setter, min }) => (
              <div key={label}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                <div className="flex items-center justify-between border border-gray-300 rounded-full px-3 py-2">
                  <button
                    type="button"
                    onClick={() => adjustValue(setter, value, -1, min)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="text-base font-medium">{value}</span>
                  <button
                    type="button"
                    onClick={() => adjustValue(setter, value, 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Check-In</label>
              <Flatpickr
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={checkIn}
                options={{
                  dateFormat: "d-m-y",
                  minDate: "today",
                }}
                onChange={(date) => setCheckIn(date[0])}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Check-Out</label>
              <Flatpickr
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={checkOut}
                options={{
                  dateFormat: "d-m-y",
                  minDate: tomorrow,
                }}
                onChange={(date) => setCheckOut(date[0])}
              />
            </div>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200"
          >
            Book Room
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default BookRoomCTA;
