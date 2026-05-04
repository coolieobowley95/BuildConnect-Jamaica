import {
  Droplet,
  Lightbulb,
  Paintbrush,
  Grid3x3,
  Hammer,
  Wrench,
  Home,
  Drill,
  Ruler,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      icon: Droplet,
      title: "Plumbing",
      description:
        "Pipe repairs, leak fixes, toilet and sink installations, water heater services, drain cleaning",
    },
    {
      icon: Lightbulb,
      title: "Electrical",
      description:
        "Wiring and rewiring, light fixture installation, outlet repairs, circuit breaker services, electrical inspections",
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description:
        "Interior and exterior painting, wall preparation, color consultation, residential and commercial projects",
    },
    {
      icon: Grid3x3,
      title: "Tiling",
      description:
        "Floor tiling, wall tiling, bathroom and kitchen tiling, tile repairs and replacement",
    },
    {
      icon: Hammer,
      title: "Masonry",
      description:
        "Brickwork, concrete work, foundation repairs, retaining walls, block laying",
    },
    {
      icon: Wrench,
      title: "Carpentry",
      description:
        "Custom furniture, door and window installation, cabinet making, deck building, repairs",
    },
    {
      icon: Home,
      title: "General Repairs",
      description:
        "Home maintenance, minor repairs, handyman services, property upkeep",
    },
    {
      icon: Drill,
      title: "Renovations",
      description:
        "Kitchen and bathroom renovations, room additions, home improvements",
    },
    {
      icon: Ruler,
      title: "Flooring",
      description:
        "Hardwood installation, laminate flooring, vinyl flooring, floor repairs",
    },
    {
      icon: Sparkles,
      title: "Cleaning & Finishing",
      description: "Post-construction cleaning, finishing touches, detail work",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0f4c81] to-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Professional skilled workers ready to help with all your
            construction and repair needs across Jamaica
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Skilled Worker?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us what you need and we'll connect you with the right
            professional
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
