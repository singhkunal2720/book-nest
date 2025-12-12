import React from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  MessageCircle,
} from "lucide-react";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="px-6 pt-25 pb-16 bg-gradient-to-br from-[#fff] to-[#fef9f4]">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-neutral-900">Get in Touch</h2>
        <p className="text-gray-600 mt-2">We’re here to help and answer any question you might have.</p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-yellow-500" />
            <div>
              <h4 className="font-semibold text-lg">Our Address</h4>
              <p className="text-gray-600">123 Main Street, Mumbai, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-yellow-500" />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">contact@yourcompany.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-yellow-500" />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
            <div className="flex gap-4 text-yellow-500">
              <Facebook className="hover:scale-110 transition" />
              <Twitter className="hover:scale-110 transition" />
              <Instagram className="hover:scale-110 transition" />
              <Linkedin className="hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div className="relative">
            <input
              {...register("name", { required: true })}
              placeholder=" "
              className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            />
            <label className="absolute text-gray-500 text-sm left-4 top-3 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm">
              Full Name
            </label>
            {errors.name && <p className="text-red-500 text-sm mt-1">Required</p>}
          </div>

          <div className="relative">
            <input
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              placeholder=" "
              className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            />
            <label className="absolute text-gray-500 text-sm left-4 top-3 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm">
              Email Address
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Valid email required</p>
            )}
          </div>

          <div className="relative">
            <textarea
              {...register("message", { required: true })}
              placeholder=" "
              rows={5}
              className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            />
            <label className="absolute text-gray-500 text-sm left-4 top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm">
              Your Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">Required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 rounded-xl font-semibold hover:brightness-110 transition-all shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9667733484713!2d72.83106021490299!3d19.117142887069886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b639f6cb29d1%3A0xc71b0579e7ddf6e4!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632053418587!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
