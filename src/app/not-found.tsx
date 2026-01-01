import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-green overflow-x-hidden">
      <Header />
      <main className="bg-light-green">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
          <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
            {/* Número 404 */}
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-dark-green-text font-albert-sans mb-6">
              404
            </h1>

            {/* Mensagem */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-green-text font-albert-sans mb-4">
              Página não encontrada
            </h2>

            <p className="text-lg md:text-xl text-dark-green-text font-albert-sans mb-8 max-w-2xl">
              Desculpe, a página que você está procurando não existe ou foi
              movida. Vamos te ajudar a voltar ao caminho certo!
            </p>

            {/* Botão de retorno */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-dark-green text-light-green px-8 py-4 rounded-2xl hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl font-albert-sans font-semibold text-lg"
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
                className="shrink-0"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Voltar para a página inicial
            </Link>
          </div>
        </div>

        {/* PageEnd */}
        <div className="w-screen relative left-1/2 -ml-[50vw]">
          <Image
            src={pageEndIcon}
            alt="Page end decoration"
            width={1440}
            height={218}
            className="w-full h-auto"
            style={{ filter: "brightness(0) saturate(100%) invert(1)" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

