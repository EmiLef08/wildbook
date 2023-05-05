import React, { useEffect, useState } from "react";
import axios from "axios";

interface Wilder {
  id: number;
  name: string;
}

interface Props {
  wilders: Wilder[];
  setWilders: React.Dispatch<React.SetStateAction<Wilder[]>>;
}
 interface Skill {
  id: number;
  title: string;
 }

const AddSkillToWilderForm = ({ wilders, setWilders }: Props) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedWilder, setSelectedWilder] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  useEffect(() => {
    const fetchSkills = async () => {
      const result = await axios.get("http://localhost:8000/api/skill");
      console.log(result.data);
      setSkills(result.data);
    };
    fetchSkills();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("selectedWilder", selectedWilder);
        console.log("selected skills", selectedSkills);
        axios.put("http://localhost:8000/api/addskills", {
          wildername: selectedWilder,
          skillname: selectedSkills,
        });
      }}
    >
      <h3>Add Skill To Wilder</h3>
      <select
        onChange={(e) => {
          setSelectedWilder(e.target.value);
        }}
        defaultValue={"disabled"}
      >
        <option value="disabled" disabled>
          Select a wilder
        </option>
        {wilders.map((wilder) => (
          <option key={wilder.id} value={wilder.name}>
            {wilder.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          setSelectedSkills(
            Array.from(e.target.selectedOptions).map((el) => el.value)
          );
        }}
        defaultValue={["disabled"]}
        multiple
      >
        <option value="disabled" disabled>
          Select a skill
        </option>
        {skills.map((skill) => (
          <option key={skill.id} value={skill.title}>
            {skill.title}
          </option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  );
};

export default AddSkillToWilderForm;