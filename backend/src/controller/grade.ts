import dataSource from "../utils";
import { Grade } from "../entity/Grade";
// import { Wilder } from "../entity/Wilder";
// import { Skill } from "../entity/Skill";
import { Response, Request } from "express";


const gradeController = {
  create : async (req: Request, res: Response) => {
    try {
        // const wilderFromDb = await dataSource.getRepository(Wilder).findOneBy({name: req.body.wilder});
        // console.log("wilderFromDb", wilderFromDb);

        // const skillFromDb = await dataSource.getRepository(Skill).findOneBy({name: req.body.skill});
        // console.log("skillFromDb", skillFromDb);

        await dataSource.getRepository(Grade).save({
            grade : req.body.grade,
            wilder : req.body.wilder,
            skill : req. body.skill,
            });
        res.send("Grade created");
    } catch (error) {
        res.send("Failed to create Grade");
        console.error(error);
    }
},

read : async (req: Request, res: Response) => {
    try {
        const grades = await dataSource.getRepository(Grade).find();
        res.send(grades);
    } catch (error) {
        res.send("Failed to retrieve Grades");
    }
}

};

export default gradeController;