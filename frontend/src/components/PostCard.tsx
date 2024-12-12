"use client";

import BtnOutline from "./BtnOutline";
import Button from "./Button";
import { PostData } from "@/api/types";
import { useQueryClient } from "@tanstack/react-query";
import { useDeletePost } from "@/api";
import useDisclosure from "@/hooks/useDisclosure";

const PostCard = ({ post }: { post: PostData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();
  const { isPending, mutate: deletePost } = useDeletePost();
  return (
    <>
      <div className="h-[230px] md:h-[293px] shadow-sm rounded-lg border border-[#D5D7DA] p-4 md:p-6 relative">
        <button
          onClick={onOpen}
          className="absolute p-2 flex-center right-2 top-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/trash.svg" alt="" />
        </button>
        <h6 className="text-lg font-medium line-clamp-1">{post.title}</h6>
        <small className="text-sm mt-2 md:mt-4 line-clamp-[8] md:line-clamp-[10] text-ellipsis">
          {post.body}
        </small>
      </div>
      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto p-5 overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-screen max-h-full bg-dark-500 bg-opacity-60"
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative p-5 md:p-6  w-full max-w-[330px] max-h-full bg-white rounded-lg shadow flex flex-col gap-6"
          >
            <h5 className="text-xl text-dark-700 text-center leading-[1.2em] font-medium">
              Are you sure to delete?
            </h5>

            <div className="flex-center gap-2">
              <BtnOutline className="px-6" onClick={onClose}>
                No
              </BtnOutline>
              <Button
                onClick={() =>
                  deletePost(post.id, {
                    onSuccess: () => {
                      // @ts-ignore
                      queryClient.refetchQueries(["getPosts"]);
                      onClose();
                    },
                  })
                }
                className="px-6"
                isLoading={isPending}
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
