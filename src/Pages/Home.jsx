import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import dayjs from "dayjs";
import hotelLandingBg from '../assets/hotel-landing-bg.png';
import HomeBooking from "../Components/HomeBooking";
import HotelShowcase from "../Components/HotelShowCase";
import RoomSection from "../Components/RoomSection";
import HeroVideo from "../Components/HeroVideo";
import BookRoomCTA from "../Components/BookRoomCta";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [guests, setGuests] = useState({ adults: 1, children: 0 });
    const [rooms, setRooms] = useState(1);
    const navigate = useNavigate()

    const today = dayjs().format("YYYY-MM-DD");
    const tomorrow = dayjs().add(1, 'day').format("YYYY-MM-DD");

    return (
        <>
            <section
                className="relative min-h-screen md:min-h-[90vh] flex flex-col justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${hotelLandingBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-0"></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 h-full max-w-[1200px] w-full mx-auto px-2 sm:px-6 py-10 md:py-20">

                    {/* Left Content */}
                    <div className="text-white max-w-2xl text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Discover Premium Stays for Every Journey
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-gray-200">
                            From serene retreats to vibrant city escapes, find handpicked luxury hotels designed to elevate your vacation or business travel experience.
                        </p>

                        <button
                            onClick={() => navigate('/rooms')}
                            className="mt-6 mx-auto lg:mx-0 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                            Explore Rooms <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Right Rating Card */}
                    <div className="hidden lg:block bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-lg text-white w-full sm:max-w-[240px] mx-auto lg:mx-0 text-center">
                        <div className="text-4xl sm:text-5xl font-bold mb-1">4.9</div>
                        <p className="text-sm text-gray-200 mb-2">Based on 2,400+ reviews</p>
                        <div className="flex justify-center gap-1">
                            {Array(5).fill(0).map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>

                </div>
                <HomeBooking />
            </section>
            <HotelShowcase />
            <RoomSection />
            <HeroVideo />
            <BookRoomCTA />
        </>
    );
};

export default Home;
