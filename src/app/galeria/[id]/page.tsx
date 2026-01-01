"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ImageGrid from "@/components/ImageGrid";
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

export default function GaleriaItemPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const item = useMemo(() => {
    if (!id) return undefined;
    const itemId = parseInt(id);
    return (galeriaData as GaleriaItem[]).find(
      (item) => item.id === itemId
    );
  }, [id]);
  
  const isLoading = id === undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-green overflow-x-hidden">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <p className="text-light-green text-2xl">Carregando...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-dark-green overflow-x-hidden">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <p className="text-light-green text-2xl">Item não encontrado</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-green overflow-x-hidden">
      <Header />
      <main className="bg-light-green">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-dark-green-text hover:opacity-80 transition-opacity font-albert-sans font-semibold mb-8"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar para Galeria
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-green-text font-albert-sans mb-8">
            {item.titulo}
          </h1>

          {item.temAntesDepois && item.imagemAntes && item.imagemDepois ? (
            <div className="mb-8 space-y-6">
              {/* Slider principal com primeira imagem antes/depois */}
              <div className="rounded-2xl overflow-hidden relative w-full max-w-4xl mx-auto aspect-video">
                <BeforeAfterSlider
                  beforeImage={item.imagemAntes}
                  afterImage={item.imagemDepois}
                  beforeLabel="Antes"
                  afterLabel="Depois"
                  className="rounded-2xl"
                />
              </div>
              
              {/* Sliders adicionais se houver múltiplas imagens antes/depois */}
              {item.imagensAntes && item.imagensDepois && item.imagensAntes.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {item.imagensAntes.slice(1).map((imagemAntes, index) => {
                    const imagemDepois = item.imagensDepois?.[index + 1];
                    if (!imagemDepois) return null;
                    
                    return (
                      <div
                        key={index}
                        className="rounded-2xl overflow-hidden relative w-full aspect-video"
                      >
                        <BeforeAfterSlider
                          beforeImage={imagemAntes}
                          afterImage={imagemDepois}
                          beforeLabel="Antes"
                          afterLabel="Depois"
                          className="rounded-2xl"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <ImageGrid imagens={item.imagens} titulo={item.titulo} />
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
      <div className="mt-8 relative">
        <Footer />
      </div>
    </div>
  );
}

