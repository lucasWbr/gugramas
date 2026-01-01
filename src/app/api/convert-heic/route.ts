import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import convert from "heic-convert";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const imagePath = searchParams.get("path");

    if (!imagePath) {
      return NextResponse.json(
        { error: "Caminho da imagem não fornecido" },
        { status: 400 }
      );
    }

    // Remove a barra inicial se existir e constrói o caminho completo
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
    const fullPath = join(process.cwd(), "public", cleanPath);

    // Verifica se o arquivo é HEIC
    if (!fullPath.toLowerCase().endsWith(".heic") && !fullPath.toLowerCase().endsWith(".heif")) {
      return NextResponse.json(
        { error: "Arquivo não é HEIC/HEIF" },
        { status: 400 }
      );
    }

    // Lê o arquivo HEIC
    const inputBuffer = await readFile(fullPath);

    // Converte HEIC para JPEG
    // heic-convert retorna um Buffer ou ArrayBuffer
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: "JPEG",
      quality: 0.92,
    });

    // Garante que é um Buffer
    const buffer = Buffer.isBuffer(outputBuffer) 
      ? outputBuffer 
      : Buffer.from(outputBuffer as ArrayBuffer);

    // Retorna a imagem convertida
    // NextResponse aceita Uint8Array, ArrayBuffer ou string
    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Erro ao converter HEIC:", error);
    return NextResponse.json(
      { error: "Erro ao converter imagem HEIC", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}

