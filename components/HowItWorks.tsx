import { Section } from "./Section";
import { StepCard } from "./StepCard";

const steps = [
  {
    num: "01",
    title: "Separe suas roupas",
    desc: "Utilize o cesto medidor da Click Lavanderia para respeitar a quantidade ideal de roupas para cada ciclo.",
  },
  {
    num: "02",
    title: "Pague no Totem",
    desc: "No Totem, selecione o serviço desejado: Lavar ou Secar e realize o pagamento.",
  },
  {
    num: "03",
    title: "Inicie o ciclo",
    desc: "Coloque as roupas no equipamento escolhido. Em seguida, siga as instruções do painel para iniciar a lavagem ou secagem.",
  },
  {
    num: "04",
    title: "Aproveite",
    desc: "Aguarde o término do ciclo, retire suas roupas e aproveite: roupas limpas e secas em um Click!",
  },
];

export const HowItWorks = () => {
  return (
    <Section id="como-funciona" subtitle="Como funciona?" title="Simples assim">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <StepCard
            key={step.num}
            number={step.num}
            title={step.title}
            description={step.desc}
          />
        ))}
      </div>
    </Section>
  );
};
