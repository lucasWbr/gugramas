import Image from "next/image";
import bagIcon from "@/assets/images/icons/bag.svg";
import waterIcon from "@/assets/images/icons/water.svg";
import flowerIcon from "@/assets/images/icons/flower.svg";
import pageEndVerdeClaroIcon from "@/assets/images/icons/pageEndVerdeClaro.svg";

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
                Trabalhamos das mais diversas formas, buscando atender a
                necessidade particular do consumidor final, podendo apenas
                fornecer o produto, fornecer e entregar no local combinado, ou
                até mesmo sistema completo de plantio de grama, que inclui:
                <span className="font-bold">
                  {" "}
                  Estudo da viabilidade de execução
                </span>{" "}
                para verificar possíveis irregularidades e desafios do projeto.
                <span className="font-bold">
                  {" "}
                  Aptidão ao tipo de solo e escolha do tipo da grama
                </span>
                : extremamente necessário conhecer o local de plantio para
                verificar horas luz, umidade, sombreamento e necessidade que o
                plantio da grama busca solucionar.
              </p>
              <p>
                {" "}
                <span className="font-bold">Retirada de escombros</span>, restos
                de matérias e qualquer resíduo que possa atrapalhar o
                enraizamento e estética do gramado.{" "}
                <span className="font-bold">
                  Avaliar a necessidade do uso de herbicidas para controlar o
                  crescimento de ervas daninhas
                </span>
                , invasoras ou qualquer planta que possa comprometer fisicamente
                o gramado. <span className="font-bold">Preparo do solo</span>:
                após a análise laboratorial são incorporados os matérias
                necessário para dar plenas condições ao gramado enraizar e
                crescer de forma saudável e vistoso, material esse podendo ser
                químico ou orgânico.{" "}
                <span className="font-bold">Nivelamento</span> manual ou
                mecânico dependendo do tamanho do projeto.
              </p>
              <p>
                {" "}
                <span className="font-bold">Plantio da grama</span> de forma
                manual, atento aos detalhes e acabamentos de forma ágil visando
                a necessidade de plantio imediato para não perder a qualidade do
                produto.{" "}
                <span className="font-bold">Manutenção do gramado</span>,
                atendendo de forma humanizada todas as necessidades do cliente
                para garantir um gramado de qualidade. Além disso trabalhamos
                com a execução de paisagismo e jardins para embelezar ainda mais
                o ambiente com vasos, pedras e plantas dos mais diversos tipos.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="rounded-2xl flex-1 overflow-hidden relative min-h-[200px]">
              <Image
                src="/images/gallery/Erosão e Funcionalidade/Carga.JPG"
                alt="Serviço 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl flex-1 overflow-hidden relative min-h-[200px]">
              <Image
                src="/images/gallery/Erosão e Funcionalidade/Manutenção bb.jpg"
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
