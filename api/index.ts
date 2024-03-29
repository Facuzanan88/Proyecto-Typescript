import express from "express";
import db from "./models";
import userRouter from "./routes/user";
import cowCutsRouter from "./routes/CowCuts";
import pigCutsRouter from "./routes/PigCuts";
import promotialMailRouter from "./routes/PromotialMail";
import uploadImageRouter from "./routes/uploadImage";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", userRouter);
app.use("/", cowCutsRouter);
app.use("/", pigCutsRouter);
app.use("/", promotialMailRouter);
app.use("/api/upload", uploadImageRouter);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

db.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
