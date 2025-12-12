import React from "react";
import { XCircle, RotateCw } from "lucide-react";

const Failed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center mt-16 space-y-6 border border-red-300">
        <div className="flex justify-center">
          <XCircle className="w-16 h-16 text-red-600 drop-shadow-md" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Payment Failed</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Unfortunately, your transaction could not be completed.<br />
          Please check your payment method and try again.
        </p>
        <div className="rounded-lg bg-red-50 p-4 border border-red-200 text-sm text-gray-800">
          <p><span className="font-semibold">Booking ID:</span> #BKG12345678</p>
          <p><span className="font-semibold">Hotel:</span> The Sunrise Resort</p>
          <p><span className="font-semibold">Check-in:</span> 12th Aug 2025</p>
          <p><span className="font-semibold">Guests:</span> 2 Adults, 1 Room</p>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-200">
          Retry Payment <RotateCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Failed;
