import { ReactNode } from "react";
import Loader from "./Loader";

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  isLoading,
}: {
  children: string | ReactNode;
  className?: string;
  type?: "submit" | "button";
  onClick?: (e: any) => void;
  isLoading?: boolean;
}) => {
  return (
    <button
      type={type}
      className={`rounded-[4px] font-normal h-[40px] text-sm px-4 bg-gray-700 text-white ${className}`}
      onClick={onClick}
    >
      {children}
      {isLoading && <Loader />}
    </button>
  );
};

export default Button;
