import React from "react";
import { ArrowRightCircle } from "lucide-react";
import hotel1 from "../assets/hotel-img-1.png";
import hotel2 from "../assets/hotel-img-2.png";
import hotel3 from "../assets/hotel-img-2.png";
import { useNavigate } from "react-router-dom";

const HotelShowcase = () => {
    const navigate = useNavigate()

    return (
        <section className="bg-[#fffdf8] py-14 px-6 md:px-10 mt-[200px] md:mt-[50px]">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">

                {/* Top Left Section (Row with space-between) */}
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-center">

                    {/* Text and Button */}
                    <div className="flex-1 space-y-4 max-w-[600px]">
                        <h2 className="text-2xl sm:text-3xl text-gray-900 leading-snug font-semibold">
                            Discover stays tailored to your dreams. Luxury, comfort, or adventure — your journey begins here. {" "}
                            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-2 rounded-4xl font-medium text-sm hover:bg-gray-900 transition">
                                <span 
                                onClick={() => {
                                    navigate("/about")
                                }}
                                className="transition-transform group-hover:translate-x-1 duration-200 flex gap-2">
                                    Explore more  <ArrowRightCircle className="w-5 h-5" />
                                </span>
                            </button>
                        </h2>
                    </div>


                    {/* Stats */}
                    <div className="flex gap-10 pt-4 lg:pt-0 shrink-0">
                        <div>
                            <div className="text-3xl font-bold text-gray-900">15+</div>
                            <p className="text-sm text-gray-500">Amenities Offered</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900">10k+</div>
                            <p className="text-sm text-gray-500">Happy Guests Served</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Right Visual Section */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition w-full">
                        {/* Full-Screen SVG Wave Background */}
                        <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 400 250"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#14532d" />
                                    <stop offset="100%" stopColor="#e9f0e6" />
                                </linearGradient>
                            </defs>

                            <path
                                d="M0,80 C100,140 300,0 400,100 L400,250 L0,250 Z"
                                fill="url(#waveGradient)"
                                opacity="0.8"
                            />
                            <path
                                d="M0,130 C150,180 250,30 400,120 L400,250 L0,250 Z"
                                fill="url(#waveGradient)"
                                opacity="0.5"
                            />
                            <path
                                d="M0,160 C130,210 280,60 400,160 L400,250 L0,250 Z"
                                fill="url(#waveGradient)"
                                opacity="0.4"
                            />
                            <path
                                d="M0,200 C160,240 240,100 400,180 L400,250 L0,250 Z"
                                fill="url(#waveGradient)"
                                opacity="0.3"
                            />
                        </svg>

                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col items-start justify-end h-full px-4 py-4 text-xl font-semibold text-white">
                            <div className="text-4xl">🌿</div>
                            Escape Today <br />
                            Relax. Refresh. Recharge.
                        </div>
                    </div>


                    {/* Hotel Image 1 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg h-[250px]">
                        <img
                            src={hotel1}
                            alt="Hotel Room"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Hotel Image 2 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg h-[250px]">
                        <img
                            src={hotel2}
                            alt="Beach Resort"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Hotel Image 3 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg h-[250px]">
                        <img
                            src={hotel3}
                            alt="Mountain Retreat"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HotelShowcase;
