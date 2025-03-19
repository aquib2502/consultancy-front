import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="mt-3 text-sm text-gray-200">
              We are a leading consultancy firm specializing in business strategy, career guidance, and financial solutions. Our team of experts provides top-tier advice to help individuals and businesses achieve success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="text-gray-200 hover:text-white transition">Home</a></li>
              <li><a href="/services" className="text-gray-200 hover:text-white transition">Services</a></li>
              <li><a href="/about" className="text-gray-200 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="mt-3 text-sm text-gray-200">123 Business Avenue, New York, NY</p>
            <p className="mt-1 text-sm text-gray-200">Phone: +1 (234) 567-890</p>
            <p className="mt-1 text-sm text-gray-200">Email: contact@consultancy.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-orange-400 mt-10 pt-6 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Consultancy Firm. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
