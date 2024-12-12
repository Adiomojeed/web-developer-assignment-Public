import { Router, Request, Response } from "express";

import { getSingleUser, getUsers, getUsersCount } from "../db/users/users";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const pageNumber = Number(req.query.pageNumber) || 0;
  const pageSize = Number(req.query.pageSize) || 4;
  if (pageNumber < 0 || pageSize < 1) {
    res.status(400).send({ message: "Invalid page number or page size" });
    return;
  }

  const users = await getUsers(pageNumber, pageSize);
  res.send(users);
});

router.get("/count", async (req: Request, res: Response) => {
  const count = await getUsersCount();
  res.send({ count });
});

router.get("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) {
    res.status(400).send({ error: "userId is required" });
    return;
  }
  const user = await getSingleUser(userId);
  res.send(user);
});

export default router;
