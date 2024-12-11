import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import BtnOutline from "./BtnOutline";
import Button from "./Button";

const AddPostCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="h-[230px] md:h-[293px] rounded-lg border border-dashed border-[#D5D7DA] flex-center flex-col gap-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/add.svg" alt="" />
        <small className="text-md">New Post</small>
      </button>

      {/* Add post modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto p-5 overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-screen max-h-full bg-dark-500 bg-opacity-60"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative p-5 md:p-6  w-full max-w-[679px] max-h-full bg-white rounded-lg shadow flex flex-col gap-6"
          >
            <h3 className="text-3xl lg:text-4xl text-dark-700 leading-[1.2em] font-medium">
              New Post
            </h3>
            <Input label="Post Title" placeholder="Give your post a title" />
            <TextArea
              label="Post Content"
              placeholder="Write something mind-blowing"
            />
            <div className="flex gap-2 justify-center ml-auto">
              <BtnOutline onClick={() => setIsOpen(false)}>Cancel</BtnOutline>
              <Button>Publish</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPostCard;
