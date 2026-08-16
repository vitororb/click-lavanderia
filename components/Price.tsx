import { MessageCircleIcon } from "lucide-react";
import clickInfo from "../data/clickInfo.json";
import { Button } from "./Button";

export const Price = () => {
  return (
    <section className="flex justify-center items-center py-12 bg-primary">
      <div className="flex flex-col gap-4 items-center text-center text-sm text-white/80 max-w-96 px-6 mx-auto">
        <p className="uppercase font-semibold">
          Valor por ciclo de lavagem ou secagem
        </p>
        <h2 className="text-6xl text-white">R$ {clickInfo.price}</h2>
        <p>
          Sabão e amaciante já inclusos. Lave o que couber no cesto medidor - em
          média de 20 a 25 peças.
        </p>
        <Button
          label="Quero lavar minhas roupas"
          variant="secondary"
          className="w-fit"
          leftIcon={<MessageCircleIcon size={16} />}
          href={`https://wa.me/${clickInfo.phone}`}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  );
};
