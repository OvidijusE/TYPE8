import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import css from './AddMedsPage.module.css';

const AddMedsPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  function nameEnterHandler(event) {
    setNameValue(event.target.value);
  }

  function descriptionEnterHandler(event) {
    setDescriptionValue(event.target.value);
  }
  return (
    <div>
      <h1>Add Meds Page</h1>
      <form onSubmit={sendValues} className={css['add-meds-form']}>
        <h2>Add medications</h2>
        <label htmlFor='name'>Enter name: </label>
        <input onChange={nameEnterHandler} value={nameValue} type='text' name='' id='name' />
        <label htmlFor='description'>Enter description:</label>
        <input
          onChange={descriptionEnterHandler}
          value={descriptionValue}
          type='text'
          name=''
          id='description'
        />
        <div className={css['buttons']}>
          <Button main>Send</Button>
          <Link to='/medications'>
            <Button secondary>Go Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
  function sendValues(event) {
    event.preventDefault();

    if (nameValue === '') return;
    const medObj = {
      name: nameValue,
      description: descriptionValue,
    };
    async function postMeds() {
      const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medObj),
      });
      const dataInJs = await resp.json();
      console.log('dataInJs ===', dataInJs);
      if (dataInJs.changes === 1) {
        window.location.href = '/medications';
      } else {
        console.error('cannot create med');
      }
    }
    postMeds();

    console.log('medObj ===', medObj);
    // clear inputs
    setNameValue('');
    setDescriptionValue('');
  }
};

export default AddMedsPage;
