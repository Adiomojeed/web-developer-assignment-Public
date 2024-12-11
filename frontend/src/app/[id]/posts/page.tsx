"use client";

import AddPostCard from "@/components/AddPostCard";
import { LoaderContainer } from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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
            {Array.from({ length: 5 }).map((i, idx) => (
              <PostCard key={idx} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Page;
