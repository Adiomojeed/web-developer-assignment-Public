"use client";

import { UserData } from "@/api/types";
import { useRouter } from "next/navigation";

const UserTableRow = ({ user }: { user: UserData }) => {
  const router = useRouter();
  return (
    <tr
      className="cursor-pointer"
      onClick={() => router.push(`/${user.id}/posts`)}
    >
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.street}, {user.state}, {user.city}, {user.zipcode}
      </td>
    </tr>
  );
};

export default UserTableRow;
