interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className = "" }: IconProps) => (
  <i className={`${name} ${className}`} />
);

export default Icon;
