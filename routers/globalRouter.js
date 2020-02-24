import express from "express";
import routes from "../routes";
import { videoHome, search } from "../controllers/videoController";
import {
  postJoin,
  postLogin,
  getLogin,
  logout,
  getJoin
} from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);
export default globalRouter;
