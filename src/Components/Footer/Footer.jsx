import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-10 mt-3">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
        {/* Logo / About Section */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-4">MegaMart</h2>
          <p className="text-primary text-sm">
            Discover the best products at unbeatable prices. Shop electronics,
            fashion, and more with fast delivery and great service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-secondary font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-primary text-sm pb-4">
            <li>
              <a href="/" className="hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-secondary">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-secondary">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-secondary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-secondary text-lg font-bold mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-primary text-sm">
            <li>
              <a href="/faq" className="hover:text-secondary">
                FAQs
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-secondary">
                Returns
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-secondary">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-secondary">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-secondary font-bold mb-3">Contact Us</h3>
          <p className="text-primary text-sm mb-2">
            Email: support@yourstore.com
          </p>
          <p className="text-primary text-sm mb-4">Phone: +92 123 456 789</p>

          <div className="flex space-x-4 pb-5">
            <a href="#" className="text-secondary hover:text-tertiary">
              🔵
            </a>
            <a href="#" className="text-secondary hover:text-tertiary">
              🐦
            </a>
            <a href="#" className="text-secondary hover:text-tertiary">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-primary text-sm py-4">
        © {new Date().getFullYear()} MegaMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
