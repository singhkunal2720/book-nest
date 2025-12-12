import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircleCheckBig, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookRoomPopup = ({ isOpen, onClose }) => {
    const today = new Date();
    const tomorrow = new Date(Date.now() + 86400000);
    const navigate = useNavigate()
    const [checkIn, setCheckIn] = useState([today]);
    const [checkOut, setCheckOut] = useState([tomorrow]);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkIn[0] || !checkOut[0] || checkIn[0] >= checkOut[0]) {
            toast.error("Please select valid check-in and check-out dates.");
            return;
        }
        navigate("/booking-review")
        onClose();
    };

    const adjustValue = (setter, value, delta, min = 0) => {
        setter(Math.max(min, value + delta));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black"
                >
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Room</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                        <input
                            value="Vasai, Maharashtra"
                            disabled
                            className="w-full border border-gray-200 rounded-md px-4 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[{ label: "Rooms", value: rooms, setter: setRooms, min: 1 },
                        { label: "Adults", value: adults, setter: setAdults, min: 1 },
                        { label: "Children", value: children, setter: setChildren, min: 0 }
                        ].map(({ label, value, setter, min }) => (
                            <div key={label}>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                                <div className="flex items-center justify-between border border-gray-300 rounded-full px-3 py-2">
                                    <button
                                        type="button"
                                        onClick={() => adjustValue(setter, value, -1, min)}
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                                    >−</button>
                                    <span className="text-base font-medium">{value}</span>
                                    <button
                                        type="button"
                                        onClick={() => adjustValue(setter, value, 1)}
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                                    >+</button>
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
                                options={{ dateFormat: "d-m-y", minDate: "today" }}
                                onChange={(date) => setCheckIn(date)}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700">Check-Out</label>
                            <Flatpickr
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                value={checkOut}
                                options={{ dateFormat: "d-m-y", minDate: tomorrow }}
                                onChange={(date) => setCheckOut(date)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-full"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookRoomPopup;