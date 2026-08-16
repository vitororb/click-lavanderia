type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div className="group flex flex-col rounded-2xl p-4 gap-4 border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 bg-white border-accent/20 hover:-translate-y-1 hover:border-primary">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/20 group-hover:bg-secondary group-hover:text-white text-accent/80">
        {icon}
      </div>

      {/* Title and Description */}
      <h3 className="text-lg font-bold text-accent">{title}</h3>
      <p className="text-muted text-sm leading-relaxed text-accent/80">
        {description}
      </p>
    </div>
  );
};
