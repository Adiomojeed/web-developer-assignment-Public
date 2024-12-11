const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={`w-[60px] ${className}`}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const LoaderContainer = () => {
  return (
    <div className="flex-center w-full mx-auto min-h-[400px] md:min-h-[600px]">
      <Loader />
    </div>
  );
};

export default Loader;
