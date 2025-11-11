"use client";

import { Phone, Instagram } from "lucide-react";

export default function ReservaSection() {
  return (
    <section className="bg-[#8B1C1C] py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Reserve Agora Suas Férias dos Sonhos
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          Entre em contato conosco e garanta o melhor imóvel para sua temporada
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/557399699318?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#8B1C1C] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Phone className="h-5 w-5" />
            73 9969-9318
          </a>

          <a
            href="https://www.instagram.com/jaquelineaquinoremax"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-[#8B1C1C] transition"
          >
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
