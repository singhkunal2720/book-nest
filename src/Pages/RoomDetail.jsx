import React, { useState } from "react";
import {
  BedDouble,
  Wifi,
  Tv,
  Snowflake,
  ParkingCircle,
  ArrowRight,
  CheckCheck,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BookRoomPopup from "../Components/BookRoomPopUp";
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'

const RoomDetail = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  const images = [
    img5,
    img6,
    img7
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 px-4 pt-28 pb-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="relative">
            <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
              {images.map((src, idx) => (
                <div className="keen-slider__slide" key={idx}>
                  <img
                    src={src}
                    alt={`Room image ${idx + 1}`}
                    className="w-full h-72 sm:h-[450px] object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Slider Arrows */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Room Info Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 space-y-6 border border-yellow-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                  Deluxe King Room with Balcony
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  with Complimentary Breakfast & WiFi
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  ₹5,200{" "}
                  <span className="text-sm sm:text-base text-gray-500 font-normal">
                    + Taxes
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  Per Night • Base Price ₹4,800
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-dashed border-gray-200">
              <Feature icon={<CheckCircle size={18} />} label="1 King Bed" />
              <Feature icon={<CheckCircle size={18} />} label="Free Wi-Fi" />
              <Feature icon={<CheckCircle size={18} />} label="Smart TV" />
              <Feature icon={<CheckCircle size={18} />} label="Air Conditioning" />
              <Feature icon={<CheckCircle size={18} />} label="Free Parking" />
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700">
              {[
                "Room Service",
                "Hot Water",
                "Mini Bar",
                "Work Desk",
                "Wardrobe",
                "24/7 Reception",
                "Hair Dryer",
                "Daily Housekeeping",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 hover:text-yellow-600 transition"
                >
                  <CheckCheck className="w-4 h-4 text-green-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Room Rules */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Room Rules</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Check-in: 12:00 PM • Check-out: 11:00 AM</li>
              <li>Smoking is not allowed inside the room</li>
              <li>No pets allowed</li>
              <li>Government-issued ID required at check-in</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold rounded-full shadow-lg transition-all duration-200 text-base sm:text-lg">
              Book This Room <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <BookRoomPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

const Feature = ({ icon, label }) => (
  <span className="flex items-center gap-2 text-sm sm:text-base text-gray-600 font-medium">
    <span className="text-yellow-500">{icon}</span>
    {label}
  </span>
);

export default RoomDetail;
