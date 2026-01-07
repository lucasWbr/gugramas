import Image from "next/image";
import grassIcon from "@/assets/images/icons/grass.svg";
import toolsIcon from "@/assets/images/icons/tools.svg";
import vaseIcon from "@/assets/images/icons/vase.svg";
import leafIcon from "@/assets/images/icons/leaf.svg";
import pageEndIcon from "@/assets/images/icons/pageEnd.svg";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function HeroSection() {
  return (
    <section className="bg-[#A6DF65] p-8 md:p-12 lg:p-16 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
          <div className="flex-1">
            <div className="flex gap-4 mb-4">
              <Image
                src={grassIcon}
                alt="Grass icon"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <Image
                src={toolsIcon}
                alt="Tools icon"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <Image
                src={vaseIcon}
                alt="Vase icon"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <Image
                src={leafIcon}
                alt="Leaf icon"
                width={40}
                height={40}
                className="w-auto h-10"
              />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-dark-green-text mb-6 font-albert-sans">
              <span className="font-extrabold">Plantamos</span>
              <span className="font-normal">,</span>
              <span className="font-extrabold"> cultivamos</span>
              <span className="font-normal"> e</span>
              <span className="font-extrabold"> cuidamos</span>{" "}
              <span className="font-normal">para você viver melhor!</span>
            </h2>

            <p className="text-lg md:text-xl text-dark-green-text mb-6 leading-relaxed font-albert-sans font-normal">
              Na <span className="font-extrabold">Gugramas</span>, trazemos a
              natureza para o seu ambiente com qualidade, dedicação e expertise.
              Especialistas em plantio, venda e manutenção de gramas, oferecemos
              também arranjos florais, paisagismo completo e criação de jardins
              que transformam qualquer espaço em um refúgio de beleza e paz.
            </p>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute top-4 right-[-12] lg:right-[-12] w-full md:w-11/12 lg:w-4/5 mx-auto lg:mx-0 lg:ml-auto h-full bg-[#002210] rounded-2xl -z-10"></div>
            <div className="relative rounded-2xl h-64 md:h-96 lg:h-128 w-full md:w-11/12 lg:w-4/5 mx-auto lg:mx-0 lg:ml-auto overflow-hidden">
              <BeforeAfterSlider
                beforeImage="/images/gallery/Antes e Depois Paisagismo/heroBefore.png"
                afterImage="/images/gallery/Antes e Depois Paisagismo/heroAfter.png"
                beforeLabel="Antes"
                afterLabel="Depois"
                className="rounded-2xl"
                forceCover={true}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-11/12 lg:w-4/5 mx-auto lg:mx-0 lg:ml-120 mt-6">
          <p className="text-sm md:text-base text-dark-green-text text-center font-albert-sans font-normal italic">
            Arraste para ver antes e depois
          </p>
        </div>
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
    </section>
  );
}
