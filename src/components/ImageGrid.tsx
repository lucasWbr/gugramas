"use client";

import { useState } from "react";
import Image from "next/image";
import Throbber from "./Throbber";

interface ImageGridProps {
  imagens: string[];
  titulo: string;
}

export default function ImageGrid({ imagens, titulo }: ImageGridProps) {
  const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set(imagens.map((_, index) => index)));

  // Verifica se a imagem é HEIC
  const isHEIC = (src: string): boolean => {
    return src.toLowerCase().endsWith(".heic") || src.toLowerCase().includes(".heic");
  };

  // Converte caminho HEIC para usar a API de conversão
  const getConvertedHEICPath = (src: string): string => {
    if (isHEIC(src)) {
      return `/api/convert-heic?path=${encodeURIComponent(src)}`;
    }
    return src;
  };

  const handleImageLoad = (index: number) => {
    setLoadingImages((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  };

  const handleImageError = (index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoadingImages((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
    const target = e.target as HTMLImageElement;
    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23A6DF65' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23002210' font-size='20'%3EImagem%3C/text%3E%3C/svg%3E";
  };

  const isSingleImage = imagens.length === 1;
  const objectFitClass = isSingleImage ? "object-cover" : "object-contain";

  return (
    <div className={`grid ${isSingleImage ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-6 mb-8 max-w-5xl mx-auto`}>
      {imagens.map((imagem, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden relative w-full aspect-video bg-[#7DB84A]"
        >
          {loadingImages.has(index) && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <Throbber />
            </div>
          )}
          {isHEIC(imagem) ? (
            <img
              src={getConvertedHEICPath(imagem)}
              alt={`${titulo} - Imagem ${index + 1}`}
              className={`absolute inset-0 w-full h-full ${objectFitClass} ${loadingImages.has(index) ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
              onLoad={() => handleImageLoad(index)}
              onError={(e) => handleImageError(index, e)}
            />
          ) : (
            <Image
              src={imagem}
              alt={`${titulo} - Imagem ${index + 1}`}
              fill
              className={`${objectFitClass} ${loadingImages.has(index) ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
              onLoad={() => handleImageLoad(index)}
              onError={(e) => handleImageError(index, e)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

