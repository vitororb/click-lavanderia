type ButtonVariant = "primary" | "secondary" | "outline";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
};

const variantMap = {
  primary: "bg-primary hover:bg-primary/80 text-white",
  secondary: "bg-white text-primary hover:scale-105",
  outline:
    "bg-white border border-accent/20 text-primary backdrop-blur-sm hover:text-white hover:border-transparent hover:bg-primary",
};

export const Button = ({
  label,
  href,
  variant = "primary",
  leftIcon,
  rightIcon,
  className,
  ...rest
}: Props) => {
  return (
    <a
      href={href}
      className={`${className} ${variantMap[variant]} flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200`}
      {...rest}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </a>
  );
};
