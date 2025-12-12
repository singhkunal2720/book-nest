import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ShieldCheck, X } from "lucide-react";
import img2 from '../assets/2.png'

const RegisterPopup = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: "",
    });
    const [secondsLeft, setSecondsLeft] = useState(30);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (step === 2 && secondsLeft > 0) {
            const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
            return () => clearTimeout(timer);
        }
        if (secondsLeft === 0) {
            setCanResend(true);
        }
    }, [secondsLeft, step]);

    const handleResend = () => {
        setSecondsLeft(30);
        setCanResend(false);
        alert("OTP Resent!");
    };


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/90 bg-opacity-60 flex items-center justify-center px-4">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-4xl max-h-[90vh]">

                {/* ❌ Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-gray-500 hover:text-red-500 transition"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Left Side: Image & Info */}
                <div className="relative hidden lg:block lg:w-1/2">
                    <img
                        src={img2}
                        alt="Luxury"
                        className="max-h-90 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-8">
                        <h2 className="text-3xl font-extrabold mb-3 drop-shadow">Welcome to BookNest</h2>
                        <p className="text-sm max-w-xs drop-shadow">
                            Get exclusive deals, manage bookings, and enjoy premium services by creating your account.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form Steps */}
                <div className="w-full lg:w-1/2 p-6 lg:p-10 bg-white overflow-y-auto">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Register with Email</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center border rounded-lg px-4 py-2">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="ml-3 w-full outline-none text-sm"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button
                                        className="w-full mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
                                        onClick={() => setStep(2)}
                                    >
                                        Continue
                                    </button>
                                    <button
                                        className="flex items-center justify-center w-full gap-2 bg-neutral-100 border rounded-lg py-2 hover:bg-neutral-200 transition"
                                        onClick={() => alert("Google Login")}
                                    >
                                        <span className="text-sm">Continue with Google</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Verify OTP</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center border rounded-lg px-4 py-2">
                                        <ShieldCheck className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="otp"
                                            placeholder="Enter 6-digit OTP"
                                            maxLength={6}
                                            className="ml-3 w-full outline-none text-sm"
                                            value={form.otp}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* ⏱ Timer or Resend */}
                                    <div className="text-xs text-gray-500 flex justify-between px-1">
                                        {canResend ? (
                                            <button onClick={handleResend} className="text-yellow-600 font-medium hover:underline">
                                                Resend OTP
                                            </button>
                                        ) : (
                                            <span>Resend OTP in {secondsLeft}s</span>
                                        )}
                                    </div>

                                    <button
                                        className="w-full mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
                                        onClick={() => setStep(3)}
                                    >
                                        Verify OTP
                                    </button>
                                </div>

                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Create Password</h3>
                                <div className="space-y-4">
                                    {/* Password Field */}
                                    <div className="flex items-center border rounded-lg px-4 py-2">
                                        <Lock className="w-5 h-5 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Password"
                                            className="ml-3 w-full outline-none text-sm"
                                            value={form.password}
                                            onChange={handleChange}
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
                                        </button>
                                    </div>

                                    {/* Confirm Password Field */}
                                    <div className="flex items-center border rounded-lg px-4 py-2">
                                        <Lock className="w-5 h-5 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            className="ml-3 w-full outline-none text-sm"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button
                                        className="w-full mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
                                        onClick={() => alert("Registered Successfully!")}
                                    >
                                        Register
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* 👉 Already Registered Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already registered?{" "}
                            <button onClick={onClose} className="text-yellow-600 font-semibold hover:underline">
                                Login here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPopup;
