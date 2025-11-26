"use client";
import PqEscolher from "@/components/pqEscolher";
import ReservaSection from "@/components/ReservaSection";
import FooterInfo from "@/components/FooterInfo";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Users,
  BedDouble,
  Bath,
  Waves,
  Sun,
  TreePalm,
  Heart,
} from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Casa em Condomínio",
    location: "Praia da Mucugê",
    dispo: "Consulte",
    bedrooms: 4,
    bathrooms: 3,
    guests: 10,
    image: "/images/casa1.jpg",
  },
  {
    id: 2,
    name: "Apartamento Vista Mar",
    location: "300m da Praia",
    dispo: "Consulte",
    bedrooms: 2,
    bathrooms: 3,
    guests: 8,
    image: "/images/casa2.jpg",
  },
  {
    id: 3,
    name: "Casa Tropical",
    location: "Proximo a Pitinga",
    dispo: "Consulte",
    bedrooms: 4,
    bathrooms: 2,
    guests: 12,
    image: "/images/casa3.jpg",
  },
  {
    id: 4,
    name: "Casa Tropical",
    location: "10 min do Centro",
    dispo: "Consulte",
    bedrooms: 2,
    bathrooms: 2,
    guests: 6,
    image: "/images/casa4.jpg",
  },
  {
    id: 5,
    name: "Casa em Condomínio",
    location: "Proximo a Pitinga",
    dispo: "Consulte",
    bedrooms: 4,
    bathrooms: 4,
    guests: 12,
    image: "/images/casa5.jpg",
  },
  {
    id: 6,
    name: "Casa Tropical",
    location: "Estrada da Balsa",
    dispo: "Consulte",
    bedrooms: 6,
    bathrooms: 6,
    guests: 12,
    image: "/images/casa6.jpg",
  },
];

const reasons = [
  {
    id: 1,
    icon: <Waves size={28} />,
    title: "Praias Paradisíacas",
    description:
      "Águas cristalinas e areias brancas em um dos destinos mais bonitos da Bahia",
  },
  {
    id: 2,
    icon: <TreePalm size={28} />,
    title: "Natureza Exuberante",
    description:
      "Coqueirais, falésias coloridas e Mata Atlântica preservada",
  },
  {
    id: 3,
    icon: <Sun size={28} />,
    title: "Clima Perfeito",
    description: "Sol o ano todo com temperatura média de 26°C",
  },
  {
    id: 4,
    icon: <Heart size={28} />,
    title: "Charme & Conforto",
    description:
      "Infraestrutura completa mantendo o charme de vila praiana",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/arraial.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-2 text-gray-200 mb-3">
              <MapPin size={18} />
              <span className="text-lg">Arraial d'Ajuda, Bahia</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              Seu Paraíso <span className="text-red-700">de Temporada</span>
            </h1>

            <p className="text-gray-200 mt-5 text-lg leading-relaxed">
              Descubra imóveis exclusivos na Costa do Descobrimento. <br />
              Conforto, elegância e a natureza da Bahia ao seu alcance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a
                href="#propriedades"
                className="bg-red-700 hover:bg-red-800 text-gray-300 font-semibold py-3 px-6 rounded-lg transition"
              >
                Ver Propriedades
              </a>

              <a
                href="https://wa.me/557399699318?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Phone size={18} /> Entre em Contato
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE IMÓVEIS */}
      <section id="propriedades" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-red-700 font-semibold uppercase tracking-wide">
            Propriedades em Destaque
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Imóveis Exclusivos
          </h2>
          <p className="text-gray-600 mt-3">
            Selecionamos as melhores opções para suas férias dos sonhos em
            Arraial d'Ajuda
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {properties.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 right-3 bg-red-700 text-white text-sm font-semibold py-1 px-3 rounded-full">
                  {p.dispo}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <MapPin size={16} />
                  <span>{p.location}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {p.name}
                </h3>

                <div className="flex items-center gap-4 text-gray-600 text-sm mb-5">
                  <div className="flex items-center gap-1">
                    <BedDouble size={16} /> {p.bedrooms} quartos
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} /> {p.bathrooms} banheiros
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} /> {p.guests} hóspedes
                  </div>
                </div>

                <a
                  href={`https://wa.me/557399699318?text=Olá!%20Tenho%20interesse%20na%20${encodeURIComponent(
                    p.name
                  )}.%20Poderia%20me%20dar%20mais%20detalhes?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-900 hover:bg-blue-950 text-white text-center py-2.5 rounded-lg font-semibold transition"
                >
                  Ver Detalhes
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO - POR QUE ESCOLHER */}
      <PqEscolher />

      {/* SEÇÃO - RESERVA */}
      <ReservaSection />

      {/* SEÇÃO - FOOTER */}
      <FooterInfo />

    </main>
  );
}
