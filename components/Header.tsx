import { MapPinIcon } from "lucide-react";
import { Button } from "./Button";

type HeaderItemProps = {
  title: string;
  href: string;
};

const MenuItens = [
  { title: "Início", href: "#top" },
  { title: "Vantagens", href: "#vantagens" },
  { title: "Como Funciona", href: "#como-funciona" },
  { title: "Localização", href: "#localizacao" },
];

export const Header = () => {
  return (
    <header className="bg-primary flex flex-col items-start gap-4 py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto w-full">
        {/* Logo */}
        <a href="#top">
          <img
            src="/logos/logo-lateral-branca.png"
            alt="Click Lavanderia Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {MenuItens.map((item) => (
            <HeaderItem key={item.href} title={item.title} href={item.href} />
          ))}
        </div>

        <Button
          label="Nos encontre"
          variant="secondary"
          href="#localizacao"
          className="hidden md:block"
        />

        <a className="md:hidden p-1 rounded-md bg-white" href="#localizacao">
          <MapPinIcon size={20} className="text-primary" />
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-primary/90 px-6 w-full scrollbar-none flex items-center overflow-hidden overflow-x-auto gap-4 pt-4 border-t border-white/30">
        {MenuItens.map((item) => (
          <HeaderItem key={item.href} title={item.title} href={item.href} />
        ))}
      </div>
    </header>
  );
};

export const HeaderItem = ({ title, href }: HeaderItemProps) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center whitespace-nowrap w-fit text-white/80 hover:text-white transition-colors duration-300"
    >
      {title}
    </a>
  );
};
