import React from "react";
import {
  ShieldCheck,
  Users,
  Handshake,
  Target,
  Gem,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import img5 from '../assets/6.png'

const AboutUs = () => {
  return (
    <div className="bg-white text-neutral-900">
      {/* Hero / Intro */}
      <section className="relative bg-gradient-to-br from-yellow-100 to-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover who we are, what drives us, and how we’re making a difference.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2015, our company started with a simple mission: to deliver high-quality, customer-focused solutions that make life better. Over the years, we’ve grown into a trusted name, serving hundreds of happy clients and constantly innovating along the way.
          </p>
        </div>
        <img
          src={img5}
          alt="Our Story"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <Target className="w-5 h-5 mr-2 text-yellow-500" />
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower our clients through exceptional services and tailor-made solutions that drive meaningful impact.
              </p>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-semibold mb-2">
                <Gem className="w-5 h-5 mr-2 text-yellow-500" />
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become a global leader recognized for innovation, quality, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trust & Reliability",
              icon: ShieldCheck,
              desc: "We deliver consistent results and build long-term relationships based on transparency.",
            },
            {
              title: "Experienced Team",
              icon: Users,
              desc: "Our professionals bring years of expertise across industries and projects.",
            },
            {
              title: "Client-Centric Approach",
              icon: Handshake,
              desc: "We listen, we care, and we act to meet your specific goals and expectations.",
            },
          ].map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <Icon className="w-8 h-8 text-yellow-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-r from-yellow-50 to-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Integrity", "Innovation", "Accountability", "Respect", "Excellence"].map((value) => (
              <div
                key={value}
                className="bg-white px-6 py-4 rounded-full shadow text-sm font-medium text-gray-800 flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-green-500" />
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-yellow-400 text-black text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg mb-6">Let’s build something amazing together.</p>
        <a
          href="/contact"
          className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-neutral-800 transition-all"
        >
          Contact Us
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
