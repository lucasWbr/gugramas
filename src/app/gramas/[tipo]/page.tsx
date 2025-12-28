import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import grassIcon from "@/assets/images/icons/grass.svg";
import leafIcon from "@/assets/images/icons/leaf.svg";
import gramaSaoCarlosImage from "@/assets/images/index/gramaSãoCarlos.png";
import gramaEsmeraldaImage from "@/assets/images/index/gramaEsmeralda.png";

interface GrassData {
  nome: string;
  icon: StaticImageData;
  image: StaticImageData;
  caracteristicas: {
    titulo: string;
    itens: string[];
  }[];
  melhorPara: {
    titulo: string;
    itens: string[];
  };
  conclusao: string;
  callToAction: string;
}

const grassData: Record<string, GrassData> = {
  "sao-carlos": {
    nome: "São Carlos",
    icon: leafIcon,
    image: gramaSaoCarlosImage,
    caracteristicas: [
      {
        titulo: "Características principais:",
        itens: [
          "Cor: Verde médio a escuro, com folhas mais largas e robustas.",
          "Folhas: Mais grossas e resistentes, com textura mais rústica.",
          "Crescimento: Rápido e agressivo, formando um tapete denso e uniforme.",
          "Tolerância: Muito resistente ao pisoteio intenso e ao tráfego. Adapta-se bem a diferentes tipos de solo. Suporta bem o sol e a meia-sombra.",
          "Manutenção: Por crescer rápido, demanda cortes mais frequentes. É mais tolerante a solos menos férteis.",
        ],
      },
    ],
    melhorPara: {
      titulo: "Melhor para:",
      itens: [
        "Áreas de alto tráfego (jardins com crianças, áreas de lazer, campos esportivos).",
        "Locais onde a resistência e durabilidade são prioridades.",
        "Projetos que precisam de cobertura rápida do solo.",
        "Quem busca uma grama que aguenta mais uso e requer menos cuidados com o solo.",
      ],
    },
    conclusao:
      "Escolha a São Carlos se você precisa de uma grama resistente, que aguenta o uso intenso e cresce rápido. É a opção 'workhorse' para quem valoriza durabilidade e praticidade.",
    callToAction: "Faça já sua escolha e garanta um solo perfeito!",
  },
  esmeralda: {
    nome: "Esmeralda",
    icon: grassIcon,
    image: gramaEsmeraldaImage,
    caracteristicas: [
      {
        titulo: "Características principais:",
        itens: [
          "Cor: Verde vivo e brilhante (que lembra uma esmeralda).",
          "Folhas: Finas, macias e com textura delicada e ornamental.",
          "Crescimento: Mais lento e em moita, formando um tapete muito uniforme e bonito.",
          "Tolerância: Resistente a pragas e ervas daninhas. Tolera bem o frio. Suporta pisoteio moderado.",
          "Manutenção: Por crescer devagar, demanda menos cortes. Requer solo mais fértil e adubado para se desenvolver plenamente.",
        ],
      },
    ],
    melhorPara: {
      titulo: "Melhor para:",
      itens: [
        "Jardins ornamentais e residenciais onde a beleza estética é o foco.",
        "Áreas de contemplação (entrada de casa, bordas de piscina, jardim frontal).",
        "Projetos de paisagismo que exigem um visual impecável e uniforme.",
        "Quem prefere um jardim bonito com um pouco menos de frequência de corte.",
      ],
    },
    conclusao:
      "Escolha a Esmeralda se o seu objetivo principal é ter um jardim visualmente deslumbrante, macio e com aquele verde que chama a atenção. É a opção 'acabamento fino' para quem valoriza a estética.",
    callToAction: "Faça já sua escolha e garanta um solo perfeito!",
  },
};

export default async function GrassPage({
  params,
}: {
  params: Promise<{ tipo: string }>;
}) {
  const { tipo } = await params;
  const grass = grassData[tipo];

  if (!grass) {
    return (
      <div className="min-h-screen bg-dark-green overflow-x-hidden">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <p className="text-light-green text-2xl">Tipo de grama não encontrado</p>
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
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={grass.icon}
              alt={`${grass.nome} icon`}
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-green-text font-albert-sans">
              Grama {grass.nome}
            </h1>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden relative h-64 md:h-96 w-full">
            <Image
              src={grass.image}
              alt={`Grama ${grass.nome}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-dark-green-text text-lg leading-relaxed font-albert-sans mb-8">
            {grass.caracteristicas.map((caracteristica, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {caracteristica.titulo}
                </h2>
                <ul className="space-y-2 list-disc list-inside">
                  {caracteristica.itens.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {grass.melhorPara.titulo}
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                {grass.melhorPara.itens.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="text-xl md:text-2xl font-normal mt-6">
              {grass.conclusao}
            </p>

            <p className="text-2xl md:text-3xl font-bold mt-6">
              {grass.callToAction}
            </p>
            
            <div className="text-center mt-8">
              <Link
                href={`/galeria?tipo=${tipo}`}
                className="bg-[#002210] text-white px-8 py-4 rounded-full text-xl md:text-2xl font-bold hover:opacity-90 hover:shadow-2xl transition-all duration-300 font-albert-sans inline-block shadow-lg"
              >
                Confira alguns trabalhos com a grama {grass.nome}!
              </Link>
            </div>
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

