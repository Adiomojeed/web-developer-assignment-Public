"use client";

import { useGetPosts, useGetSingleUser } from "@/api";
import { PostData, UserData } from "@/api/types";
import AddPostCard from "@/components/AddPostCard";
import { LoaderContainer } from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { useRouter, useParams } from "next/navigation";

const PostsEmpty = () => (
  <div className="flex-center w-full mx-auto min-h-[200px] flex-col gap-2">
    <h3 className="text-2xl text-dark-700 font-medium">No post found!</h3>
    <p>Create a new post with the Add button</p>
  </div>
);

const Page = () => {
  const router = useRouter();
  const { id } = useParams();

  const { isLoading, data } = useGetPosts(id as string);
  const { isLoading: isLoadingUser, data: sUser } = useGetSingleUser(
    id as string
  );
  const posts = data as unknown as PostData[];
  const user = sUser as unknown as UserData;

  return (
    <main className="flex min-h-screen flex-col container">
      <button
        className="flex-center gap-2 w-max py-2 text-sm"
        onClick={() => router.back()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/arrow-left.svg" alt="" /> Back to Users
      </button>
      {isLoading ?? isLoadingUser ? (
        <LoaderContainer />
      ) : (
        <>
          <h3 className="text-3xl my-4 lg:text-4xl text-dark-700 leading-[1.2em] font-medium">
            {user?.name}
          </h3>
          <small className="text-sm">
            {user?.email} &bull;{" "}
            <span className="font-normal">
              {posts.length ?? 0} Post{posts.length > 1 ? "s" : ""}
            </span>
          </small>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <AddPostCard />
            {posts.map((i: PostData, idx: number) => (
              <PostCard key={idx} post={i} />
            ))}
          </div>
          {posts && posts.length === 0 && <PostsEmpty />}
        </>
      )}
    </main>
  );
};

export default Page;
