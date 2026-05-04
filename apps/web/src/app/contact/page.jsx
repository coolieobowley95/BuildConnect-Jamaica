import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0f4c81] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with BuildConnect Jamaica — we're here to help
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/1876XXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Chat with us instantly
                    </p>
                    <p className="text-[#0f4c81] font-medium mt-1">
                      Click to message
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+1876XXXXXXX"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#0f4c81] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                    <Phone className="w-6 h-6 text-[#0f4c81]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">Call us directly</p>
                    <p className="text-[#0f4c81] font-medium mt-1">
                      (876) XXX-XXXX
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@buildconnectja.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#0f4c81] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                    <Mail className="w-6 h-6 text-[#0f4c81]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">Send us a message</p>
                    <p className="text-[#0f4c81] font-medium mt-1">
                      info@buildconnectja.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Info */}
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#f97316]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Business Hours
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">
                      7:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">
                      8:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#f97316]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Service Area
                  </h2>
                </div>
                <p className="text-gray-600">
                  We connect skilled workers with customers across all 14
                  parishes in Jamaica, from Kingston to Montego Bay and
                  everywhere in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Request a skilled worker today and get your job done right
          </p>
          <a
            href="/request"
            className="inline-block bg-[#f97316] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ea580c] transition-colors shadow-lg"
          >
            Request a Worker Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
