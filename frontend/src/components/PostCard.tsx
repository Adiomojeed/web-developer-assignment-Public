const PostCard = () => {
  return (
    <div className="h-[230px] md:h-[293px] shadow-sm rounded-lg border border-[#D5D7DA] p-4 md:p-6 relative">
      <button className="absolute p-2 flex-center right-2 top-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/trash.svg" alt="" />
      </button>
      <h6 className="text-lg font-medium">I Got a Letter</h6>
      <small className="text-sm mt-2 md:mt-4 line-clamp-[8] md:line-clamp-[10] text-ellipsis">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dol...
      </small>
    </div>
  );
};

export default PostCard;
