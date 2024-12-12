"use client";

import { useGetTotalUsers, useGetUsers } from "@/api";
import { UserData } from "@/api/types";
import { LoaderContainer } from "@/components/Loader";
import Pagination from "@/components/Pagination";
import UserTableRow from "@/components/UserTableRow";
import { useState } from "react";

export default function Home() {
  const limit = 10;
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { isLoading, data } = useGetUsers({ pageNumber, pageSize: limit });
  const { data: total } = useGetTotalUsers();
  const users = data as unknown as UserData[];

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
          <tbody>
            {isLoading ? (
              <td colSpan={3}>
                <LoaderContainer />
              </td>
            ) : users.length === 0 ? (
              <td colSpan={3}>
                <div className="flex-center w-full mx-auto min-h-[400px] md:min-h-[600px] flex-col gap-2">
                  <h3 className="text-2xl text-dark-700 font-medium">
                    No user(s) found!
                  </h3>
                </div>
              </td>
            ) : (
              users?.map((i: UserData, idx: number) => (
                <UserTableRow user={i} key={idx} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        total={total}
        limit={limit}
        setPageNumber={(e: number) => setPageNumber(e)}
      />
    </main>
  );
}
