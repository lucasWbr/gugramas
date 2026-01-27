"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Throbber from "./Throbber";
import grassIcon from "@/assets/images/icons/grass.svg";
import leafIcon from "@/assets/images/icons/leaf.svg";

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

interface GaleriaCardProps {
  item: GaleriaItem;
}

export default function GaleriaCard({ item }: GaleriaCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Determina qual imagem mostrar no preview (apenas "depois" se tiver antes/depois)
  const previewImage = item.temAntesDepois && item.imagemDepois
    ? item.imagemDepois
    : item.imagens[0] || "/images/gallery/placeholder.png";

  const getIcon = (tipo: string) => {
    return tipo === "sao-carlos" ? leafIcon : grassIcon;
  };

  const getNomeGrama = (tipo: string) => {
    return tipo === "sao-carlos" ? "São Carlos" : "Esmeralda";
  };

  return (
    <Link
      href={`/galeria/${item.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer block"
    >
      <div className="relative h-64 w-full">
        {imageLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <Throbber />
          </div>
        )}
        <Image
          src={previewImage}
          alt={item.titulo}
          fill
          className={`object-cover ${imageLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          onLoad={() => setImageLoading(false)}
          onError={(e) => {
            setImageLoading(false);
            setImageError(true);
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23A6DF65' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23002210' font-size='20'%3EImagem%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src={getIcon(item.tipoDeGrama)}
            alt={getNomeGrama(item.tipoDeGrama)}
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm font-semibold text-[#002210] font-albert-sans">
            {getNomeGrama(item.tipoDeGrama)}
          </span>
        </div>
        <h3 className="text-lg font-bold text-dark-green-text font-albert-sans">
          {item.titulo}
        </h3>
      </div>
    </Link>
  );
}

