"use client";

import { UserData } from "@/api/types";
import Loader, { LoaderContainer } from "@/components/Loader";
import UserTableRow from "@/components/UserTableRow";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="flex min-h-screen flex-col container">
      <h2 className="text-4xl lg:text-6xl text-dark-700 leading-[1.2em] font-medium">
        Users
      </h2>
      <div className="relative overflow-x-auto mt-6 border-[1.5px] rounded-xl">
        <table className="w-full text-xs">
          <thead className="">
            <tr className="rounded-md">
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Address</th>
            </tr>
          </thead>
          {isLoading ? (
            <td colSpan={3}>
              <LoaderContainer />
            </td>
          ) : (
            <tbody>
              {Array.from({ length: 10 }).map((i, idx) => (
                <UserTableRow user={{} as UserData} key={idx} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </main>
  );
}
