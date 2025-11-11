"use client";

import { Leaf, Sun, Heart, Waves } from "lucide-react";

export default function PorqueEscolher() {
  const features = [
    {
      icon: <Waves className="h-6 w-6 text-white" />,
      title: "Praias Paradisíacas",
      description:
        "Águas cristalinas e areias brancas em um dos destinos mais bonitos da Bahia",
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Natureza Exuberante",
      description:
        "Coqueirais, falésias coloridas e Mata Atlântica preservada",
    },
    {
      icon: <Sun className="h-6 w-6 text-white" />,
      title: "Clima Perfeito",
      description: "Sol o ano todo com temperatura média de 26°C",
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Charme & Conforto",
      description:
        "Infraestrutura completa mantendo o charme de vila praiana",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Por que escolher Arraial d'Ajuda?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-4 hover:shadow-xl transition-all"
            >
              <div className="bg-[#8B1C1C] p-3 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
