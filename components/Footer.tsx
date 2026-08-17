import { ArrowUpIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center min-h-20 bg-primary mx-auto w-screen">
      <div className="flex gap-4 items-center justify-between max-w-6xl mx-auto px-6 w-full">
        <img
          src="/logos/logo-baixo-branca.png"
          alt="Click Lavanderia Logo"
          className="h-12 w-auto"
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
