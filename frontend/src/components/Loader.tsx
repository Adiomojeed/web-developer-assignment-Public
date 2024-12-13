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

export const LoaderContainer = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex-center w-full mx-auto min-h-[160px] md:min-h-[210px] ${className}`}
    >
      <Loader />
    </div>
  );
};

export default Loader;
