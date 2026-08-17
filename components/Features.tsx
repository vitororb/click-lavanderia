import {
  ClockIcon,
  ShieldIcon,
  SmartphoneIcon,
  SparklesIcon,
  WindIcon,
  ZapIcon,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { Section } from "./Section";

const features = [
  {
    icon: <SmartphoneIcon />,
    title: "Pagamento digital",
    desc: "Pix, cartão de débito/crédito. Sem necessidade de moedas ou fichas.",
  },
  {
    icon: <ClockIcon />,
    title: "Aberto 24h, todos os dias",
    desc: "Lave quando preferir, de madrugada, fins de semana ou feriados. Estamos abertos todos os dias 24 horas!",
  },
  {
    icon: <ShieldIcon />,
    title: "Ambiente monitorado",
    desc: "Câmeras de segurança disponível. Seu bem-estar em primeiro lugar.",
  },
  {
    icon: <ZapIcon />,
    title: "Máquinas eficientes",
    desc: "Equipamentos de alta centrifugação que economizam água e reduzem o tempo de secagem.",
  },
  {
    icon: <WindIcon />,
    title: "Secadoras industriais",
    desc: "Ciclos de secagem de até 45 minutos. Roupas macias e sem umidade.",
  },
  {
    icon: <SparklesIcon />,
    title: "Higiene garantida",
    desc: "Usamos em nossas lavagens produtos de uso profissional, biodegradáveis e hipoalergênicos.",
  },
];

export const Features = () => {
  return (
    <Section
      id="vantagens"
      subtitle="Por que escolher a Click?"
      title="Tudo que você precisa em um só lugar"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>
    </Section>
  );
};
