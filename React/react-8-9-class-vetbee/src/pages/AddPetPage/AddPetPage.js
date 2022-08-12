import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import css from './AddPetPage.module.css';

const AddPetPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [dobValue, setDobValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  function nameEnterHandler(event) {
    setNameValue(event.target.value);
  }

  function dobEnterHandler(event) {
    setDobValue(event.target.value);
  }

  function emailEnterHandler(event) {
    setEmailValue(event.target.value);
  }
  return (
    <div>
      <h1>Add Pet Page</h1>
      <form onSubmit={sendValues} className={css['add-pet-form']}>
        <h2>Add your pet</h2>
        <label htmlFor='name'>Enter name</label>
        <input onChange={nameEnterHandler} type='text' value={nameValue} id='name' />
        <label htmlFor='dob'>Enter date of birth: </label>
        <input onChange={dobEnterHandler} type='date' value={dobValue} id='dob' />
        <label htmlFor='email'>Enter email: </label>
        <input onChange={emailEnterHandler} type='email' value={emailValue} id='email' />
        <div className={css['buttons']}>
          <Button main>Send</Button>
          <Link to='/'>
            <Button secondary>Go Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
  function sendValues(event) {
    event.preventDefault();

    if (nameValue === '') return;
    const petObj = {
      name: nameValue,
      dob: dobValue,
      client_email: emailValue,
    };
    async function postPets() {
      const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(petObj),
      });
      const dataInJs = await resp.json();
      console.log('dataInJs ===', dataInJs);
      if (dataInJs.changes === 1) {
        window.location.href = '/';
      } else {
        console.error('cannot create pet');
      }
    }
    postPets();

    console.log('petObj ===', petObj);
    // clear inputs
    setNameValue('');
    setDobValue('');
    setEmailValue('');
  }
};

export default AddPetPage;
