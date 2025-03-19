"use client";
import React from "react";
import Navbar from "../../components/layout/navbar.jsx";
import ExpertSection from "../../components/expertsection/expertsection.jsx";
import Footer from "../../components/layout/footer.jsx";

export default function Home() {
  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-20 py-20 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Elevate Your Business with <span className="text-orange-500">Expert Consultancy</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          We provide tailored guidance to help your business grow, optimize strategies, and achieve sustainable success.
        </p>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
          Book a Consultation
        </button>
      </section>

      {/* Expert Categories Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Our Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="p-6 bg-red-100 text-red-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Medical Consultancy</h3>
            <p className="mt-2 text-gray-700">Expert medical guidance for healthcare professionals and institutions.</p>
          </div>

          <div className="p-6 bg-blue-100 text-blue-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Educational Consultancy</h3>
            <p className="mt-2 text-gray-700">Guidance for students, schools, and educators to enhance learning outcomes.</p>
          </div>

          <div className="p-6 bg-green-100 text-green-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Career Guidance</h3>
            <p className="mt-2 text-gray-700">Helping individuals navigate career choices and achieve their professional goals.</p>
          </div>

          <div className="p-6 bg-purple-100 text-purple-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Financial Advisory</h3>
            <p className="mt-2 text-gray-700">Expert insights on investment, wealth management, and financial planning.</p>
          </div>

          <div className="p-6 bg-yellow-100 text-yellow-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Legal Consultancy</h3>
            <p className="mt-2 text-gray-700">Legal advice for businesses, individuals, and organizations.</p>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <Footer />
    </div>
  );
}
