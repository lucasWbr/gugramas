"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import grassIcon from "@/assets/images/icons/grass.svg";
import leafIcon from "@/assets/images/icons/leaf.svg";
import homeIcon from "@/assets/images/icons/home.svg";
import roadIcon from "@/assets/images/icons/icons8-highway-64.png";
import industryIcon from "@/assets/images/icons/icons8-factory-50.png";
import GaleriaCard from "@/components/GaleriaCard";
import galeriaData from "@/data/galeria.json";

interface GaleriaItem {
  id: number;
  titulo: string;
  tipoDeGrama: string;
  tipoObra?: string;
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
  const tipoObraInicial = searchParams.get("tipoObra") || "todos";
  const [filtroTipo, setFiltroTipo] = useState<string>(tipoInicial);
  const [filtroTipoObra, setFiltroTipoObra] = useState<string>(tipoObraInicial);

  const itensFiltrados = useMemo(() => {
    let itens = galeriaData as GaleriaItem[];
    
    // Filtro por tipo de grama
    if (filtroTipo !== "todos") {
      itens = itens.filter((item) => item.tipoDeGrama === filtroTipo);
    }
    
    // Filtro por tipo de obra
    if (filtroTipoObra !== "todos") {
      itens = itens.filter((item) => item.tipoObra === filtroTipoObra);
    }
    
    return itens;
  }, [filtroTipo, filtroTipoObra]);

  return (
    <div className="min-h-screen bg-dark-green overflow-x-hidden">
      <Header />
      <main className="bg-light-green">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-green-text font-albert-sans mb-8 text-center">
            Galeria
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark-green-text mb-6 text-center font-albert-sans">
              Filtros
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Filtro Todos */}
              <button
                onClick={() => {
                  setFiltroTipo("todos");
                  setFiltroTipoObra("todos");
                }}
                className={`px-6 py-3 rounded-full font-albert-sans font-bold transition-all cursor-pointer ${
                  filtroTipo === "todos" && filtroTipoObra === "todos"
                    ? "bg-[#002210] text-white"
                    : "bg-white text-[#002210] hover:bg-gray-100"
                }`}
              >
                Todos
              </button>

              {/* Filtros por Tipo de Grama */}
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

              {/* Filtros por Tipo de Obra */}
              <button
                onClick={() => setFiltroTipoObra("residencial")}
                className={`px-6 py-3 rounded-full font-albert-sans font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  filtroTipoObra === "residencial"
                    ? "bg-[#002210] text-white"
                    : "bg-white text-[#002210] hover:bg-gray-100"
                }`}
              >
                <Image
                  src={homeIcon}
                  alt="Residencial"
                  width={20}
                  height={20}
                  className={`w-5 h-5 ${
                    filtroTipoObra === "residencial" ? "brightness-0 invert" : ""
                  }`}
                />
                Residencial
              </button>
              <button
                onClick={() => setFiltroTipoObra("rodovia")}
                className={`px-6 py-3 rounded-full font-albert-sans font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  filtroTipoObra === "rodovia"
                    ? "bg-[#002210] text-white"
                    : "bg-white text-[#002210] hover:bg-gray-100"
                }`}
              >
                <Image
                  src={roadIcon}
                  alt="Rodovia"
                  width={20}
                  height={20}
                  className={`w-5 h-5 ${
                    filtroTipoObra === "rodovia" ? "brightness-0 invert" : ""
                  }`}
                />
                Rodovia
              </button>
              <button
                onClick={() => setFiltroTipoObra("industria")}
                className={`px-6 py-3 rounded-full font-albert-sans font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  filtroTipoObra === "industria"
                    ? "bg-[#002210] text-white"
                    : "bg-white text-[#002210] hover:bg-gray-100"
                }`}
              >
                <Image
                  src={industryIcon}
                  alt="Indústria"
                  width={20}
                  height={20}
                  className={`w-5 h-5 ${
                    filtroTipoObra === "industria" ? "brightness-0 invert" : ""
                  }`}
                />
                Indústria
              </button>
            </div>
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
