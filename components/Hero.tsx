import {
  ArrowDownIcon,
  ChevronDownIcon,
  ClockIcon,
  MessageCircleIcon,
  ZapIcon,
} from "lucide-react";
import clickInfo from "../data/clickInfo.json";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-screen justify-center gap-10 w-full p-6">
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto px-6 gap-4">
        <div className="flex flex-col gap-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <div className="flex w-fit items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2">
              <ClockIcon size={16} className="text-secondary" />
              <span className="text-accent/70 text-xs font-medium uppercase">
                Aberto 24h
              </span>
            </div>

            <div className="flex w-fit items-center bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-primary text-xs font-medium uppercase">
                Autoatendimento
              </span>
            </div>
          </div>

          {/* Hero content */}
          <h1 className="text-5xl font-normal text-accent">
            Suas roupas limpas em um{" "}
            <span className="text-primary font-family-montserrat">Click</span>
          </h1>
          <p className="text-lg text-accent/80 max-w-md">
            Lavanderia de autoatendimento em Mineiros-GO. Roupas limpas e secas
            em aproximadamente 1 hora, com sabão e amaciante inclusos.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              label="Fale Conosco"
              leftIcon={<MessageCircleIcon size={16} />}
              href={`https://wa.me/${clickInfo.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            />
            <Button
              label="Como Funciona"
              variant="outline"
              rightIcon={<ArrowDownIcon size={16} />}
              href="#como-funciona"
            />
          </div>
        </div>

        {/* Hero image */}
        <div
          className="relative w-full h-full bg-accent/10 rounded-2xl hidden md:flex p-4 items-end bg-cover bg-center"
          style={{ backgroundImage: "url('/click.jpg')" }}
        >
          <div className="flex gap-4 items-center p-4 rounded-2xl h-fit w-full bg-white/30 backdrop-blur-sm border border-white">
            <div className="flex items-center justify-center bg-primary rounded-full p-2">
              <ZapIcon size={24} className="text-white" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-white">
                Lavagem completa em cerca de 1 hora
              </h3>
              <span className="text-xs text-white">
                Inclui lavagem + secagem
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center hover:text-primary justify-center gap-1 text-xs text-primary/70 uppercase"
        href="#vantagens"
      >
        Saiba mais
        <ChevronDownIcon size={14} className="animate-bounce" />
      </a>
    </section>
  );
};
