"use client";

import { useGetPosts } from "@/api";
import { PostData } from "@/api/types";
import AddPostCard from "@/components/AddPostCard";
import { LoaderContainer } from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { useRouter, useParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { id } = useParams();

  const { isLoading, data } = useGetPosts(id as string);
  const posts = data as unknown as PostData[];
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col container">
      <button
        className="flex-center gap-2 w-max py-2 text-sm"
        onClick={() => router.back()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/arrow-left.svg" alt="" /> Back to Users
      </button>
      {isLoading ? (
        <LoaderContainer />
      ) : (
        <>
          <h3 className="text-3xl my-4 lg:text-4xl text-dark-700 leading-[1.2em] font-medium">
            James Sunderland
          </h3>
          <small className="text-sm">
            james.sunderland@acme.corp &bull;{" "}
            <span className="font-normal">4 Posts</span>
          </small>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <AddPostCard />
            {posts.map((i: PostData, idx: number) => (
              <PostCard key={idx} post={i} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Page;
