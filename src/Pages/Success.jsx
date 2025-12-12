import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-50 px-4 py-10">
      <div className="bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl mt-12 p-8 md:p-10 max-w-md w-full text-center space-y-6 border border-yellow-200">

        {/* Icon */}
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500 drop-shadow-md" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Payment Successful</h2>

        {/* Subtext */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Thank you for booking with us! Your transaction was successful and a confirmation has been emailed to you.
        </p>

        {/* Booking Info Card */}
        <div className="rounded-xl bg-yellow-50/60 border border-yellow-200 p-4 text-sm text-gray-700 text-left space-y-1 shadow-inner">
          <p><span className="font-semibold">Booking ID:</span> #BKG12345678</p>
          <p><span className="font-semibold">Hotel:</span> The Sunrise Resort</p>
          <p><span className="font-semibold">Check-in:</span> 12th Aug 2025</p>
          <p><span className="font-semibold">Guests:</span> 2 Adults, 1 Room</p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/booked-rooms")}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition-transform text-black font-semibold rounded-lg shadow-sm hover:shadow-md">
          View Booking <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Success;
