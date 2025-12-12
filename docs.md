# 📚 BookNest Documentation  

## 🏨 Project Overview  
**BookNest** is a hotel booking web application built using **React (Vite)** and **TailwindCSS**, featuring pages for browsing rooms, viewing details, booking, user authentication, and profile management.

---

## 🚀 Tech Stack  
- **Frontend Framework:** React (with Vite)  
- **Styling:** Tailwind CSS  
- **Routing:** React Router DOM  
- **Form Handling:** React Hook Form  
- **Date Picker:** Flatpickr + React Flatpickr  
- **Slider:** Keen Slider & RC Slider  
- **Icons:** Lucide React  
- **Animations:** Framer Motion  
- **Notifications:** React Toastify  
- **Utilities:** Day.js (date formatting)  

---

## 📂 Project Structure  

```
booknest/
├── node_modules/
├── public/
├── src/
│   ├── assets/                   
│   ├── Components/               
│   │   ├── BookRoomCta.jsx
│   │   ├── BookRoomPopUp.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroVideo.jsx
│   │   ├── HomeBooking.jsx
│   │   ├── HotelShowCase.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ResetPassword.jsx
│   │   ├── RoomSection.jsx
│   │   ├── ScrollToTop.jsx
│   ├── Pages/                    
│   │   ├── AboutUs.jsx
│   │   ├── BookedRooms.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Failed.jsx
│   │   ├── Home.jsx
│   │   ├── MyProfile.jsx
│   │   ├── ReviewBooking.jsx
│   │   ├── RoomDetail.jsx
│   │   ├── Rooms.jsx
│   │   ├── Success.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── eslint.config.js
└── README.md
```

---

## 🖥️ Pages Overview  

### **1. Home (`/`)**
- Hero video/banner (`HeroVideo.jsx`)  
- Featured rooms (`HomeBooking.jsx`)  
- Hotel showcase (`HotelShowCase.jsx`)  
- CTA section (`BookRoomCta.jsx`)  

### **2. About Us (`/about`)**
- Info about BookNest (vision, mission).

### **3. Contact Us (`/contact`)**
- Contact form with company details.

### **4. Rooms (`/rooms`)**
- Rooms listing with `FilterPanel.jsx`.

### **5. Room Detail (`/rooms/:id`)**
- Single room view with details and booking option.

### **6. Booking & Status**
- **Booked Rooms:** Confirmed bookings.
- **Review Booking:** Final booking confirmation.
- **Success:** Successful booking.
- **Failed:** Payment/booking error.

### **7. Authentication**
- **Login (`/login`)**
- **Register (`/register`)**
- **Reset Password (`/reset-password`)**

### **8. Profile**
- User profile (`MyProfile.jsx`) & booking history.

---

## 🧩 Components  
- **Header.jsx:** Navigation bar.  
- **Footer.jsx:** Footer with copyright.  
- **ScrollToTop.jsx:** Scroll resets on route change.  
- **BookRoomPopUp.jsx:** Booking confirmation popup.  
- **FilterPanel.jsx:** Filters for rooms.

---

## ⚙️ Scripts  

- **Start Dev Server:**  
```bash
npm run dev
```

- **Build for Production:**  
```bash
npm run build
```

- **Preview Build:**  
```bash
npm run preview
```

- **Lint Code:**  
```bash
npm run lint
```

---

## 🔧 Features  
✅ Room listing & filters  
✅ Room detail view  
✅ Booking system with success/failure  
✅ Authentication & profile  
✅ Responsive Tailwind UI  
✅ Framer Motion animations  

---

## 🔮 Future Enhancements  
- Payment Gateway (Stripe/Razorpay)  
- Admin Dashboard  
- Reviews & Ratings  
- Multi-language support  
