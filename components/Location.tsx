import {
  BadgeCheckIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react";
import clickInfo from "../data/clickInfo.json";
import { InfoCard } from "./InfoCard";
import { Section } from "./Section";

export const Location = () => {
  return (
    <Section
      id="localizacao"
      subtitle="Onde estamos?"
      title="Localização e Horários"
    >
      <div className="grid md:grid-cols-2 gap-4">
        {/* Info Cards */}
        <div className="flex flex-col gap-4">
          <InfoCard
            icon={<MapPinIcon />}
            title="Endereço"
            description={`${clickInfo.address}`}
            href="https://www.google.com/maps/place/CLICK+LAVANDERIA+EXPRESS/@-17.5566094,-52.5505623,17z/data=!3m1!4b1!4m6!3m5!1s0x93632f6750279441:0x6a9dd34ca9b4dd17!8m2!3d-17.5566094!4d-52.5505623!16s%2Fg%2F11x8t6s8f5?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
          />
          <InfoCard
            icon={<ClockIcon />}
            title="Horário"
            description="Todos os dias, 24 horas"
            redirect={false}
          />
          <InfoCard
            icon={<MailIcon />}
            title="E-mail"
            description={`${clickInfo.email}`}
            href="mailto:clicklavanderiaexpress@gmail.com"
          />
          <InfoCard
            icon={<MessageCircleIcon />}
            title="WhatsApp"
            description={`+${clickInfo.phone.slice(0, 2)} (${clickInfo.phone.slice(2, 4)}) ${clickInfo.phone.slice(4, 9)}-${clickInfo.phone.slice(9, 13)}`}
            href={`https://wa.me/${clickInfo.phone}`}
          />
          <InfoCard
            icon={<BadgeCheckIcon />}
            title="Instagram"
            description={`${clickInfo.instagram}`}
            href="https://www.instagram.com/clicklavanderiaexpress"
          />
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden min-h-80">
          <iframe
            title="Localização Click Lavanderia"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=CLICK+LAVANDERIA+EXPRESS,+Mineiros,+GO,+-17.5566094,-52.5505623&z=17&output=embed"
          />
        </div>
      </div>
    </Section>
  );
};
