"use client";

import { useState } from "react";
import { CheckCircle, Briefcase, MapPin, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    skill: "",
    parish: "",
    phone: "",
    years_experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const parishes = [
    "Kingston",
    "St. Andrew",
    "St. Catherine",
    "Clarendon",
    "Manchester",
    "St. Elizabeth",
    "Westmoreland",
    "Hanover",
    "St. James",
    "Trelawny",
    "St. Ann",
    "St. Mary",
    "Portland",
    "St. Thomas",
  ];

  const skills = [
    "Plumbing",
    "Electrical",
    "Painting",
    "Tiling",
    "Masonry",
    "Carpentry",
    "General Handyman",
    "Renovations",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/workers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setIsSuccess(true);
      setFormData({
        full_name: "",
        skill: "",
        parish: "",
        phone: "",
        years_experience: "",
      });
    } catch (err) {
      console.error("Error submitting application:", err);
      setError(
        "Failed to submit your application. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0f4c81] to-[#1e3a8a] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Skilled Worker? Get More Jobs
          </h1>
          <p className="text-lg text-blue-100">
            Join BuildConnect Jamaica and connect with customers across the
            island
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Join BuildConnect Jamaica?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Briefcase className="w-12 h-12 text-[#f97316] mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Flexible Work
              </h3>
              <p className="text-gray-600 text-sm">
                Choose the jobs that fit your schedule and skills
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#f97316] mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Local Jobs
              </h3>
              <p className="text-gray-600 text-sm">
                Work in your parish and nearby areas
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-[#f97316] mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                No Upfront Fees
              </h3>
              <p className="text-gray-600 text-sm">
                Join for free and start getting job opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSuccess ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Application Submitted Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining BuildConnect Jamaica.
                We'll review your application and contact you soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-[#f97316] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors"
                >
                  Submit Another Application
                </button>
                <a
                  href="/"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Worker Application Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Skill */}
                <div>
                  <label
                    htmlFor="skill"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Primary Skill *
                  </label>
                  <select
                    id="skill"
                    name="skill"
                    value={formData.skill}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select your primary skill</option>
                    {skills.map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Parish */}
                <div>
                  <label
                    htmlFor="parish"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Parish *
                  </label>
                  <select
                    id="parish"
                    name="parish"
                    value={formData.parish}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select your parish</option>
                    {parishes.map((parish) => (
                      <option key={parish} value={parish}>
                        {parish}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all"
                    placeholder="(876) XXX-XXXX"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label
                    htmlFor="years_experience"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Years of Experience *
                  </label>
                  <input
                    type="number"
                    id="years_experience"
                    name="years_experience"
                    value={formData.years_experience}
                    onChange={handleChange}
                    required
                    min="0"
                    max="50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all"
                    placeholder="Enter years of experience"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f97316] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#ea580c] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by
                  BuildConnect Jamaica regarding job opportunities.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
