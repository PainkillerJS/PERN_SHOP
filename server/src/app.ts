import express from "express";
import cors from "cors";

import sequelize from "./config/sequelize.config";
import router from "./router";
import models from "./models";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await sequelize.authenticate();
  await sequelize.sync();

  app.listen(PORT, () => console.log(`Server start to work on ${PORT}`));
};

startServer();
