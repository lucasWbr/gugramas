"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll para seção quando estiver na página inicial
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [isHomePage]);

  return (
    <header
      className={`py-2 transition-all duration-300 ${
        isScrolled
          ? "bg-white fixed top-0 left-0 right-0 z-50"
          : "bg-white relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between xl:justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0 ">
          <Image
            src="/Logo_em_Alta.png"
            alt="Gugramas Logo"
            width={120}
            height={30}
            className=""
            priority
          />
        </Link>

        {/* Menu Desktop - visível apenas em telas xl e maiores */}
        <nav className="hidden xl:flex items-center gap-10 flex-wrap justify-center flex-1 mx-4 min-w-0">
          <Link
            href={isHomePage ? "#servicos" : "/#servicos"}
            className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase relative inline-block"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                const element = document.getElementById("servicos");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - 128; // 128px = scroll-mt-32
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }
            }}
          >
            <span className="invisible font-bold block">
              Serviços Prestados
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              Serviços Prestados
            </span>
          </Link>
          <Link
            href={isHomePage ? "#gramas" : "/#gramas"}
            className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase relative inline-block"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                const element = document.getElementById("gramas");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }
            }}
          >
            <span className="invisible font-bold block">Gramas</span>
            <span className="absolute inset-0 flex items-center justify-center">
              Gramas
            </span>
          </Link>
          <Link
            href="/galeria"
            className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase relative inline-block"
          >
            <span className="invisible font-bold block">Galeria</span>
            <span className="absolute inset-0 flex items-center justify-center">
              Galeria
            </span>
          </Link>
          <Link
            href={isHomePage ? "#localizacao" : "/#localizacao"}
            className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase relative inline-block"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                const element = document.getElementById("localizacao");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }
            }}
          >
            <span className="invisible font-bold block">Localização</span>
            <span className="absolute inset-0 flex items-center justify-center">
              Localização
            </span>
          </Link>
        </nav>

        {/* Botão WhatsApp e Hambúrguer */}
        <div className="flex items-center gap-4 xl:gap-4 flex-1 xl:flex-initial justify-center xl:justify-end">
          <a
            href="https://wa.me/5554984346552"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#002210] text-[#9bdb4f] px-6 py-3 rounded-full flex items-center gap-3 hover:text-white transition-colors font-albert-sans font-extrabold shrink-0 shadow-lg group text-lg"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#9bdb4f] group-hover:text-white transition-colors"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="hidden md:inline">Orçamento via Whatsapp</span>
            <span className="md:hidden">Contato</span>
          </a>
        </div>

        {/* Botão Hambúrguer - visível apenas em telas menores que xl, justificado à direita */}
        <button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col gap-1.5 p-2 text-[#002210] focus:outline-none shrink-0"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#002210] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#002210] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#002210] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile - aparece quando o hambúrguer é clicado */}
      {isMenuOpen && (
        <nav className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href={isHomePage ? "#servicos" : "/#servicos"}
              className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase py-2"
              onClick={(e) => {
                closeMenu();
                if (isHomePage) {
                  e.preventDefault();
                  const element = document.getElementById("servicos");
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - 128;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }
              }}
            >
              Serviços Prestados
            </Link>
            <Link
              href={isHomePage ? "#gramas" : "/#gramas"}
              className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase py-2"
              onClick={(e) => {
                closeMenu();
                if (isHomePage) {
                  e.preventDefault();
                  const element = document.getElementById("gramas");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }
              }}
            >
              Gramas
            </Link>
            <Link
              href="/galeria"
              className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase py-2"
              onClick={closeMenu}
            >
              Galeria
            </Link>
            <Link
              href={isHomePage ? "#localizacao" : "/#localizacao"}
              className="text-[#002210] hover:opacity-80 hover:font-bold transition-all duration-200 font-albert-sans font-semibold uppercase py-2"
              onClick={(e) => {
                closeMenu();
                if (isHomePage) {
                  e.preventDefault();
                  const element = document.getElementById("localizacao");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }
              }}
            >
              Localização
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
