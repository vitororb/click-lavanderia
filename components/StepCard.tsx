type Props = {
  number: string;
  title: string;
  description: string;
};

export const StepCard = ({ title, description, number }: Props) => {
  return (
    <div className="group flex flex-col rounded-2xl p-4 gap-4 border hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 bg-white border-accent/20 hover:-translate-y-1 hover:border-primary">
      {/* Number */}
      <div className="text-5xl font-bold leading-none text-primary group-hover:text-secondary transition-all duration-300">
        {number}
      </div>

      {/* Title and Description */}
      <h3 className="text-lg font-bold text-accent">{title}</h3>
      <p className="text-sm leading-relaxed text-accent/80">{description}</p>
    </div>
  );
};
