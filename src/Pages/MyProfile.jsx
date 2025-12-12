import React, { useState } from "react";
import {
    LogOut,
    KeyRound,
    Pencil,
    Save,
} from "lucide-react";
import ResetPassword from "../Components/ResetPassword";

const MyProfile = () => {
    const [isEditing, setIsEditing] = useState({
        personal: false,
        contact: false,
        document: false,
    });

    const [formData, setFormData] = useState({
        firstName: "Kunal",
        lastName: "Singh",
        gender: "Male",
        dob: "1995-01-01",
        nationality: "Indian",
        phone: "+91 9876543210",
        email: "kunal@example.com",
        passport: "M1234567",
        expiry: "2030-12-12",
        issuingCountry: "India",
        pan: "ABCDE1234F",
    });

    const [showResetPopup, setShowResetPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = (section) => {
        setIsEditing((prev) => ({ ...prev, [section]: false }));
        console.log("Saved:", formData);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 pb-10">
                <div className="h-[200px] bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md p-5 text-white flex flex-col justify-end items-start">
                    <h1 className="text-3xl font-bold">
                        Hello, {formData.firstName} {formData.lastName}
                    </h1>
                    <p className="mt-2 text-sm">
                        Welcome back! Here’s a quick summary of your profile.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4 mt-10 space-y-8">

                    {/* Personal Details */}
                    <div className="bg-white/90 border border-gray-100 shadow-xl rounded-2xl p-6 md:p-8 space-y-6 backdrop-blur-sm">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Personal Details
                                <span className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-1 block"></span>
                            </h2>
                            {!isEditing.personal ? (
                                <button onClick={() => setIsEditing({ ...isEditing, personal: true })} className="text-sm text-yellow-600 font-medium flex items-center gap-1 hover:underline">
                                    <Pencil className="w-4 h-4" /> Edit
                                </button>
                            ) : (
                                <button onClick={() => handleSave("personal")} className="text-sm text-green-600 font-medium flex items-center gap-1 hover:underline">
                                    <Save className="w-4 h-4" /> Save
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                            {['firstName', 'lastName', 'gender', 'dob', 'nationality'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm text-gray-500 mb-1">
                                        {field === 'dob' ? 'Date of Birth' : field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </label>
                                    {isEditing.personal ? (
                                        field === 'gender' ? (
                                            <select
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            >
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        ) : (
                                            <input
                                                type={field === 'dob' ? 'date' : 'text'}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            />
                                        )
                                    ) : (
                                        <p className="text-base font-medium text-gray-800">
                                            {field === 'dob' ? new Date(formData[field]).toLocaleDateString("en-GB") : formData[field]}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white/90 border border-gray-100 shadow-xl rounded-2xl p-6 md:p-8 space-y-6 backdrop-blur-sm">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Contact Details
                                <span className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-1 block"></span>
                            </h2>
                            {!isEditing.contact ? (
                                <button onClick={() => setIsEditing({ ...isEditing, contact: true })} className="text-sm text-yellow-600 font-medium flex items-center gap-1 hover:underline">
                                    <Pencil className="w-4 h-4" /> Edit
                                </button>
                            ) : (
                                <button onClick={() => handleSave("contact")} className="text-sm text-green-600 font-medium flex items-center gap-1 hover:underline">
                                    <Save className="w-4 h-4" /> Save
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                            {["phone", "email"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm text-gray-500 mb-1">
                                        {field === "phone" ? "Phone Number" : "Email Address"}
                                    </label>
                                    {isEditing.contact ? (
                                        <input
                                            type="text"
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    ) : (
                                        <p className="text-base font-medium text-gray-800">{formData[field]}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Document Details */}
                    <div className="bg-white/90 border border-gray-100 shadow-xl rounded-2xl p-6 md:p-8 space-y-6 backdrop-blur-sm">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Document Details
                                <span className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-1 block"></span>
                            </h2>
                            {!isEditing.document ? (
                                <button onClick={() => setIsEditing({ ...isEditing, document: true })} className="text-sm text-yellow-600 font-medium flex items-center gap-1 hover:underline">
                                    <Pencil className="w-4 h-4" /> Edit
                                </button>
                            ) : (
                                <button onClick={() => handleSave("document")} className="text-sm text-green-600 font-medium flex items-center gap-1 hover:underline">
                                    <Save className="w-4 h-4" /> Save
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                            {["passport", "expiry", "issuingCountry", "pan"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm text-gray-500 mb-1">
                                        {field === "passport"
                                            ? "Passport Number"
                                            : field === "expiry"
                                                ? "Expiry Date"
                                                : field === "issuingCountry"
                                                    ? "Issuing Country"
                                                    : "PAN Card Number"}
                                    </label>
                                    {isEditing.document ? (
                                        <input
                                            type={field === "expiry" ? "date" : "text"}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    ) : (
                                        <p className="text-base font-medium text-gray-800">
                                            {field === "expiry"
                                                ? new Date(formData[field]).toLocaleDateString("en-GB")
                                                : formData[field]}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                        <button
                            onClick={() => setShowResetPopup(true)}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow transition">
                            <KeyRound className="w-5 h-5" /> Reset Password
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-black text-white font-semibold shadow transition">
                            <LogOut className="w-5 h-5" /> Logout
                        </button>
                    </div>
                </div>
            </div>


            {showResetPopup && (
                <ResetPassword onClose={() => setShowResetPopup(false)} />
            )}

        </>
    );
};

export default MyProfile;