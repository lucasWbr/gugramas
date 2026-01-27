"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData;
  afterImage: string | StaticImageData;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  forceCover?: boolean; // Força object-cover mesmo quando tem zoom ou imagens do mesmo tamanho
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className = "",
  forceCover = false,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imageSizes, setImageSizes] = useState<{
    before: { width: number; height: number } | null;
    after: { width: number; height: number } | null;
  }>({ before: null, after: null });
  const [imageErrors, setImageErrors] = useState<{
    before: boolean;
    after: boolean;
  }>({ before: false, after: false });
  const containerRef = useRef<HTMLDivElement>(null);

  // Verifica se as imagens são do mesmo tamanho
  const areImagesSameSize = imageSizes.before && imageSizes.after &&
    imageSizes.before.width === imageSizes.after.width &&
    imageSizes.before.height === imageSizes.after.height;

  // Calcula o scale para aumentar imagens pequenas (máximo 1.5x)
  // Aplica zoom se qualquer uma das imagens for pequena
  const getImageScale = () => {
    if (!imageSizes.before || !imageSizes.after) return 1;
    
    // Pega a menor dimensão de cada imagem
    const minBefore = Math.min(imageSizes.before.width, imageSizes.before.height);
    const minAfter = Math.min(imageSizes.after.width, imageSizes.after.height);
    
    // Usa a menor dimensão entre as duas para calcular o zoom
    const minDimension = Math.min(minBefore, minAfter);
    
    // Se a menor dimensão for menor que 800px, aplica zoom
    if (minDimension < 800) {
      // Calcula scale baseado no tamanho (quanto menor, mais zoom)
      // Mínimo: 1.2x, Máximo: 1.5x
      // Usa 800px como referência para melhor padronização
      const scale = Math.min(1.5, Math.max(1.2, 800 / minDimension));
      return scale;
    }
    
    return 1;
  };

  const imageScale = getImageScale();
  
  // Quando tem zoom, usa object-contain para não cortar (a menos que forceCover seja true)
  const shouldUseContain = !forceCover && (imageScale > 1 || areImagesSameSize);

  // Handler para quando a imagem carrega
  const handleImageLoad = useCallback((type: "before" | "after", e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    setImageSizes((prev) => ({
      ...prev,
      [type]: { width: img.naturalWidth, height: img.naturalHeight },
    }));
  }, []);

  // Handler para erro de imagem
  const handleImageError = useCallback((type: "before" | "after", e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    
    // Marca como erro e mostra placeholder
    setImageErrors((prev) => ({ ...prev, [type]: true }));
    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23A6DF65' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23002210' font-size='14'%3EErro ao carregar imagem%3C/text%3E%3C/svg%3E";
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  }, [isDragging]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current || !isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp, handleTouchEnd]);

  const handleSliderButtonMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleSliderButtonTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Imagem "Depois" (fundo) */}
      <div className="absolute inset-0 bg-[#7DB84A]" style={{ userSelect: "none", pointerEvents: "none" }}>
        {imageErrors.after && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-30">
            <div className="text-center px-4">
              <p className="text-sm text-gray-600 font-albert-sans">
                Erro ao carregar imagem
              </p>
            </div>
          </div>
        )}
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className={shouldUseContain ? "object-contain" : "object-cover"}
          priority
          draggable={false}
          style={{ 
            userSelect: "none", 
            pointerEvents: "none",
            opacity: imageErrors.after ? 0 : 1,
            transform: imageScale > 1 ? `scale(${imageScale})` : "none",
            transformOrigin: "center center",
            transition: "transform 0.3s ease-in-out"
          }}
          onLoad={(e) => handleImageLoad("after", e)}
          onError={(e) => handleImageError("after", e)}
        />
      </div>

      {/* Imagem "Antes" (sobreposta com clip) */}
      <div
        className="absolute inset-0 bg-[#7DB84A]"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, userSelect: "none", pointerEvents: "none" }}
      >
        {imageErrors.before && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-30">
            <div className="text-center px-4">
              <p className="text-sm text-gray-600 font-albert-sans">
                Erro ao carregar imagem
              </p>
            </div>
          </div>
        )}
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className={shouldUseContain ? "object-contain" : "object-cover"}
          priority
          draggable={false}
          style={{ 
            userSelect: "none", 
            pointerEvents: "none",
            opacity: imageErrors.before ? 0 : 1,
            transform: imageScale > 1 ? `scale(${imageScale})` : "none",
            transformOrigin: "center center",
            transition: "transform 0.3s ease-in-out"
          }}
          onLoad={(e) => handleImageLoad("before", e)}
          onError={(e) => handleImageError("before", e)}
        />
      </div>

      {/* Linha divisória */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-10 shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Botão de arrastar - apenas este elemento é clicável */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 pointer-events-auto ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleSliderButtonMouseDown}
          onTouchStart={handleSliderButtonTouchStart}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#002210] pointer-events-none"
          >
            <path
              d="M8 5L16 12L8 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 5L8 12L16 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels - mostram apenas o label relevante quando no máximo de um lado */}
      {sliderPosition >= 100 ? (
        // Mostra apenas "Antes" quando slider está no máximo à direita (100%)
        <div className="absolute top-4 left-4 bg-[#002210] bg-opacity-75 text-white px-3 py-1 rounded-md text-sm font-albert-sans font-bold z-20">
          {beforeLabel}
        </div>
      ) : sliderPosition <= 0 ? (
        // Mostra apenas "Depois" quando slider está no máximo à esquerda (0%)
        <div className="absolute top-4 right-4 bg-[#002210] bg-opacity-75 text-white px-3 py-1 rounded-md text-sm font-albert-sans font-bold z-20">
          {afterLabel}
        </div>
      ) : (
        // Mostra ambos os labels quando no meio
        <>
          <div className="absolute top-4 left-4 bg-[#002210] bg-opacity-75 text-white px-3 py-1 rounded-md text-sm font-albert-sans font-bold z-20">
            {beforeLabel}
          </div>
          <div className="absolute top-4 right-4 bg-[#002210] bg-opacity-75 text-white px-3 py-1 rounded-md text-sm font-albert-sans font-bold z-20">
            {afterLabel}
          </div>
        </>
      )}
    </div>
  );
}

