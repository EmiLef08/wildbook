import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  grade: number

  @Column()
  skillId: number

  @Column()
  wilderId: number

  @ManyToOne(() => Wilder, (wilder) => wilder.grades)
  wilder: Wilder

  @ManyToOne(() => Skill, (skill) => skill.grades)
  skill: Skill
  
}

// module.exports = new EntitySchema({
//     name: "Grade",
//     columns: {
//       id: {
//         primary: true,
//         type: "int",
//         generated: true,
//       },
//       grade: {
//         type: "int",
//       },
//     },
//     relations: {
//       skill: {
//         target: "Skill",
//         type: "many-to-one",
//         eager: true,
//       },
//       wilder: {
//         target: "Wilder",
//         type: "many-to-one",
//         eager: true,
//       },
//     },
//   });
