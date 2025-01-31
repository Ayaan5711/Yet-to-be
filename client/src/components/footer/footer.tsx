"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import type React from "react"; // Added import for React

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <footer className="footer-one">
      <div className="footer-one__top">
        <div className="container">
          <div className="row">
            {/* Navigation Links */}
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="footer-one__widget footer-one__link-widget">
                <h3 className="footer-one__widget-title">Navigation</h3>
                <ul className="footer-one__links-list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/departments">Departments</Link>
                  </li>
                  <li>
                    <Link href="/doctors">Doctors</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="footer-one__widget footer-one__link-widget">
                <h3 className="footer-one__widget-title">Quick Links</h3>
                <ul className="footer-one__links-list">
                  <li>
                    <Link href="/appointment">Get Appointment</Link>
                  </li>
                  <li>
                    <Link href="/doctors">Our Doctor Team</Link>
                  </li>
                  <li>
                    <Link href="/services">Departments Service</Link>
                  </li>
                  <li>
                    <Link href="/about">About Hospital</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/reports">Get Reports</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Social Media and Newsletter */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-one__widget footer-one__link-widget">
                <h3 className="footer-one__widget-title">Follow Us</h3>
                <div className="footer-one__social">
                  <a href="#" aria-label="Facebook">
                    <Facebook />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Instagram />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <Youtube />
                  </a>
                </div>
                <form onSubmit={handleSubmit} className="footer-one__subscribe">
                  <input
                    className="footer-one__subscribe-field"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    className="footer-one__subscribe-submit"
                    type="submit"
                  >
                    Subscribe Now <span className="ml-2">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-one__bottom">
        <div className="container">
          <p className="footer-one__copy-text">
            &copy; {new Date().getFullYear()} Medical Website | All Rights
            Reserved
          </p>
          <ul className="footer-one__bottom-links">
            <li className="footer-one__bottom-links-item">
              <Link href="/privacy">Privacy and Policy</Link>
            </li>
            <li className="footer-one__bottom-links-item">
              <Link href="/terms">Terms and Services</Link>
            </li>
            <li className="footer-one__bottom-links-item">
              <Link href="/developers">Developers</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
