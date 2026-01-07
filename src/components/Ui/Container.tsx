import { ReactNode } from "react";

interface WindowProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: WindowProps) => {
  return (
    <div className={`max-w-300 mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default Container;
