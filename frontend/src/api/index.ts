import { useMutation, useQuery } from "@tanstack/react-query";
import { Request } from "./request";
import customToast, { ToastType } from "@/components/Toast";


export const useGetUsers = ({ pageNumber, pageSize }: { pageNumber: number, pageSize: number }) =>
  useQuery({
    queryKey: ["getUsers", pageNumber, pageSize,],
    queryFn: () => {
      return Request.get(`/users?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res => res)
    },
  });



export const useGetTotalUsers = () =>
  useQuery({
    queryKey: ["getCount"],
    queryFn: () => {
      // @ts-ignore
      return Request.get(`/users/count`).then(res => res?.count)

    },
  });

export const useGetPosts = (userId: string) =>
  useQuery({
    queryKey: ["getPosts",],
    queryFn: () => {
      return Request.get(`/posts?userId=${userId}`).then(res => res)
    },
  });
