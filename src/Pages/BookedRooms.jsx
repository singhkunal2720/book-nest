import React, { useState } from "react";
import { MapPin, Star, Users, CalendarDays, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';


const TABS = ["All", "Booked", "Checked-in", "Checked-out"];

const bookedRooms = [
    {
        id: 1,
        type: "Premium",
        title: "Ocean View Premium Suite",
        guestName: "Amit Sharma",
        checkIn: "2025-08-01",
        checkOut: "2025-08-05",
        guests: 2,
        pricePerNight: 4500,
        originalPrice: 5500,
        location: "Goa, India",
        rating: 4.8,
        image: img1,
        status: "Booked",
        features: [
            "King Bed",
            "Complimentary Breakfast",
            "Sea View",
            "Wi-Fi",
            "Mini Bar",
            "Premium Toiletries",
            "Room Service",
            "Air Conditioning",
        ],
    },
    {
        id: 2,
        type: "Standard",
        title: "City Comfort Standard Room",
        guestName: "Neha Verma",
        checkIn: "2025-08-02",
        checkOut: "2025-08-04",
        guests: 1,
        pricePerNight: 2500,
        originalPrice: 3000,
        location: "Mumbai, India",
        rating: 4.2,
        image: img2,
        status: "Checked-in",
        features: [
            "Queen Bed",
            "Free Wi-Fi",
            "Flat Screen TV",
            "Hot Water",
            "Workspace",
            "Housekeeping",
        ],
    },
    {
        id: 3,
        type: "Premium",
        title: "Executive Premium Room",
        guestName: "Rohan Singh",
        checkIn: "2025-08-03",
        checkOut: "2025-08-06",
        guests: 3,
        pricePerNight: 4800,
        originalPrice: 6000,
        location: "Delhi, India",
        rating: 4.6,
        image: img3,
        status: "Booked",
        features: [
            "Workspace",
            "High-speed Internet",
            "Breakfast Included",
            "Smart TV",
            "Air Conditioning",
            "Coffee Maker",
        ],
    },
    {
        id: 4,
        type: "Standard",
        title: "Cozy Standard Stay",
        guestName: "Priya Mehta",
        checkIn: "2025-08-01",
        checkOut: "2025-08-03",
        guests: 2,
        pricePerNight: 2700,
        originalPrice: 3200,
        location: "Pune, India",
        rating: 4.0,
        image: img4,
        status: "Checked-out",
        features: [
            "Clean Bedding",
            "Free Parking",
            "LED TV",
            "Hot Water",
            "Daily Housekeeping",
        ],
    },
];

const BookedRooms = () => {
    const [activeTab, setActiveTab] = useState("All");
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const filtered = bookedRooms.filter((room) => {
        const matchesTab = activeTab === "All" || room.status === activeTab;
        const roomStart = new Date(room.checkIn);
        const roomEnd = new Date(room.checkOut);

        const filterStart = startDate ? new Date(startDate) : null;
        const filterEnd = endDate ? new Date(endDate) : null;

        const matchesDate =
            (!filterStart || roomEnd >= filterStart) &&
            (!filterEnd || roomStart <= filterEnd);

        return matchesTab && matchesDate;
    });


    return (
        <section className="bg-[#fef9f4] pt-25 pb-12 px-4 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-3xl font-bold text-[#111827]">Booked Rooms</h2>
                <p className="text-gray-600 mt-2">
                    View bookings based on their current status.
                </p>
            </div>

            {/* Tabs */}
            <div className="overflow-x-auto no-scrollbar mb-8 p-2">
                <div className="flex justify-start lg:justify-center">
                    <div className="inline-flex gap-2 bg-[#fdf4e7] rounded-full shadow-sm min-w-max">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm font-medium px-5 py-3 rounded-full whitespace-nowrap transition-all duration-200 ${activeTab === tab
                                    ? "bg-yellow-400 text-black shadow"
                                    : "text-gray-700 hover:bg-yellow-100"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Date Range Filters */}
            <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="start-date" className="text-sm font-medium text-gray-700">
                        Start Date:
                    </label>
                    <input
                        id="start-date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="end-date" className="text-sm font-medium text-gray-700">
                        End Date:
                    </label>
                    <input
                        id="end-date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    />
                </div>
                </div>
                <button
                    onClick={() => {
                        setStartDate("");
                        setEndDate("");
                    }}
                    className="text-sm text-blue-600 hover:underline mt-2 md:mt-0"
                >
                    Reset Dates
                </button>
            </div>


            {/* Room Cards */}
            <div className="p-2">
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filtered.map((room) => (
                            <div
                                key={room.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden relative"
                            >
                                {/* Rating */}
                                <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <Star className="w-4 h-4" />
                                    <span>{room.rating.toFixed(1)}</span>
                                </div>

                                {/* Status */}
                                <div className="absolute top-2 right-2">
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${room.status === "Booked"
                                            ? "bg-green-100 text-green-800"
                                            : room.status === "Checked-in"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {room.status}
                                    </span>
                                </div>

                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-44 object-cover cursor-pointer"
                                    onClick={() => navigate("/room-detail")}
                                />

                                <div className="p-4 space-y-2">
                                    <h3
                                        onClick={() => navigate("/room-detail")}
                                        className="text-lg font-semibold text-gray-900 line-clamp-1 cursor-pointer"
                                    >
                                        {room.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        Guest: <span className="font-medium">{room.guestName}</span>
                                    </p>

                                    <div className="text-sm text-gray-800 flex flex-col gap-1">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            <span className="line-clamp-1">{room.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="w-4 h-4 text-gray-500" />
                                            <span className="text-xs">
                                                {room.checkIn} → {room.checkOut}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-gray-500" />
                                            <span className="text-xs">
                                                {room.guests} Guest{room.guests > 1 ? "s" : ""}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-2 flex items-baseline gap-2">
                                        <span className="line-through text-gray-400 text-sm">
                                            ₹{room.originalPrice.toLocaleString()}/night
                                        </span>
                                        <div className="flex items-center gap-1 font-semibold text-lg">
                                            <IndianRupee className="w-4 h-4" />
                                            <span>₹{room.pricePerNight.toLocaleString()}</span>
                                            <span className="text-xs text-gray-500">/night</span>
                                        </div>
                                    </div>

                                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-700">
                                        {room.features.slice(0, 6).map((f, i) => (
                                            <div key={i} className="flex items-start gap-1">
                                                <span>•</span>
                                                <span className="line-clamp-1">
                                                    {i === 5 && room.features.length > 6
                                                        ? "And many more..."
                                                        : f}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No rooms in this status.</p>
                )}
            </div>

        </section>
    );
};

export default BookedRooms;
