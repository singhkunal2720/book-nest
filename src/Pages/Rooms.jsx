import React, { useState } from "react";
import { MapPin, Star, X } from "lucide-react";
import FilterPanel from "../Components/FilterPanel";
import { motion, AnimatePresence } from "framer-motion";
import BookRoomPopup from "../Components/BookRoomPopUp";
import { useNavigate } from "react-router-dom";

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const allRooms = [
  // Standard Rooms
  {
    id: 1,
    category: "Standard Rooms",
    title: "Cozy Standard Room",
    description: "A compact room with all modern amenities perfect for solo travelers.",
    price: "₹2,499/night",
    originalPrice: "₹3,199/night",
    location: "Mumbai, India",
    rating: 4.3,
    image: img1,
    features: [
      "Free Wi-Fi", "Air Conditioning", "Smart TV", "Hot Water",
      "Queen Bed", "Workspace", "Mini Fridge", "Room Service"
    ]
  },
  {
    id: 2,
    category: "Standard Rooms",
    title: "Budget Friendly Comfort",
    description: "Affordable stay option without compromising on quality and cleanliness.",
    price: "₹1,999/night",
    originalPrice: "₹2,499/night",
    location: "Pune, India",
    rating: 4.0,
    image: img1,
    features: [
      "Complimentary Breakfast", "AC", "LED TV", "Work Desk",
      "Free Parking", "Housekeeping"
    ]
  },

  // Deluxe Rooms
  {
    id: 3,
    category: "Deluxe Rooms",
    title: "Elegant Deluxe Room",
    description: "Spacious room with elegant décor, ideal for business travelers and couples.",
    price: "₹3,999/night",
    originalPrice: "₹5,299/night",
    location: "Bangalore, India",
    rating: 4.6,
    image: img2,
    features: [
      "King Bed", "Free Wi-Fi", "Smart TV", "Mini Bar",
      "24x7 Room Service", "Air Purifier", "Work Desk"
    ]
  },
  {
    id: 4,
    category: "Deluxe Rooms",
    title: "Luxury City View Room",
    description: "Enjoy stunning city views with top-class comfort and service.",
    price: "₹4,499/night",
    originalPrice: "₹5,799/night",
    location: "Hyderabad, India",
    rating: 4.7,
    image: img2,
    features: [
      "City View", "Balcony", "AC", "Bathtub",
      "Room Heater", "Premium Linen", "Free Breakfast"
    ]
  },

  // Family Rooms
  {
    id: 5,
    category: "Family Rooms",
    title: "Spacious Family Stay",
    description: "Perfect for families, with multiple beds and kid-friendly features.",
    price: "₹5,499/night",
    originalPrice: "₹6,299/night",
    location: "Chennai, India",
    rating: 4.4,
    image: img3,
    features: [
      "2 Queen Beds", "Kids Play Area", "AC", "TV",
      "Microwave", "Extra Storage", "Laundry Service"
    ]
  },
  {
    id: 6,
    category: "Family Rooms",
    title: "Comfort Family Retreat",
    description: "A perfect blend of relaxation and space for the whole family.",
    price: "₹5,799/night",
    originalPrice: "₹6,799/night",
    location: "Jaipur, India",
    rating: 4.5,
    image: img3,
    features: [
      "Family Dining", "Kids Toys", "AC", "Refrigerator",
      "Extra Towels", "In-Room Dining", "Free Wi-Fi"
    ]
  },

  // Suites
  {
    id: 7,
    category: "Suites",
    title: "Executive Suite",
    description: "Luxury suite with separate living area, premium furnishings, and concierge services.",
    price: "₹7,999/night",
    originalPrice: "₹9,499/night",
    location: "Delhi, India",
    rating: 4.8,
    image: img4,
    features: [
      "Living Area", "Dining Table", "Jacuzzi", "King Bed",
      "Room Bar", "High-Speed Wi-Fi"
    ]
  },
  {
    id: 8,
    category: "Suites",
    title: "Presidential Suite",
    description: "Top-tier luxury and privacy for elite travelers, includes lounge access.",
    price: "₹14,999/night",
    originalPrice: "₹18,000/night",
    location: "Goa, India",
    rating: 4.9,
    image: img4,
    features: [
      "Private Lounge", "Sea View", "Private Butler",
      "Walk-in Closet", "Luxury Bath", "Soundproof Rooms"
    ]
  }
];


const uniqueCategories = [...new Set(allRooms.map(r => r.category))];
const uniqueLocations = [...new Set(allRooms.map(r => r.location))];

