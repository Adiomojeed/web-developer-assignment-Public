import { ReactNode } from "react";
import Loader from "./Loader";

const BtnOutline = ({
  children,
  className,
  onClick,
  type = "button",
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
      onClick={onClick}
      className={`rounded-[4px] font-normal h-[40px] text-sm px-4 text-gray-700 hover:bg-gray-700 hover:text-white border border-solid border-[#E2E8F0] ${className}`}
    >
      {children}
      {isLoading && <Loader />}
    </button>
  );
};

export default BtnOutline;
