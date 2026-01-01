"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import grassIcon from "@/assets/images/icons/grass.svg";
import leafIcon from "@/assets/images/icons/leaf.svg";
import GaleriaCard from "@/components/GaleriaCard";
import galeriaData from "@/data/galeria.json";

interface GaleriaItem {
  id: number;
  titulo: string;
  tipoDeGrama: string;
  temAntesDepois?: boolean;
  imagemAntes?: string;
  imagemDepois?: string;
  imagensAntes?: string[];
  imagensDepois?: string[];
  imagens: string[];
}

function GaleriaContent() {
  const searchParams = useSearchParams();
  const tipoInicial = searchParams.get("tipo") || "todos";
  const [filtroTipo, setFiltroTipo] = useState<string>(tipoInicial);

  const itensFiltrados = useMemo(() => {
    if (filtroTipo === "todos") {
      return galeriaData as GaleriaItem[];
    }
    return (galeriaData as GaleriaItem[]).filter(
      (item) => item.tipoDeGrama === filtroTipo
    );
  }, [filtroTipo]);

  return (
    <div className="min-h-screen bg-dark-green overflow-x-hidden">
      <Header />
      <main className="bg-light-green">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-green-text font-albert-sans mb-8 text-center">
            Galeria
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFiltroTipo("todos")}
              className={`px-6 py-3 rounded-full font-albert-sans font-bold transition-all cursor-pointer ${
                filtroTipo === "todos"
                  ? "bg-[#002210] text-white"
                  : "bg-white text-[#002210] hover:bg-gray-100"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFiltroTipo("sao-carlos")}
              className={`px-6 py-3 rounded-full font-albert-sans font-bold transition-all flex items-center gap-2 cursor-pointer ${
                filtroTipo === "sao-carlos"
                  ? "bg-[#002210] text-white"
                  : "bg-white text-[#002210] hover:bg-gray-100"
              }`}
            >
              <Image
                src={leafIcon}
                alt="São Carlos"
                width={20}
                height={20}
                className={`w-5 h-5 ${
                  filtroTipo === "sao-carlos" ? "brightness-0 invert" : ""
                }`}
              />
              São Carlos
            </button>
            <button
              onClick={() => setFiltroTipo("esmeralda")}
              className={`px-6 py-3 rounded-full font-albert-sans font-bold transition-all flex items-center gap-2 cursor-pointer ${
                filtroTipo === "esmeralda"
                  ? "bg-[#002210] text-white"
                  : "bg-white text-[#002210] hover:bg-gray-100"
              }`}
            >
              <Image
                src={grassIcon}
                alt="Esmeralda"
                width={20}
                height={20}
                className={`w-5 h-5 ${
                  filtroTipo === "esmeralda" ? "brightness-0 invert" : ""
                }`}
              />
              Esmeralda
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itensFiltrados.map((item) => (
              <GaleriaCard key={item.id} item={item} />
            ))}
          </div>

          {itensFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-dark-green-text font-albert-sans">
                Nenhum trabalho encontrado para este filtro.
              </p>
            </div>
          )}
        </div>

        <div className="w-screen relative left-1/2 -ml-[50vw]">
          <Image
            src={pageEndIcon}
            alt="Page end decoration"
            width={1440}
            height={218}
            className="w-full h-auto"
          />
        </div>
      </main>
      <div className="relative" style={{ marginTop: "-50px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default function GaleriaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark-green overflow-x-hidden">
        <Header />
        <main className="bg-light-green flex items-center justify-center min-h-[60vh]">
          <p className="text-light-green text-2xl">Carregando...</p>
        </main>
        <Footer />
      </div>
    }>
      <GaleriaContent />
    </Suspense>
  );
}
