export default function Throbber({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label="Carregando"
    >
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#A6DF65] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#002210] border-t-transparent rounded-full animate-spin opacity-50" style={{ animationDirection: "reverse", animationDuration: "1.5s" }}></div>
      </div>
    </div>
  );
}

