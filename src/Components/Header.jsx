import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, MoreVertical, Menu, X } from "lucide-react";
import RegisterPopup from "../Components/Register";
import LoginPopup from "../Components/Login";
import ResetPassword from "./ResetPassword";


const navLinks = [
    { label: "Home", path: "/" },
    { label: "Rooms", path: "/rooms" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real auth
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [showRegisterPopup, setShowRegisterPopup] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showResetPopup, setShowResetPopup] = useState(false);


    return (
        <>
            {/* Fixed Premium Header */}
            <header className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
                <div className="w-full max-w-[1200px] bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 flex items-center justify-between shadow-xl ring-1 ring-gray-100/70">

                    {/* Logo */}
                    <div
                        onClick={() => navigate("/")}
                        className="flex items-center space-x-2 cursor-pointer"
                    >
                        <span className="text-xl font-bold text-gray-800 tracking-wide hover:text-yellow-600 transition duration-200">
                            BookNest
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6">
                        {navLinks.map((item) => (
                            <span
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-yellow-600 hover:scale-105 transition-all duration-200"
                            >
                                {item.label}
                            </span>
                        ))}
                    </nav>

                    {/* Desktop Auth/Profile */}
                    <div className="hidden md:block relative">
                        {!isLoggedIn ? (
                            <div className="space-x-3">
                                <button
                                    onClick={() => setShowLoginPopup(true)}
                                    className="px-4 py-1.5 text-sm rounded-full border border-gray-400 text-gray-700 hover:border-yellow-600 hover:text-yellow-600 transition-all duration-200"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setShowRegisterPopup(true)}
                                    className="px-4 py-1.5 text-sm text-white bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200"
                                >
                                    Register
                                </button>

                            </div>
                        ) : (
                            <div className="relative">
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="flex items-center space-x-1 text-sm text-gray-800 hover:text-yellow-600 transition"
                                >
                                    <span>John Doe</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {showDropdown && (
                                    <div className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-xl shadow-xl w-44 z-50 overflow-hidden">
                                        <div
                                            onClick={() => {
                                                navigate("/my-profile");
                                                setShowDropdown(false);
                                            }}
                                            className="px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 cursor-pointer transition"
                                        >
                                            Profile
                                        </div>
                                        <div
                                            onClick={() => {
                                                navigate("/booked-rooms");
                                                setShowDropdown(false);
                                            }}
                                            className="px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 cursor-pointer transition"
                                        >
                                            Booked Rooms
                                        </div>
                                        <div
                                            onClick={() => {
                                                setIsLoggedIn(false);
                                                setShowDropdown(false);
                                            }}
                                            className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer transition"
                                        >
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden p-2 rounded-full hover:bg-yellow-100 transition"
                    >
                        <Menu className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </header>

            <div
                className={`fixed top-0 right-0 z-60 h-full w-64 backdrop-blur-xl bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-l-2xl transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
                    <span
                        onClick={() => navigate("/")}
                        className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-yellow-600 transition"
                    >
                        BookNest
                    </span>
                    <button onClick={() => setMobileOpen(false)}>
                        <X className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col px-5 py-6 space-y-5">
                    {navLinks.map((item) => (
                        <span
                            key={item.path}
                            onClick={() => {
                                navigate(item.path);
                                setMobileOpen(false);
                            }}
                            className="relative text-gray-800 text-base font-medium cursor-pointer transition-all duration-200 hover:text-yellow-600 hover:scale-[1.02] group"
                        >
                            {item.label}
                        </span>
                    ))}
                </nav>

                {/* Auth/Profile at Bottom */}
                <div className="absolute bottom-4 left-0 w-full px-5">
                    {!isLoggedIn ? (
                        <div className="flex justify-between gap-2.5">
                            <button
                                onClick={() => {
                                    setShowLoginPopup(true);
                                    setMobileOpen(false);
                                }}
                                className="text-sm px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-yellow-500 hover:text-yellow-600 transition w-full"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => {
                                    setShowRegisterPopup(true);
                                    setMobileOpen(false);
                                }}
                                className="text-sm px-4 py-2 text-white bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full hover:from-yellow-600 hover:to-yellow-700 shadow-md transition w-full"
                            >
                                Register
                            </button>

                        </div>
                    ) : (
                        <div className="relative flex justify-between items-center">
                            <span className="font-medium text-gray-800">John Doe</span>
                            <button onClick={() => setProfileDropdown(!profileDropdown)}>
                                <MoreVertical className="h-5 w-5 text-gray-600 hover:text-yellow-600 transition" />
                            </button>
                            {profileDropdown && (
                                <div className="absolute right-0 bottom-12 bg-white/90 border border-gray-200 shadow-xl rounded-xl w-44 z-50 animate-fadeIn">
                                    <div
                                        onClick={() => {
                                            navigate("/my-profile");
                                            setProfileDropdown(false);
                                            setMobileOpen(false);
                                        }}
                                        className="px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 rounded-t-lg cursor-pointer transition"
                                    >
                                        Profile
                                    </div>
                                    <div
                                        onClick={() => {
                                            navigate("/booked-rooms");
                                            setProfileDropdown(false);
                                            setMobileOpen(false);
                                        }}
                                        className="px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 cursor-pointer transition"
                                    >
                                        Booked Rooms
                                    </div>
                                    <div
                                        onClick={() => {
                                            setIsLoggedIn(false);
                                            setProfileDropdown(false);
                                            setMobileOpen(false);
                                        }}
                                        className="px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-b-lg cursor-pointer transition"
                                    >
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {showRegisterPopup && (
                <RegisterPopup onClose={() => setShowRegisterPopup(false)} />
            )}
            {showLoginPopup && (
                <LoginPopup
                    onClose={() => setShowLoginPopup(false)}
                    onForgotPassword={() => {
                        setShowLoginPopup(false);
                        setTimeout(() => setShowResetPopup(true), 300);
                    }}
                />
            )}

            {showResetPopup && (
                <ResetPassword onClose={() => setShowResetPopup(false)} />
            )}

        </>
    );
};

export default Header;
