import Image from "next/image";
import Link from "next/link";
import grassIcon from "@/assets/images/icons/grass.svg";
import leafIcon from "@/assets/images/icons/leaf.svg";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import gramaSaoCarlosImage from "@/assets/images/index/sao-carlos-com-site.jpg";
import gramaEsmeraldaImage from "@/assets/images/index/gramaEsmeralda.png";

export default function TypesOfGrassSection() {
  return (
    <section
      id="gramas"
      className="bg-light-green w-full p-8 md:p-12 lg:p-16 page-end-overlap relative z-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green-text shrink-0 lg:w-1/3">
            Tipos de grama
          </h2>
          <div className="flex-1 space-y-4 text-lg text-dark-green-text leading-relaxed font-albert-sans">
            <p>
              Você quer um gramado impecável? Fornecemos grama{" "}
              <span className="font-bold">São Carlos</span> e{" "}
              <span className="font-bold">Esmeralda</span> de altíssima
              qualidade, com plantio especializado e manutenção periódica para
              garantir vitalidade e durabilidade. Do preparo do solo ao corte
              final, cuidamos de tudo!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center w-full">
            <Link
              href="/gramas/sao-carlos"
              className="bg-white p-4 flex flex-col border-2 border-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-full md:w-auto max-w-sm md:max-w-none mx-auto md:mx-0"
            >
              <div className="mb-4 flex items-center justify-center h-48 w-full overflow-hidden relative">
                <Image
                  src={gramaSaoCarlosImage}
                  alt="Grama São Carlos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={leafIcon}
                  alt="São Carlos grass icon"
                  width={30}
                  height={30}
                  className="w-8 h-8 shrink-0"
                />
                <h3 className="text-2xl font-bold text-dark-green-text font-albert-sans">
                  São Carlos
                </h3>
              </div>
            </Link>

            <Link
              href="/gramas/esmeralda"
              className="bg-white p-4 flex flex-col border-2 border-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-full md:w-auto max-w-sm md:max-w-none mx-auto md:mx-0"
            >
              <div className="mb-4 flex items-center justify-center h-48 w-full overflow-hidden relative">
                <Image
                  src={gramaEsmeraldaImage}
                  alt="Grama Esmeralda"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={grassIcon}
                  alt="Esmeralda grass icon"
                  width={40}
                  height={40}
                  className="w-10 h-10 shrink-0"
                />
                <h3 className="text-2xl font-bold text-dark-green-text font-albert-sans">
                  Esmeralda
                </h3>
              </div>
            </Link>
          </div>
          <p className="text-center text-lg text-dark-green-text mt-6 font-albert-sans">
            Clique no tipo de grama e Saiba mais
          </p>
        </div>

        <div className="w-screen relative left-1/2 -ml-[50vw] mt-8">
          <Image
            src={pageEndIcon}
            alt="Page end decoration"
            width={1440}
            height={218}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
