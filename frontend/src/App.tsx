import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
// import Wilder from '../components/Wilder';
import axios from 'axios';
// import AddWilder from '../components/AddWilder';
// import PropTypes from "prop-types";

interface ISkillFromAPI {
  id: number; 
  name: string;
}

interface IGradeFromAPI {
  grade: number; 
  skill: ISkillFromAPI;
}

interface IWilderFromAPI {
  name: string;
  id: number;
  grades: IGradeFromAPI;
}

const formatWildersFromApi = (wilders: IWilderFromAPI[]): IWilderProps[] => wilders.map((wilder) => {
return {
  id: wilder.id,
  namde: wilder.name,
  skill: wilder.grades.map((grade) => {
    return { votes:grade.grade, title: grade.skill.name };
  }),
};
});


function App() {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);
  const [lastUpdate, setLastUpdate] = useState(new Date().getTime());
  useEffect(() => {
    const fetchWilders = async () => {
      const wilderFromApi = await axios.get<IWilderFromAPI[]>('http://localhost:8000/api/wilder');
      console.log(wilderFromApi);
      setWilders(formatWildersFromApi(wilderFromApi.data));
    };
    fetchWilders();
  }, [lastUpdate]);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className={styles.container}>
        <div className={styles.addNew}>
          <AddGradeForm />
          <AddWilderForm setLastUpdate={setLastUpdate} />
        </div>
        <h2>Wilders</h2>
        <section className={styles["card-row"]}>
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder.id}
                name={wilder.name}
                skills={wilder.skills}
                id={wilder.id}
                city={wilder.city}
              />
            );
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p></p>
        </div>
      </footer>
    </div>
  );
}

// App.propTypes = {
//   wildersData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       city: PropTypes.string,
//       skills: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.number.isRequired,
//           title: PropTypes.string.isRequired,
//           votes: PropTypes.number.isRequired,
//         })
//       ),
//     })
//   ),
//   setWildersData: PropTypes.func.isRequired,
// };

export default App;
