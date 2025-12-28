import Image from "next/image";
import bagIcon from "@/assets/images/icons/bag.svg";
import waterIcon from "@/assets/images/icons/water.svg";
import flowerIcon from "@/assets/images/icons/flower.svg";
import pageEndVerdeClaroIcon from "@/assets/images/icons/pageEndVerdeClaro.svg";
import service1Image from "@/assets/images/index/service1.png";
import service2Image from "@/assets/images/index/service2.png";

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="bg-white py-12 px-6 page-end-overlap relative z-10 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 space-y-4">
            <div className="flex gap-4 mb-4 justify-center lg:justify-start">
              <Image
                src={bagIcon}
                alt="Bag icon"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <Image
                src={waterIcon}
                alt="Water icon"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <Image
                src={flowerIcon}
                alt="Flower icon"
                width={40}
                height={40}
                className="w-auto h-10"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002210] mb-6">
              Serviços prestados
            </h2>

            <div className="space-y-4 text-[#002210] text-lg leading-relaxed font-albert-sans">
              <p>
                Somos especialistas em transformar espaços com soluções
                completas de paisagismo e jardinagem. Oferecemos{" "}
                <span className="font-bold">venda</span>,{" "}
                <span className="font-bold"> plantio</span> e{" "}
                <span className="font-bold">manutenção</span> de gramas além de
                criação de jardins e projetos de paisagismo.
              </p>
              <p>
                Também realizamos serviços de manutenção integral, como{" "}
                <span className="font-bold">corte</span>,
                <span className="font-bold"> adubação</span> e{" "}
                <span className="font-bold">limpeza</span>, garantindo que seu
                jardim ou área permaneça sempre saudável e bonita em todas as
                estações. Trabalhamos com preparo do solo, recuperação de
                gramados e podas especializadas, atendendo residências e
                empresas.
              </p>
              <p>
                Situados em Chapada-RS, garantimos qualidade em nossos serviços
                providenciados por uma equipe qualificada.
              </p>
              <p className="font-bold text-xl">
                Da terra à grama, cuidamos de tudo para você.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="rounded-2xl flex-1 overflow-hidden relative min-h-[200px]">
              <Image
                src={service1Image}
                alt="Serviço 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl flex-1 overflow-hidden relative min-h-[200px]">
              <Image
                src={service2Image}
                alt="Serviço 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-screen relative left-1/2 -ml-[50vw] mt-8">
          <Image
            src={pageEndVerdeClaroIcon}
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
