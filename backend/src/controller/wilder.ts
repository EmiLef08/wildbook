import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";
import { Grade } from "../entity/Grade";
import { Request, Response } from "express";


const wilderController = {
  create: async(req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.send("Wilder created");
    } catch (err) {
      console.log(err);
      res.send("Error while creating the Wilder");
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const grades = await dataSource.getRepository(Grade).find();
      console.log(grades);
      const wilders = await dataSource.getRepository(Wilder).find();
      console.log("wilders", wilders);
      const data = wilders.map((wilder) => {
        const wilderGrades = grades.filter(
          (grade) => grade.wilder.id === wilder.id
        );
        const wilderGradesLean = wilderGrades.map((el) => {
          return { title: el.skill.name, votes: el.grade };
        });
        const result = {
          ...wilder,
          skills: wilderGradesLean,
        };
        console.log(result);
        return result;
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      res.send("error while querying wilders");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await dataSource.getRepository(Wilder).delete(req.params.id);
      res.send("Wilder deleted");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting the wilder");
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const updateResult = await dataSource
        .getRepository(Wilder)
        .update(req.params.id, req.body);
      res.send(updateResult);
    } catch (err) {
      console.log(err);
      res.send("Error while updating");
    }
  },
};

export default wilderController;