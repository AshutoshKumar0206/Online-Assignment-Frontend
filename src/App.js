import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import Header from "./Components/Header"; // Import Header component
import Signup from "./Components/Signup"; // Import Signup component
import Signin from "./Components/Signin"; // Import Signin component
import OTPVerification from "./Components/OTPVerification"; // Import OTPVerification component
import BlankPage from "./Components/BlankPage"; // Import BlankPage component
import AdminSignin from "./Components/AdminSignin"; // Import AdminSignin component
import AdminDashboard from "./Components/AdminDashboard"; // Import AdminDashboard
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/blank" element={<BlankPage />} />
        <Route path="/admin-signin" element={<AdminSignin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
