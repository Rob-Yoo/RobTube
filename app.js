import express from "express"; //Babel 사용
import morgan from "morgan"; // middleware 모듈 -> logging(무슨 일이 일어났는지 기록하고 알려줌)
import helmet from "helmet"; //middleware 모듈 -> 보안용 모듈
import bodyParser from "body-parser"; // middleware 모듈 -> body로 부터 정보를 얻을 수 있게 해줌
import cookieParser from "cookie-parser"; // middleware 모듈 -> cookie에 유저정보 저장 -> session 다루기위해
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter"; // default로 export하지 않았기 때문에 다음과 같은 형식으로 import
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use는 누군가 /user에 접속하면 그에 해당하는 모든 라우터를 이용할 수 있다
app.use(routes.videos, videoRouter);
export default app;
