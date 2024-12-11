const Input = ({
  label,
  placeholder = "",
  type = "text",
  id,
  required = false,
  value,
  onChange,
  className,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  className?: string;
}) => {
  return (
    <div className="">
      {label && (
        <label htmlFor={id} className="block mb-[10px] font-normal md:text-md">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`bg-white border border-[#94A3B8] text-dark-900 focus:outline-none focus:border-gray-700 text-sm rounded-[4px] block w-full h-[40px] p-[10px] ${className}`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
