import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import logo from "../public/logos/logo-baixo-branca.png";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center min-h-20 bg-primary">
      <div className="flex gap-4 items-center justify-between max-w-6xl mx-auto px-6 w-full">
        <Image
          src={logo}
          alt="Click Lavanderia Logo"
          width={36}
          height={48}
          className="h-12 w-9 object-contain"
        />

        <p className="text-xs text-white/80 text-center">
          © {new Date().getFullYear()} Click Lavanderia. Todos os direitos
          reservados.
        </p>

        <a
          href="#top"
          className="flex items-center justify-center bg-white rounded-full min-h-8 min-w-8 text-primary"
        >
          <ArrowUpIcon size={20} />
        </a>
      </div>
    </footer>
  );
};
