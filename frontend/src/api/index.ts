import { useMutation, useQuery } from "@tanstack/react-query";
import { Request } from "./request";
import customToast, { ToastType } from "@/components/Toast";
import { PostData, UserData } from "./types";

export const useGetUsers = ({ pageNumber, pageSize }: { pageNumber: number, pageSize: number }) =>
  useQuery({
    queryKey: ["getUsers", pageNumber, pageSize,],
    queryFn: () => {
      return Request.get<UserData[]>(`/users?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res => res)
    },
  });

export const useGetSingleUser = (userId: string) =>
  useQuery({
    queryKey: ["getUser"],
    queryFn: () => {
      return Request.get<UserData>(`/users/${userId}`).then(res => res)
    },
  });

export const useGetTotalUsers = () =>
  useQuery({
    queryKey: ["getCount"],
    queryFn: () => {
      // @ts-ignore
      return Request.get<number>(`/users/count`).then(res => res?.count)

    },
  });

export const useGetPosts = (userId: string) =>
  useQuery({
    queryKey: ["getPosts",],
    queryFn: () => {
      return Request.get<PostData[]>(`/posts?userId=${userId}`).then(res => res)
    },
  });

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (values: {
      title: string,
      body: string,
      user_id: string,
    }) =>
      Request.post(`/posts`, values),
    onSuccess: async (data: any) => {
      customToast(data.message, ToastType.success)
    }
  })
};

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (postId: string) =>
      Request.delete(`/posts/${postId}`),
    onSuccess: async (data: any) => {
      customToast(data.message, ToastType.success)
    }
  })
};
