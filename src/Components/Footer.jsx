import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#000000] text-[#ffffff] py-10">
      <div className="container mx-auto px-5 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Brand & Intro */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#facc15] tracking-wide">
            BookNest
          </h2>
          <p className="text-sm leading-relaxed text-[#fefce8]">
            Luxurious stays in the heart of Vasai, Maharashtra. Your comfort is
            our signature.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-[#facc15] transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#facc15] transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#facc15] transition">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#facc15]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Rooms", path: "/rooms" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <li
                key={label}
                onClick={() => navigate(path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(path)}
                className="cursor-pointer hover:text-[#facc15] transition"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#facc15]">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Room Booking</li>
            <li>Banquet Halls</li>
            <li>24x7 Room Service</li>
            <li>Luxury Suites</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#facc15]">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 text-[#facc15]" />
              <span>Near Vasai Railway Station, Maharashtra</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#facc15]" />
              <a href="tel:+912345678900">+91 234 567 8900</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#facc15]" />
              <a href="mailto:info@BookNest.com">info@BookNest.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e5e7eb] mt-10 pt-5 text-center text-sm text-[#fefce8]">
        &copy; {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
