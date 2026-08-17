type Props = {
  id?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export const Section = ({ id, title, subtitle, children }: Props) => {
  return (
    <section id={id} className="flex flex-col gap-6 py-12">
      {/* Title */}
      <div className="flex flex-col items-center text-center gap-4 px-6 mx-auto">
        <span className="text-primary/80 font-semibold uppercase tracking-widest inline-block text-sm">
          {subtitle}
        </span>
        <h2 className="text-accent text-4xl font-medium font-family-montserrat">
          {title}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
};
