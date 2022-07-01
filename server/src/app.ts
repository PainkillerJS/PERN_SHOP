import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";

import sequelize from "./config/sequelize.config";
import router from "./router";
import errorHandlingMiddleware from "./middlewares/errorHandling.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);
app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await sequelize.authenticate();
  await sequelize.sync();

  app.listen(PORT, () => console.log(`Server start to work on ${PORT}`));
};

startServer();
