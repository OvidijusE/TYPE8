import css from './PetsPage.module.css';
import { useState, useEffect } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';

const PetsPage = () => {
  const [petsArr, setPetsArr] = useState([]);

  // function handleDelete(deleteId) {
  //   const filtered = petsArr.filter((pObj) => pObj.id !== deleteId);
  //   console.log('filtered ===', filtered);
  //   setPetsArr(filtered);
  // }

  const getPets = async () => {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
    // const resp = await fetch('db/pets.json');
    const dataInJs = await resp.json();
    setPetsArr(dataInJs);
  };

  const deletePets = async (id) => {
    const resp = await fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`, {
      method: 'DELETE',
    });
    console.log('resp ===', resp);
    getPets();
  };
  useEffect(() => {
    getPets();
  }, []);
  return (
    <div>
      <div className={css['page-title']}>
        <h1>Pets Page</h1>
        <Link to='/AddPetsPage'>
          <Button main>ADD PET</Button>
        </Link>
      </div>
      <div className={css['pets-cards-grid']}>
        {petsArr.length === 0 && <h2>Loading Pets ... 🐶🐱🐰</h2>}
        {petsArr.map((pObj) => (
          <PetCard onDelete={deletePets} key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default PetsPage;
