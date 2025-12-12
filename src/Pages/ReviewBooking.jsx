import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img6 from "../assets/6.png"

const ReviewBooking = () => {
    const [bookingFor, setBookingFor] = useState("myself");
    const [showGST, setShowGST] = useState(false);
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false);
    const [guests, setGuests] = useState([]);
    const [guestForm, setGuestForm] = useState({ title: "", fullName: "", age: "", under12: false });


    const handleAddGuest = () => {
        setGuests([...guests, guestForm]);
        setGuestForm({ title: "", fullName: "", age: "", under12: false });
        setShowPopup(false);
    };

    const handleDeleteGuest = (index) => {
        const updated = [...guests];
        updated.splice(index, 1);
        setGuests(updated);
    };

    return (
        <div className="bg-[#fef9f4] pt-24 pb-12 px-4 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-800 mt-2 mb-4">Review your booking</h1>

            <div className="flex flex-col md:flex-row items-start gap-2.5">
                <div className="flex flex-col gap-4 flex-3">
                    {/* Booking Card */}
                    <div className="bg-white rounded-xl shadow-lg px-4 py-5">
                        {/* Hotel Info */}
                        <div className="flex justify-between items-center pb-5">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-700">The Grand Palace Hotel</h2>
                                <p className="text-sm text-gray-500">123 Royal Street, New York City</p>
                            </div>
                            <div className="w-24 h-24 rounded-md overflow-hidden border">
                                <img src={img6} alt="Hotel" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Room Details */}
                        <div className="border-t py-5">
                            <h2 className="text-md font-semibold text-gray-700">Deluxe King Room</h2>
                            <p className="text-sm text-gray-500">Free WiFi · Breakfast included · Sea view · Air conditioning</p>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4 border-t pt-5">
                            <div className="bg-[#f9f6f2] rounded-lg p-4">
                                <h3 className="text-sm font-medium text-gray-600">Check-in</h3>
                                <p className="text-md font-semibold text-gray-800">02 August, Saturday</p>
                                <p className="text-sm text-gray-500">2025 · 12:00 PM</p>
                            </div>
                            <div className="bg-[#f9f6f2] rounded-lg p-4">
                                <h3 className="text-sm font-medium text-gray-600">Check-out</h3>
                                <p className="text-md font-semibold text-gray-800">05 August, Tuesday</p>
                                <p className="text-sm text-gray-500">2025 · 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Non Refundable Section */}
                    <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 space-y-4 text-sm text-[#333]">
                        <h2 className="text-base font-semibold text-[#111]">Non-Refundable</h2>
                        <p className="text-sm text-gray-600">
                            Please read the terms below before confirming your booking:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 pl-2">
                            <li>Payment is required in full at the time of booking.</li>
                            <li>No cancellations or refunds will be allowed once booked.</li>
                            <li>Changes to the reservation are not permitted.</li>
                            <li>Applicable taxes and charges included in the total price.</li>
                        </ul>
                    </div>

                    {/* Guest Details */}
                    <div className="bg-white rounded-xl shadow-lg p-5 space-y-4">
                        <h2 className="text-lg font-semibold text-[#111]">Guest Details</h2>

                        {/* Radio */}
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input type="radio" value="myself" checked={bookingFor === "myself"} onChange={() => setBookingFor("myself")} />
                                Myself
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" value="someone" checked={bookingFor === "someone"} onChange={() => setBookingFor("someone")} />
                                Someone else
                            </label>
                        </div>

                        {/* Title and Full Name */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <div className="relative">
                                    <select
                                        className="appearance-none w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                                    >
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Ms</option>
                                        <option>Dr</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" placeholder="Enter full name" />
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" placeholder="Enter email" />
                                <p className="text-xs text-gray-500 mt-1">Ticket will be sent on this email</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" placeholder="Enter phone number" />
                            </div>
                        </div>

                        {/* GST Details Toggle */}
                        <label className="flex items-center gap-2 mt-2">
                            <input type="checkbox" onChange={() => setShowGST(!showGST)} />
                            Enter GST details (optional)
                        </label>

                        {/* GST Inputs */}
                        {showGST && (
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">GST Number</label>
                                    <input type="text" className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" placeholder="Enter GST number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                                    <input type="text" className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" placeholder="Enter company name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Company Address</label>
                                    <input type="text" className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition" placeholder="Enter address" />
                                </div>
                            </div>
                        )}

                        {/* Add Guest */}
                        <button onClick={() => setShowPopup(true)} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition">
                            + Add Guest
                        </button>

                        {/* Added Guest Cards */}
                        {guests.length > 0 && (
                            <div className="mt-4 grid gap-3">
                                {guests.map((g, i) => (
                                    <div key={i} className="flex justify-between items-center border p-3 rounded-md bg-[#f9f6f2]">
                                        <p>{g.title} {g.fullName}</p>
                                        <button onClick={() => handleDeleteGuest(i)}>
                                            <X className="w-4 h-4 text-red-600" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-5 space-y-3 text-sm w-full max-w-md mx-auto flex-1">
                    {/* Header Row: Room Type and Price */}
                    <div className="flex justify-between items-center">
                        <div className="font-semibold text-gray-800">2 × Deluxe Rooms</div>
                        <div className="text-lg font-bold text-gray-900">₹3,800</div>
                    </div>

                    {/* Taxes with Tooltip */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <span className="text-gray-800 font-medium">Taxes</span>
                            <div className="relative group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-500 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    tabIndex={0}
                                >
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" />
                                    <circle cx="12" cy="16" r="1" strokeWidth="2" fill="currentColor" />
                                </svg>

                                {/* Tooltip */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 text-xs text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-20">
                                    Includes hotel service tax and applicable GST.
                                </div>
                            </div>
                        </div>
                        <span className="text-gray-800 font-medium">₹490</span>
                    </div>

                    <hr className="border-t border-gray-200" />

                    {/* Total Row */}
                    <div className="flex justify-between items-center font-semibold text-gray-900 text-base">
                        <span>Total</span>
                        <span>₹4,290</span>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start gap-2 pt-2">
                        <input type="checkbox" id="tnc" className="mt-1 accent-yellow-500" />
                        <label htmlFor="tnc" className="text-gray-700 text-xs leading-snug">
                            I accept the <span className="font-medium text-gray-800">terms & conditions</span> and understand the <span className="font-medium text-gray-800">refund policy</span>.
                        </label>
                    </div>

                    {/* Pay Now Button */}
                    <button
                        onClick={() => navigate("/booked-successfully")}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 transition text-white font-medium py-2 rounded-md text-sm">
                        Pay Now
                    </button>
                </div>

                {/* Add Guest Popup */}
                {showPopup && (
                    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl w-[90%] max-w-md space-y-4 shadow-xl">
                            <h2 className="text-lg font-semibold">Add Guest</h2>
                            <div className="flex gap-4">
                                {/* Title Select */}
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                                            value={guestForm.title}
                                            onChange={(e) => setGuestForm({ ...guestForm, title: e.target.value })}
                                        >
                                            <option>Mr</option>
                                            <option>Mrs</option>
                                            <option>Ms</option>
                                            <option>Dr</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Full Name */}
                                <div className="flex-3 w-full">
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-300 text-sm text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                                        value={guestForm.fullName}
                                        placeholder="Enter Full name"
                                        onChange={(e) => setGuestForm({ ...guestForm, fullName: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Checkbox for age */}
                            <div className="flex items-center gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="under12"
                                    className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                                    checked={guestForm.under12}
                                    onChange={(e) => setGuestForm({ ...guestForm, under12: e.target.checked })}
                                />
                                <label htmlFor="under12" className="text-sm text-gray-700">
                                    Guest age is below 12 years
                                </label>
                            </div>

                            <div className="flex justify-end gap-2">
                                <button className="px-4 py-2 text-gray-600 hover:underline" onClick={() => setShowPopup(false)}>Cancel</button>
                                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600" onClick={handleAddGuest}>Add</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewBooking;
