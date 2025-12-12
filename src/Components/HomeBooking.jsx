import React, { useState, useRef, useEffect } from "react";
import { Minus, Plus, ChevronDown, Search } from "lucide-react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css"; // or any other theme
import { useNavigate } from "react-router-dom";


const HomeBooking = () => {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date(Date.now() + 86400000));
    const navigate = useNavigate()
    const [guests, setGuests] = useState({ adults: 2, children: 0 });
    const [rooms, setRooms] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => setDropdownOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = e => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl shadow-2xl px-6 py-5 w-[95%] max-w-5xl z-20">
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                {/* Location */}
                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Location</label>
                    <input
                        type="text"
                        readOnly
                        value="Vasai, Maharashtra"
                        className="border px-4 py-2 rounded-lg bg-gray-100 text-gray-700"
                    />
                </div>

                {/* Check-in */}
                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Check-in</label>
                    <Flatpickr
                        options={{
                            dateFormat: "d/m/y",
                            minDate: "today" // 👈 disables past dates
                        }}
                        className="border px-4 py-2 rounded-lg w-full"
                        value={checkInDate}
                        onChange={([date]) => setCheckInDate(date)}
                    />

                </div>

                {/* Check-out */}
                <div className="flex flex-col">
                    <label className="font-semibold mb-1">Check-out</label>
                    <Flatpickr
                        options={{
                            dateFormat: "d/m/y",
                            minDate: checkInDate || "today" // 👈 prevents check-out before check-in
                        }}
                        className="border px-4 py-2 rounded-lg w-full"
                        value={checkOutDate}
                        onChange={([date]) => setCheckOutDate(date)}
                    />

                </div>

                {/* Guests & Rooms */}
                <div className="relative" ref={dropdownRef}>
                    <label className="font-semibold mb-1">Guests & Rooms</label>
                    <div
                        onClick={toggleDropdown}
                        className="cursor-pointer border rounded-lg px-4 py-2 mt-1 bg-white flex justify-between items-center"
                    >
                        <span className="text-gray-700">
                            {guests.adults}A, {guests.children}C, {rooms}R
                        </span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>

                    {dropdownOpen && (
                        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border z-10 p-4">
                            {/* Adults */}
                            <div className="flex justify-between items-center mb-3">
                                <span>Adults</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setGuests(g => ({
                                                ...g,
                                                adults: Math.max(1, g.adults - 1),
                                            }))
                                        }
                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span>{guests.adults}</span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setGuests(g => ({ ...g, adults: g.adults + 1 }))
                                        }
                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Children */}
                            <div className="flex justify-between items-center mb-3">
                                <span>Children</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setGuests(g => ({
                                                ...g,
                                                children: Math.max(0, g.children - 1),
                                            }))
                                        }
                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span>{guests.children}</span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setGuests(g => ({ ...g, children: g.children + 1 }))
                                        }
                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Rooms */}
                            <div className="flex justify-between items-center">
                                <span>Rooms</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setRooms(r => Math.max(1, r - 1))}
                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span>{rooms}</span>
                                    <button
                                        type="button"
                                        onClick={() => setRooms(r => r + 1)}
                                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <div className="flex flex-col justify-end">
                    <button
                        onClick={() => navigate("/rooms")}
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                    >
                        <Search className="w-4 h-4" />
                        <span>Search</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HomeBooking;
