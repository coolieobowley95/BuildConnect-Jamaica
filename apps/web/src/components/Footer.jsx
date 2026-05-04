import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Wrench,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f4c81] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-[#f97316]" />
              <span className="font-bold text-lg">
                BuildConnect <span className="text-[#f97316]">Jamaica</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting Jamaican homeowners and businesses with trusted skilled
              workers across the island.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="/request"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Request a Worker
              </a>
              <a
                href="/join"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Join as Worker
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/1876XXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+1876XXXXXXX"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(876) XXX-XXXX</span>
              </a>
              <a
                href="mailto:info@buildconnectja.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@buildconnectja.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-gray-300 text-sm">
          <p>&copy; 2026 BuildConnect Jamaica. All rights reserved.</p>
          <p className="mt-2">
            Business Hours: Monday - Saturday, 7:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </footer>
  );
}
