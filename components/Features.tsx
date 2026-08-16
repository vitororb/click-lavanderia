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
    desc: "Pix, cartão de débito/crédito ou QR Code. Sem necessidade de moedas ou fichas.",
  },
  {
    icon: <ClockIcon />,
    title: "Aberto 24h / 7 dias",
    desc: "Lave quando preferir — de madrugada, fins de semana ou feriados. A escolha é sua.",
  },
  {
    icon: <ShieldIcon />,
    title: "Ambiente monitorado",
    desc: "Câmeras de segurança e equipe de suporte disponível. Seu bem-estar em primeiro lugar.",
  },
  {
    icon: <ZapIcon />,
    title: "Máquinas eficientes",
    desc: "Equipamentos de alta centrifugação que economizam água e reduzem o tempo de secagem.",
  },
  {
    icon: <WindIcon />,
    title: "Secadoras industriais",
    desc: "Secagem completa em menos de 30 minutos. Roupas macias e sem umidade.",
  },
  {
    icon: <SparklesIcon />,
    title: "Higiene garantida",
    desc: "Máquinas higienizadas após cada uso com produto certificado pela Anvisa.",
  },
];

export const Features = () => {
  return (
    <Section
      id="vantagens"
      subtitle="Por que escolher a gente?"
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
