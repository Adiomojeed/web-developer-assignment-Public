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
          {isLoading ? (
            <tbody>
              <td colSpan={3}>
                <LoaderContainer />
              </td>
            </tbody>
          ) : (
            <tbody>
              {users?.map((i: UserData, idx: number) => (
                <UserTableRow user={i} key={idx} />
              ))}
            </tbody>
          )}
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
