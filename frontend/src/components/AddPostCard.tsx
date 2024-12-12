import { SyntheticEvent, useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import BtnOutline from "./BtnOutline";
import Button from "./Button";
import { useCreatePost } from "@/api";
import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const AddPostCard = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { isPending, mutate: createPost } = useCreatePost();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    createPost(
      { title, body, user_id: id as string },
      {
        onSuccess: () => {
          // @ts-ignore
          queryClient.refetchQueries(["getPosts"]);
          setIsOpen(false);
          setTitle("");
          setBody("");
        },
      }
    );
  };
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
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="relative p-5 md:p-6  w-full max-w-[679px] max-h-full bg-white rounded-lg shadow flex flex-col gap-6"
          >
            <h3 className="text-3xl lg:text-4xl text-dark-700 leading-[1.2em] font-medium">
              New Post
            </h3>
            <Input
              label="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Give your post a title"
            />
            <TextArea
              label="Post Content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              placeholder="Write something mind-blowing"
            />
            <div className="flex gap-2 justify-center ml-auto">
              <BtnOutline onClick={() => setIsOpen(false)}>Cancel</BtnOutline>
              <Button isLoading={isPending} type="submit">
                Publish
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddPostCard;
