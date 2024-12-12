import { connection } from "../connection";
import { createPostTemplate, deletePostTemplate, selectPostsTemplate, selectSinglePostTemplate } from "./query-tamplates";
import { Post } from "./types";

export const getPosts = (userId: string): Promise<Post[]> =>
  new Promise((resolve, reject) => {
    connection.all(selectPostsTemplate, [userId], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results as Post[]);
    });
  });

export const createPost = ({ id, title, body, user_id, created_at }: { id: string; title: string, body: string, user_id: string, created_at: Date }): Promise<{}> =>
  new Promise((resolve, reject) => {
    connection.run(createPostTemplate, [id, title, body, user_id, created_at], (error) => {
      if (error) {
        reject(error);
      }
      resolve({});
    });
  });

export const getSinglePost = (id: string): Promise<Post> =>
  new Promise((resolve, reject) => {
    connection.get(selectSinglePostTemplate, [id], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result as Post);
    });
  });

export const deletePost = (postId: string): Promise<{}> =>
  new Promise((resolve, reject) => {
    connection.run(deletePostTemplate, [postId], (error) => {
      if (error) {
        reject(error);
      }
      resolve({});
    });
  });
