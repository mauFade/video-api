import { app } from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT || 3004;

AppDataSource.initialize()
  .then(() => {
    console.info("Connected to Postgres database");
  })
  .then(() => {
    app.listen(PORT, () => console.info(`Server running on port: ${PORT}`));
  });
