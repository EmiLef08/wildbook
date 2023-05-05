// import React from "react";
import styles from "./Wilder.module.css";
import blank_profile from "../assets/8bRN5ga.png";
import Skill, { ISkillProps } from "./Skill";
// import PropTypes from "prop-types";
import axios from "axios";

export interface IWilderProps {
  name: string;
  id: number;
  skills: ISkillProps[];
  city: string;
}

  const handleDelete = (id: number) => {
    axios.delete("http://localhost:8000/api/wilder/" + id)
  };
  const Wilder = ({ name, id, skills, city }: IWilderProps) => {
    return (
      <article className={styles.card}>
        <img src={blank_profile} alt="Wilder Profile" />
        <h3>{name}</h3>
        {city ? <h4>{city}</h4> : null}
        <button className={styles.button} onClick={() => handleDelete(id)}>Delete</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <h4>Wilder Skills</h4>
        <ul className={styles.skills}>
          {skills.map((skill) => (
           <Skill key={skill.title} title={skill.title} votes={skill.votes} />
          ))}
        </ul>
      </article>
    );
  };

  // Wilder.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   skills: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       title: PropTypes.string.isRequired,
  //       vote: PropTypes.number.isRequired,
  //     })
  //   ).isRequired,
  //   id: PropTypes.number.isRequired,
  //   city: PropTypes.string,
  //   setWildersData: PropTypes.func.isRequired,
  // };  

export default Wilder;