const Rooms = () => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [showFilters, setShowFilters] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [filterType, setFilterType] = useState("All");
    const [filterLocation, setFilterLocation] = useState("All");
    const [sortOption, setSortOption] = useState("Newest");
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const navigate = useNavigate()

    // Open filters by default on desktop only
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowFilters(true);
            } else {
                setShowFilters(false);
            }
        };

        handleResize(); // Check on load

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // First: filter
    const filteredRooms = allRooms.filter((room) => {
        const matchType = filterType === "All" || room.category === filterType;
        const matchLocation = filterLocation === "All" || room.location === filterLocation;

        const selectedTags = Object.entries(selectedFilters)
            .filter(([key]) => key !== "priceMin" && key !== "priceMax")
            .flatMap(([, values]) => values);

        const matchTags =
            selectedTags.length === 0 ||
            selectedTags.every((tag) =>
                room.features.map((f) => f.toLowerCase()).includes(tag.toLowerCase())
            );

        const priceStr = room.price?.replace(/[^\d]/g, "") || "0";
        const price = parseInt(priceStr, 10);

        const minPrice = selectedFilters.priceMin ?? 0;
        const maxPrice = selectedFilters.priceMax ?? 500000;

        const matchPrice = price >= minPrice && price <= maxPrice;

        return matchType && matchLocation && matchTags && matchPrice;
    });

    // Then: sort
    filteredRooms.sort((a, b) => {
        const getPrice = (room) => parseInt(room.price.replace(/[^\d]/g, ""), 10);

        switch (sortOption) {
            case "Price: Low to High":
                return getPrice(a) - getPrice(b);
            case "Price: High to Low":
                return getPrice(b) - getPrice(a);
            case "A to Z":
                return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
            case "Z to A":
                return b.title.localeCompare(a.title, undefined, { sensitivity: 'base' });

            case "Popular":
                return b.rating - a.rating;
            case "Newest":
            default:
                return b.id - a.id;
        }
    });

    return (
        <>
            <section className="bg-[#fef9f4] py-16 px-5 md:px-10 mt-13">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-4xl font-bold text-[#111827]">Explore Our Rooms</h2>
                    <p className="text-gray-600 mt-3">
                        Find the perfect stay that suits your comfort and budget.
                    </p>
                </div>


                {/* Top Control Bar */}
                <div className="flex flex-row justify-between items-center mb-6 gap-3 py-2.5 border-t-2 border-b-2 border-gray-100">

                    {/* Left: Toggle Filters */}
                    <button
                        onClick={() => setShowFilters((prev) => !prev)}
                        className="text-sm text-black hover:underline"
                    >
                        {showFilters ? "Hide Filters" : "Show Filters"}
                    </button>


                    {/* Right: Sort Dropdown */}
                    <div className="relative inline-block text-left">
                        <button
                            onClick={() => setSortDropdownOpen((prev) => !prev)}
                            className="border border-gray-300 px-4 py-2 text-sm rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none"
                        >
                            Sort: {sortOption}
                        </button>

                        {sortDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                {["Newest", "Popular", "Price: High to Low", "Price: Low to High", "A to Z", "Z to A"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSortOption(option);
                                            setSortDropdownOpen(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Filter + Room Grid */}
                <div className="flex flex-col lg:flex-row items-start gap-6">
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                key="filters"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full lg:w-1/4 hidden md:block"
                            >
                                <FilterPanel
                                    selectedFilters={selectedFilters}
                                    setSelectedFilters={setSelectedFilters}
                                />
                            </motion.div>

                        )}
                    </AnimatePresence>

                    {/* Mobile Filter Overlay + Drawer */}
                    <AnimatePresence>
                        {showFilters && (
                            <>
                                {/* Black Overlay */}
                                <motion.div
                                    key="overlay"
                                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setShowFilters(false)}
                                />

                                {/* Slide-Up Drawer */}
                                <motion.div
                                    key="mobile-filters"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100%" }}
                                    transition={{ duration: 0.3 }}
                                    className="md:hidden fixed inset-x-0 bottom-2 z-50 max-h-[90vh] overflow-y-auto p-2"
                                >
                                    <div className="flex justify-center items-center mb-4 fixed top-5 left-1/2 -translate-x-1/2 z-50">
                                        <button
                                            className="w-14 h-14 rounded-full text-white bg-gradient-to-r from-yellow-500 to-yellow-600 text-sm flex items-center justify-center"
                                            onClick={() => setShowFilters(false)}
                                        >
                                            <X />
                                        </button>
                                    </div>

                                    <div className="max-h-[85vh]">
                                        <FilterPanel
                                            selectedFilters={selectedFilters}
                                            setSelectedFilters={setSelectedFilters}
                                        />
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>


                    {/* Room Cards (right) */}
                    <motion.div
                        key={sortOption + JSON.stringify(selectedFilters)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                    >
                        {filteredRooms.length > 0 ? (
                            filteredRooms.map((room) => (
                                <div
                                    key={room.id}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden"
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
                                         className="text-lg font-semibold text-gray-900 line-clamp-1 cursor-pointer">
                                            {room.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 ">
                                            {room.description}
                                        </p>

                                        <div className="text-sm text-gray-800 flex flex-col">
                                            <span className="flex items-center gap-1 line-clamp-1">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                {room.location}
                                            </span>
                                            <div className="mt-1">
                                                <span className="line-through text-gray-400 mr-2">
                                                    {room.originalPrice}
                                                </span>
                                                <span className="text-yellow-600 font-semibold">
                                                    {room.price}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                                            {room.features.slice(0, 6).map((feature, i) => (
                                                <div key={i} className="flex items-start gap-1">
                                                    <span>•</span>
                                                    <span className="line-clamp-1">
                                                        {i === 5 && room.features.length > 6
                                                            ? "And many more..."
                                                            : feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setIsPopupOpen(true)}
                                            className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:brightness-105 text-white font-medium py-2 px-4 rounded-full transition">
                                            Book Room
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">
                                No rooms match the selected filters.
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>

            <BookRoomPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>

    );
};

export default Rooms;
