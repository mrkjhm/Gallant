type Direction = "up-right" | "right" | "down-right" | "up" | "down";

interface ArrowButtonProps {
  label: string;
  direction: Direction;
  onClick?: () => void;
  className?: string;
}

const directionClasses: Record<Direction, string> = {
  "up-right": "group-hover:translate-x-1 group-hover:-translate-y-1",
  right: "group-hover:translate-x-1",
  "down-right": "group-hover:translate-x-1 group-hover:translate-y-1",
  up: "group-hover:-translate-y-1",
  down: "group-hover:translate-y-1",
};

const ArrowButton = ({
  label,
  direction,
  onClick,
  className,
}: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center space-x-2 cursor-pointer border px-5 py-2 rounded-full  hover:border-[#cfa853] transition-all duration-300"
    >
      <span className="mr-2] group-hover:text-[#ff0100] transition-all duration-300">
        {label}
      </span>
      <i
        className={`${directionClasses[direction]} ${className} transition-all duration-300 group-hover:text-[#ff0100]`}
      />
    </button>
  );
};

export default ArrowButton;
