import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import img1 from '../assets/1.png'
import { img } from "framer-motion/client";

const LoginPopup = ({ onClose, onForgotPassword }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert("Please fill in both fields");
      return;
    }
    alert("Logged in!");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-4xl max-h-[90vh]"
      >
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-red-500 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side – Visual */}
        <div className="relative hidden lg:block lg:w-1/2 bg-yellow-500">
          <img
            src={img1}
            alt="Luxury"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-8">
            <h2 className="text-3xl font-extrabold mb-3 drop-shadow">Welcome Back</h2>
            <p className="text-sm max-w-xs drop-shadow">
              Sign in to access premium booking features and exclusive offers.
            </p>
          </div>
        </div>

        {/* Right Side – Form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 bg-white overflow-y-auto">
          <AnimatePresence>
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Login to Your Account</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center border rounded-lg px-4 py-2">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="ml-3 w-full outline-none text-sm"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Password */}
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

                {/* Login Button */}
                <button
                  className="w-full mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
                  onClick={handleLogin}
                >
                  Login
                </button>

                {/* Google */}
                <button
                  className="flex items-center justify-center w-full gap-2 bg-neutral-100 border rounded-lg py-2 hover:bg-neutral-200 transition"
                  onClick={() => alert("Google login")}
                >
                  <span className="text-sm">Continue with Google</span>
                </button>

                {/* Links */}
                <div className="text-sm text-gray-600 text-center mt-6">
                  <p className="mb-2">
                    <button
                      className="text-yellow-600 hover:underline"
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          if (typeof onForgotPassword === "function") {
                            onForgotPassword();
                          }
                        }, 300);
                      }}
                    >
                      Forgot password?
                    </button>

                  </p>
                  <p>
                    Don't have an account?{" "}
                    <button onClick={onClose} className="text-yellow-600 font-semibold hover:underline">
                      Register now
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPopup;
