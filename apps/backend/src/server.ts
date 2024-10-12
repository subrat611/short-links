import express, { Express, Response } from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/health", (_, res: Response) => {
  res.json("Ok!");
});

app.listen(PORT, () => {
  console.log("\n");
  console.log(`::::Your server up & running at port ${PORT}::::`);
  console.log("\n");
});
