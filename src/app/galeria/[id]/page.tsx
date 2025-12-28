"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import galeriaData from "@/data/galeria.json";

interface GaleriaItem {
  id: number;
  titulo: string;
  tipoDeGrama: string;
  imagens: string[];
}

export default function GaleriaItemPage() {
  const params = useParams();
  const id = params?.id as string;
  const [item, setItem] = useState<GaleriaItem | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const itemId = parseInt(id);
      const foundItem = (galeriaData as GaleriaItem[]).find(
        (item) => item.id === itemId
      );
      setItem(foundItem);
      setIsLoading(false);
    }
  }, [id]);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {item.imagens.map((imagem, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden relative h-64 md:h-96 w-full"
              >
                <Image
                  src={imagem}
                  alt={`${item.titulo} - Imagem ${index + 1}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23A6DF65' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23002210' font-size='20'%3EImagem%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            ))}
          </div>
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

