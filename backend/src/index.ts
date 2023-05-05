import express from "express";
import cors from "cors";
import dataSource from "./utils/dataSource";
import wilderController from "./controller/wilder";
import skillController from "./controller/skill";
import gradeController from "./controller/grade";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.delete("/api/wilder/:id", wilderController.delete);
app.put("/api/wilder/:id", wilderController.update);

app.post("/api/skill", skillController.create);
app.get("/api/skill", skillController.read);
app.delete("/api/skill/:id", skillController.delete);
app.put("/api/skill/:id", skillController.update);

app.put("/api/addskill", wilderController.addSkill);

app.post("/api/grade", gradeController.create);
app.get("/api/grade", gradeController.read);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

const start = async () => {
  await dataSource.initialize();
  app.listen(8000, () => console.log("Server started on 8000"));
};

start();