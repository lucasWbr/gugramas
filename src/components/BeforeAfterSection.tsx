import Image from "next/image";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import aboutImage from "@/assets/images/index/about.png";

export default function AboutSection() {
  return (
    <section className="bg-[#161D0A] py-12 px-6 page-end-overlap relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 w-full">
            <div className="rounded-2xl h-96 w-full overflow-hidden relative">
              <Image
                src={aboutImage}
                alt="Sobre a Gugramas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#A6DF65] mb-6 flex items-center justify-center">
              Sobre
            </h2>

            <div className="space-y-4 text-[#A6DF65] text-lg leading-relaxed font-albert-sans">
              <p>
                A Gugramas é uma empresa especializada em paisagismo e
                jardinagem, localizada em Chapada-RS. Com anos de experiência no
                mercado, trazemos a natureza para o seu ambiente com qualidade,
                dedicação e expertise.
              </p>
              <p>
                Somos especialistas em transformar espaços com soluções
                completas de paisagismo e jardinagem. Oferecemos venda, plantio
                e manutenção de gramas, além de criação de jardins e projetos de
                paisagismo personalizados.
              </p>
              <p>
                Nossa equipe qualificada trabalha com preparo do solo,
                recuperação de gramados e podas especializadas, atendendo
                residências e empresas. Realizamos serviços de manutenção
                integral, como corte, adubação e limpeza, garantindo que seu
                jardim ou área permaneça sempre saudável e bonita em todas as
                estações.
              </p>
              <p className="font-semibold">
                Da terra à grama, cuidamos de tudo para você viver melhor!
              </p>
            </div>
          </div>
        </div>
        <div className="w-screen relative left-1/2 -ml-[50vw] mt-8">
          <Image
            src={pageEndIcon}
            alt="Page end decoration"
            width={1440}
            height={218}
            className="w-full h-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>
    </section>
  );
}
