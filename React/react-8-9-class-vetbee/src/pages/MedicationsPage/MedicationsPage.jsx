import css from './MedicationsPage.module.css';

import { useState, useEffect } from 'react';

import Button from '../../UI/Button';
import MedCard from '../../components/MedCard/MedCard';
import { Link } from 'react-router-dom';

const MedicationsPage = () => {
  const [medsArr, setMedsArr] = useState([]);

  const getMeds = async () => {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/');
    // const resp = await fetch('db/medications.json');
    const dataInJs = await resp.json();
    setMedsArr(dataInJs);
  };
  const deleteMeds = async (id) => {
    const resp = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/meds/${id}`, {
      method: 'DELETE',
    });
    console.log('resp ===', resp);
    getMeds();
  };
  useEffect(() => {
    getMeds();
  }, []);
  return (
    <div>
      <div className={css['page-title']}>
        <h1>Medications Page</h1>
        <Link to='/AddMedsPage'>
          <Button main>Add Medication</Button>
        </Link>
      </div>
      <div className={css['medications-cards-grid']}>
        {medsArr.length === 0 && <h2>Loading Meds ... 👨‍⚕️💊</h2>}
        {medsArr.map((mObj) => (
          <MedCard onDelete={deleteMeds} key={mObj.id} {...mObj} />
        ))}
      </div>
    </div>
  );
};

export default MedicationsPage;
