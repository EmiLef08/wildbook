// import React from "react";
import styles from "./Skill.module.css";

export interface ISkillProps {
  title: string;
  votes: number;
}

const Skill = ({ title, votes }: ISkillProps) => {
    return (
        <div className={styles["skill-container"]}>
              <li>
                {title}
                <span className={styles.vote}>{votes}</span>
              </li>
        </div>
    );
};

export default Skill;