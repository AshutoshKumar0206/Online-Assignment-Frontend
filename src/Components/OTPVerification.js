import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post("http://localhost:8000/user/verifyotp", { email: state.email, otp });
      if (response.status === 200) {
        console.log("OTP Verified!");
        alert("OTP verified. Pending admin approval.");
        navigate("/");
      }
    } catch (err) {
      setError("Invalid OTP. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
        {error && (
          <div className="bg-red-600 text-white text-center py-2 px-4 mb-4 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleOTPSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 rounded-md text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md font-bold transition"
          >
            Submit OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
