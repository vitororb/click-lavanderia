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
            href="https://www.google.com/maps/place/?q=place_id:ChIJQZQnUGcvY5MRF920qUzTnWo"
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
