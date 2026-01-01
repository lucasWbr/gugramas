import Image from "next/image";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";

export default function AboutSection() {
  return (
    <section className="bg-[#161D0A] py-12 px-6 page-end-overlap relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 w-full">
            <div className="rounded-2xl h-96 w-full overflow-hidden relative">
              <Image
                src="/images/gallery/Erosão e Funcionalidade/Ers(2).JPG"
                alt="Sobre a Gugramas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#A6DF65] mb-6 flex items-center justify-center">
              Quem somos
            </h2>

            <div className="space-y-4 text-[#A6DF65] text-lg leading-relaxed font-albert-sans">
              <p>
                A Gugramas é uma empresa especializada em comercio, plantio e
                manutenção de todo tipo de gramados, localizada no município de
                Chapada-RS, atua a mais de 15 anos no mercado de gramas levando
                compromisso e seriedade ao consumidor final. Teve início
                atendendo a localidade de chapada e hoje atende as mais
                diversificadas obras em todo o Rio Grande do Sul e região sul de
                Santa Catarina.
              </p>
              <p>
                Conta com uma equipe própria, experiente e capacitada atuando a
                anos no mercado com compromisso e pontualidade nos projetos.
                Trabalhamos atendendo desde pequenas obras residências visando a
                estética e bem estar do cliente, até grandes obras industriais,
                comerciais e rodoviárias, tendo em vista sempre atender as
                necessidades individuais de cada cliente.
              </p>
              <p>
                Contamos também com frota própria para deslocamento, fretes e
                descarregamento da grama de forma mecanizada, visando manter o
                compromisso com a pontualidade e a qualidade do produto até o
                consumidor final.
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
