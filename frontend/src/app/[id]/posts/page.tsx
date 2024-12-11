"use client";

import PostCard from "@/components/PostCard";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col container">
      <button
        className="flex-center gap-2 w-max py-2 text-sm"
        onClick={() => router.back()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/arrow-left.svg" alt="" /> Back to Users
      </button>
      <h3 className="text-3xl my-4 lg:text-4xl text-dark-700 leading-[1.2em] font-medium">
        James Sunderland
      </h3>
      <small className="text-sm">
        james.sunderland@acme.corp &bull;{" "}
        <span className="font-normal">4 Posts</span>
      </small>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        <button className="h-[230px] md:h-[293px] rounded-lg border border-dashed border-[#D5D7DA] flex-center flex-col gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/add.svg" alt="" />
          <small className="text-md">New Post</small>
        </button>
        {Array.from({ length: 5 }).map((i, idx) => (
          <PostCard key={idx} />
        ))}
      </div>
    </main>
  );
};

export default Page;
