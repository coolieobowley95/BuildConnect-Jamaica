"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wrench } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Wrench className="w-6 h-6 text-[#0f4c81] group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg text-[#0f4c81]">
              BuildConnect <span className="text-[#f97316]">Jamaica</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/services"
              className="text-gray-700 hover:text-[#0f4c81] transition-colors"
            >
              Services
            </a>
            <a
              href="/join"
              className="text-gray-700 hover:text-[#0f4c81] transition-colors"
            >
              Join as Worker
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#0f4c81] transition-colors"
            >
              Contact
            </a>
            <a
              href="/request"
              className="bg-[#f97316] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors shadow-sm"
            >
              Request a Worker
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="/services"
                className="text-gray-700 hover:text-[#0f4c81] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/join"
                className="text-gray-700 hover:text-[#0f4c81] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join as Worker
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-[#0f4c81] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/request"
                className="bg-[#f97316] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors text-center shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a Worker
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
