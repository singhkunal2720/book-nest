import React, { useState } from "react";
import { MapPin, Star } from "lucide-react";
import BookRoomPopup from "./BookRoomPopUp";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'

const TABS = [
    "Standard Rooms",
    "Deluxe Rooms",
    "Family Rooms",
    "Business Rooms",
    "Luxury Suites",
];

const ROOMS = {
  "Standard Rooms": [
    {
      id: 1,
      title: "Cozy Standard Room",
      description: "Perfect for solo or business travelers seeking a budget-friendly and clean space.",
      price: "₹2,499/night",
      originalPrice: "₹3,199/night",
      location: "Mumbai, India",
      rating: 4.3,
      image: img1,
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Smart TV",
        "Queen Bed",
        "Hot Water",
        "Work Desk",
      ],
    },
    {
      id: 2,
      title: "Urban Compact Comfort",
      description: "A well-designed room offering comfort and essential amenities at the right price.",
      price: "₹2,199/night",
      originalPrice: "₹2,899/night",
      location: "Pune, India",
      rating: 4.1,
      image: img2,
      features: [
        "AC",
        "LED TV",
        "Mini Fridge",
        "Private Bathroom",
        "Room Service",
        "Daily Housekeeping",
      ],
    },
  ],
  "Deluxe Rooms": [
    {
      id: 3,
      title: "Elegant Deluxe Stay",
      description: "Spacious deluxe room with modern furnishings and a city view.",
      price: "₹3,999/night",
      originalPrice: "₹4,499/night",
      location: "Delhi, India",
      rating: 4.6,
      image: img3,
      features: [
        "King Bed",
        "Balcony View",
        "Free Wi-Fi",
        "Bathtub",
        "Mini Bar",
        "In-room Dining",
      ],
    },
    {
      id: 4,
      title: "Deluxe City Escape",
      description: "Unwind in this deluxe room featuring plush interiors and soft lighting.",
      price: "₹3,799/night",
      originalPrice: "₹4,299/night",
      location: "Chennai, India",
      rating: 4.5,
      image: img4,
      features: [
        "Room Heater",
        "Air Purifier",
        "Smart TV",
        "Tea/Coffee Maker",
        "Private Balcony",
        "Slippers & Toiletries",
      ],
    },
  ],
  "Family Rooms": [
    {
      id: 5,
      title: "Spacious Family Comfort",
      description: "A large room with multiple beds and child-friendly amenities for your family.",
      price: "₹4,499/night",
      originalPrice: "₹5,199/night",
      location: "Goa, India",
      rating: 4.4,
      image: img1,
      features: [
        "Double Queen Beds",
        "Kids Play Area",
        "Complimentary Breakfast",
        "Board Games",
        "Extra Bedding",
        "Safety Kit",
      ],
    },
    {
      id: 6,
      title: "Family Suite Stay",
      description: "Comfortable and cozy, this room is ideal for families looking for together time.",
      price: "₹4,299/night",
      originalPrice: "₹5,099/night",
      location: "Manali, India",
      rating: 4.3,
      image: img2,
      features: [
        "Dining Table",
        "Private Balcony",
        "Play Corner",
        "Heated Floors",
        "Free Wi-Fi",
        "Power Backup",
      ],
    },
  ],
  "Business Rooms": [
    {
      id: 7,
      title: "Executive Business Room",
      description: "Optimized for business stays with a work desk, printer access, and fast internet.",
      price: "₹3,499/night",
      originalPrice: "₹4,099/night",
      location: "Bangalore, India",
      rating: 4.5,
      image: img3,
      features: [
        "High-Speed Wi-Fi",
        "Workstation",
        "Printer Access",
        "Breakfast Included",
        "Airport Shuttle",
        "24/7 Support",
      ],
    },
    {
      id: 8,
      title: "Corporate City Room",
      description: "Modern space designed for executives and solo business travelers.",
      price: "₹3,299/night",
      originalPrice: "₹3,899/night",
      location: "Hyderabad, India",
      rating: 4.4,
      image: img4,
      features: [
        "Coffee Machine",
        "Quiet Zone Floor",
        "Smart TV",
        "Lounge Access",
        "Mini Fridge",
        "Soundproof Walls",
      ],
    },
  ],
  "Luxury Suites": [
    {
      id: 9,
      title: "Presidential Luxury Suite",
      description: "The most luxurious stay option featuring large living space and top-notch service.",
      price: "₹8,999/night",
      originalPrice: "₹10,499/night",
      location: "Udaipur, India",
      rating: 4.9,
      image: img1,
      features: [
        "Private Jacuzzi",
        "Lake View",
        "Butler Service",
        "Home Theater",
        "Premium Bar",
        "King Bed",
      ],
    },
    {
      id: 10,
      title: "Grand Royal Suite",
      description: "Lavish interiors and personalized service for an unforgettable stay experience.",
      price: "₹8,499/night",
      originalPrice: "₹9,999/night",
      location: "Jaipur, India",
      rating: 4.8,
      image: img2,
      features: [
        "Walk-in Closet",
        "Private Dining Area",
        "Custom Decor",
        "Spa Bath",
        "Exclusive Lounge",
        "Security Safe",
      ],
    },
  ],
};

const RoomSection = () => {
    const [activeTab, setActiveTab] = useState("Standard Rooms");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <>
            <section className="bg-[#fef9f4] py-16 px-5 md:px-10">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-4xl font-bold text-[#111827]">Rooms That Feel Like Home</h2>
                    <p className="text-gray-600 mt-3">
                        Comfort, style, and all the essentials—just like home, only better.
                    </p>
                </div>

                {/* Tabs */}
                <div className="overflow-x-auto no-scrollbar mb-10 p-2">
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

                {/* Room Cards */}
                <div className="overflow-x-auto no-scrollbar p-2">
                    <div className="flex gap-6 max-w-full">
                        {ROOMS[activeTab]?.length > 0 ? (
                            ROOMS[activeTab].map((room) => (
                                <div
                                    key={room.id}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0"
                                    style={{ maxWidth: "300px", width: "100%" }}
                                >
                                    <div className="relative">
                                        <img
                                            src={room.image}
                                            alt={room.title}
                                            className="w-full h-48 object-cover cursor-pointer"
                                            onClick={() => navigate("/room-detail")}
                                        />
                                        <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <Star className="w-4 h-4 fill-yellow-500" />
                                            <span>{room.rating}</span>
                                        </div>
                                    </div>

                                    <div className="p-4 space-y-2">
                                        <h3
                                        onClick={() => navigate("/room-detail")} 
                                        className="text-lg font-semibold text-gray-900 line-clamp-1 cursor-pointer">{room.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">{room.description}</p>


                                        <div className="text-sm text-gray-800 flex flex-col">
                                            <span className="flex items-center gap-1 line-clamp-1">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                {room.location}
                                            </span>
                                            <div className="mt-1">
                                                <span className="line-through text-gray-400 mr-2">{room.originalPrice}</span>
                                                <span className="text-yellow-600 font-semibold">{room.price}</span>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                                            {room.features.slice(0, 6).map((feature, i) => (
                                                <div key={i} className="flex items-start gap-1">
                                                    <span>•</span>
                                                    <span className="line-clamp-1">
                                                        {i === 5 && room.features.length > 6 ? "And many more..." : feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>


                                        <button
                                            onClick={() => setIsPopupOpen(true)}
                                            className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-full transition">
                                            Book Room
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No rooms in this category.</p>
                        )}
                    </div>
                </div>
            </section>

            <BookRoomPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    );
};

export default RoomSection;
