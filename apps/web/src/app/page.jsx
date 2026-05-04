import {
  CheckCircle,
  Zap,
  MapPin,
  Droplet,
  Lightbulb,
  Paintbrush,
  Grid3x3,
  Hammer,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  const services = [
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Leaks, installations, repairs",
    },
    {
      icon: Lightbulb,
      title: "Electrical",
      description: "Wiring, fixtures, repairs",
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Interior and exterior painting",
    },
    {
      icon: Grid3x3,
      title: "Tiling",
      description: "Floor and wall tiling",
    },
    {
      icon: Hammer,
      title: "Masonry",
      description: "Brickwork, concrete, repairs",
    },
    {
      icon: Wrench,
      title: "Carpentry",
      description: "Furniture, doors, custom work",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f4c81] to-[#1e3a8a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Trusted Local Workers — Fast
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Plumbing, Electrical, Painting, Tiling & More Across Jamaica
            </p>
            <a
              href="/request"
              className="inline-block bg-[#f97316] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ea580c] transition-colors shadow-lg"
            >
              Request a Worker
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-[#f97316] mb-3" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Verified Skilled Workers
              </h3>
              <p className="text-gray-600 text-sm">
                All workers are vetted and experienced
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 text-[#f97316] mb-3" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Fast Response
              </h3>
              <p className="text-gray-600 text-sm">
                Get matched with workers quickly
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-[#f97316] mb-3" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Jamaica-Based Services
              </h3>
              <p className="text-gray-600 text-sm">
                Local workers serving all parishes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional skilled workers for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-block text-[#0f4c81] font-semibold hover:text-[#f97316] transition-colors"
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting help is simple and fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f97316] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Tell Us What You Need
              </h3>
              <p className="text-gray-600 text-sm">
                Fill out a quick form with your job details
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f97316] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                We Match You with a Skilled Worker
              </h3>
              <p className="text-gray-600 text-sm">
                We connect you with the right professional
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f97316] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                The Job Gets Done
              </h3>
              <p className="text-gray-600 text-sm">
                Quality work from trusted local workers
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/request"
              className="inline-block bg-[#f97316] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ea580c] transition-colors shadow-lg"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f4c81] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are You a Skilled Worker?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join BuildConnect Jamaica and get more job opportunities
          </p>
          <a
            href="/join"
            className="inline-block bg-white text-[#0f4c81] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Join as a Worker
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
