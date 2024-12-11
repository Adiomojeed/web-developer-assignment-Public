import { useMutation, useQuery } from "@tanstack/react-query";
import { Request } from "./request";
import customToast, { ToastType } from "@/components/Toast";


export const useGetUsers = () =>
  useQuery({
    queryKey: ["getUsers",],
    queryFn: () => {
      return Request.get(`/users`).then(res => res)
    },
  });
