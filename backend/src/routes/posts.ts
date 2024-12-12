import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { createPost, deletePost, getPosts, getSinglePost } from "../db/posts/posts";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const userId = req.query.userId?.toString();
  if (!userId) {
    res.status(400).send({ error: "userId is required" });
    return;
  }
  const posts = await getPosts(userId);
  res.send(posts);
});

router.post("/", async (req: Request, res: Response) => {
  const { title, body, user_id } = req.body;
  const userId = user_id?.toString();
  if (!title || !body || !userId) {
    res.status(400).json({ error: 'Title, body, and user_id are required.' });
    return;
  }

  const id = uuidv4();
  await createPost({ id, title, body, user_id: userId, created_at: new Date() }).then(() => {
    res.send({ message: "New post created successfully!" });
  });
});

router.delete("/:postId", async (req: Request, res: Response) => {
  const { postId } = req.params;
  if (!postId) {
    res.status(400).send({ error: "postId is required" });
    return;
  }
  const post = await getSinglePost(postId);
  if (!post) {
    res.status(404).send({ error: "Post not found" });
    return;
  }
  await deletePost(postId).then(() => {
    res.send({ message: "Post deleted successfully" });
  });
});

export default router;
