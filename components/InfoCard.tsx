import { SquareArrowOutUpRightIcon } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  redirect?: boolean;
  title: string;
  description: string;
  href?: string;
};

export const InfoCard = ({
  icon,
  title,
  description,
  href,
  redirect = true,
}: Props) => {
  return (
    <div className="flex gap-4 items-start bg-white border border-accent/20 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:border-primary">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary shrink-0">
        {icon}
      </div>

      {/* Title and Description */}
      <div className="flex flex-col">
        <h3 className="text-accent font-semibold">{title}</h3>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${redirect ? "hover:text-primary hover:underline" : ""} text-sm text-accent/80`}
        >
          {description}
          {redirect && (
            <SquareArrowOutUpRightIcon
              size={12}
              className="inline-block ml-1 text-primary"
            />
          )}
        </a>
      </div>
    </div>
  );
};
