import { Section } from "./Section";
import { StepCard } from "./StepCard";

const steps = [
  {
    num: "01",
    title: "Chegue e escolha",
    desc: "Entre na lavanderia, escolha a máquina disponível que deseja usar — lavadora ou secadora.",
  },
  {
    num: "02",
    title: "Pague no Totem", // Formas de pagamento
    desc: "No Totem, faça o pagamento para liberar a máquina.",
  },
  {
    num: "03", // Sabão e amaciantes já inclusos
    title: "Coloque suas roupas",
    desc: "Usando o cesto medidor verifique a capacidade da máquina, coloque as roupas no equipamento selecionado e seguindo as instruções no painel.",
  },
  {
    num: "04",
    title: "Retire suas roupas",
    desc: "Após o término do ciclo, retire suas roupas limpas e secas. Volte sempre!",
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
