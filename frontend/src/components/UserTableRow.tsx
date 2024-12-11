"use client";

import { UserData } from "@/api/types";
import { useRouter } from "next/navigation";

const UserTableRow = ({ user }: { user: UserData }) => {
  const router = useRouter();
  return (
    <tr className="cursor-pointer" onClick={() => router.push(`/${1}/posts`)}>
      <td>James Sunderland</td>
      <td>james.sunderland@acme.corp</td>
      <td>
        11 Katz St., Pennsylvania, Centralia, M4A2T6 11 Katz St., Pennsylvania,
        Centralia, M4A2T6{" "}
      </td>
    </tr>
  );
};

export default UserTableRow;
