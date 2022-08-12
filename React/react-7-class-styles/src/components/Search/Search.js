import { useState, useEffect } from 'react';
import Container from '../Container';

// const initUsers = [
//   { id: 1, name: 'James', town: 'London' },
//   { id: 2, name: 'Mike', town: 'London' },
//   { id: 3, name: 'Jill', town: 'Kaunas' },
//   { id: 4, name: 'Jake', town: 'Kaunas' },
//   { id: 5, name: 'Bob', town: 'Vilnius' },
// ];

function Search() {
  //   const [stateUsers, setStateUsers] = useState(initUsers);
  const [stateUsers, setStateUsers] = useState([]);
  const [activeTown, setActiveTown] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const resp = await fetch('users.json');
    const dataInJs = await resp.json();
    setStateUsers(dataInJs);
  }

  // infered value
  const filteredUsers =
    activeTown !== '' ? stateUsers.filter((uObj) => uObj.town === activeTown) : stateUsers;

  return (
    <Container>
      <button onClick={() => setActiveTown('')}>All</button>
      <button onClick={() => setActiveTown('London')}>London</button>
      <button onClick={() => setActiveTown('Kaunas')}>Kaunas</button>
      <input type='search' placeholder='enter name' />

      <ul className=''>
        {filteredUsers.map((uObj) => (
          <li key={uObj.id}>
            Name: {uObj.name} || town: {uObj.town}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Search;
