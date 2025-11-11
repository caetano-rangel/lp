import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", //  Gera HTML estático
  images: {
    unoptimized: true, //  Necessário para exportar imagens
  },
  basePath: "/lp", //  troque pelo nome do seu repositório
  assetPrefix: "/lp/",
};

export default nextConfig;
