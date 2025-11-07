import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, CheckCircle, Users, Truck, Code } from "lucide-react";

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-5 shadow bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Tech Bridge</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#team" className="hover:text-blue-600">Team</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
      </header>

      {/* Hero */}
      <section id="home" className="text-center py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <motion.h2 initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl font-bold mb-4">
          Empowering Innovation Through Technology & Logistics
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Tech Bridge connects businesses to next-generation IT solutions, logistics operations, and workforce management — helping companies grow efficiently across the globe.
        </p>
        <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-2xl hover:bg-blue-700">Explore Services</button>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-4">About Tech Bridge</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded by a dynamic team of four leaders — each an expert in their field — Tech Bridge integrates IT software development, logistics procurement, HR management, and marketing into one cohesive powerhouse. Our mission is to simplify business operations and empower global expansion.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <img src="/teamwork.svg" alt="Teamwork" className="mx-auto max-w-xs" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 px-8 text-center">
        <h3 className="text-3xl font-semibold mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Code className="mx-auto mb-4 text-blue-600" />
            <h4 className="font-semibold text-lg mb-2">IT Software Development</h4>
            <p className="text-gray-600 text-sm">Custom web, mobile, cloud systems, and enterprise solutions designed for scalability and performance.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Truck className="mx-auto mb-4 text-blue-600" />
            <h4 className="font-semibold text-lg mb-2">Logistics & Procurement</h4>
            <p className="text-gray-600 text-sm">End-to-end logistics management, supply chain optimization, and vendor coordination.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Users className="mx-auto mb-4 text-blue-600" />
            <h4 className="font-semibold text-lg mb-2">HR & Operations</h4>
            <p className="text-gray-600 text-sm">Recruitment, payroll, and structure setup to streamline workforce management.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white text-center px-8">
        <h3 className="text-3xl font-semibold mb-10">Our Leadership Team</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {name: 'WaXiF Mujahid', role: 'Head of IT & Technology'},
            {name: 'Romana', role: 'Head of HR & Operations'},
            {name: 'Zain', role: 'Head of Logistics & Procurement'},
            {name: 'Rehman', role: 'Head of Marketing & Business Development'},
          ].map((m,i)=>(
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <img src="/profile-placeholder.png" alt={m.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500" />
              <h4 className="font-semibold text-lg">{m.name}</h4>
              <p className="text-gray-600 text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100 text-center px-8">
        <h3 className="text-3xl font-semibold mb-8">Get In Touch</h3>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
          Whether you’re a startup or an established enterprise, we’d love to discuss how Tech Bridge can help accelerate your business.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex items-center gap-2"><Mail className="text-blue-600"/> info@techbridge.co.uk</div>
          <div className="flex items-center gap-2"><Phone className="text-blue-600"/> +44 20 1234 5678</div>
          <div className="flex items-center gap-2"><Globe className="text-blue-600"/> www.techbridge.co.uk</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Tech Bridge. All rights reserved.</p>
      </footer>
    </div>
  );
}
