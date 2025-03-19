"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "../../components/layout/navbar.jsx";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/");
    }
  }, []);

  const emailRegex = /^(?!\.)([a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,})$/;
  const mobileRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Fix: Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email: formData.email, password: formData.password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      localStorage.setItem("authToken", response.data.token);
      setMessage("Login Successful! Redirecting...");
      setError("");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.message || "Invalid email or password");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Fix: Prevent default form submission

    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    if (!mobileRegex.test(formData.mobile)) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setError("Password must have at least 6 characters, 1 uppercase letter, and 1 special character.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
        },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      setMessage("Registered Successfully! Redirecting to login...");
      setError("");

      setTimeout(() => {
        setIsLogin(true);
        setMessage("");
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", mobile: "", password: "", confirmPassword: "" });
    setError("");
    setMessage("");
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Section - Form */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md border border-orange-300">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">{isLogin ? "Sign In" : "Sign Up"}</h2>

          {message && <p className="text-green-600 text-center mb-4">{message}</p>}
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          <form onSubmit={isLogin ? handleLogin : handleRegister}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-orange-700 text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-orange-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-orange-700 text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-orange-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your Password"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-6">
                <label className="block text-orange-700 text-sm font-semibold mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-orange-500"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            )}
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-sm text-center text-orange-700 mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button type="button" onClick={toggleForm} className="text-orange-500 font-medium">
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-cover bg-center mb-2 mr-1" style={{ backgroundImage: "url('/loginImage.jpg')" }}></div>
    </div>
  );
}
