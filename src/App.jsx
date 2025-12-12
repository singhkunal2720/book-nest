import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Rooms from './Pages/Rooms';
import ReviewBooking from './Pages/ReviewBooking';
import Success from './Pages/Success';
import Failed from './Pages/Failed';
import RoomDetail from './Pages/RoomDetail';
import MyProfile from './Pages/MyProfile';
import BookedRooms from './Pages/BookedRooms';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking-review" element={<ReviewBooking />} />
        <Route path="/booked-successfully" element={<Success />} />
        <Route path="/booking-failed" element={<Failed />} />
        <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/booked-rooms" element={<BookedRooms />} />
        <Route path="/contact" element={<ContactUs />} />
         <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
