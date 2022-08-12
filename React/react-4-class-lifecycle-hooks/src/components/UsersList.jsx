import { useEffect, useState } from 'react';
import User from './User';

const userDummyData = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Jill' },
  { id: 3, name: 'Mike' },
];

function UsersList() {
  console.log('UsersList ran');
  const [usersArray, setUsersArray] = useState([]);

  async function getUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataInJs = await resp.json();
    setUsersArray(dataInJs);
    // setUsersArray(userDummyData);
  }

  //   useEffect(() => {}, []) pasileidzia tik viena karta kai sugeneruojamas komponentas
  useEffect(() => {
    console.log('useEffect ran');
    getUsers();
  }, []);
  return (
    <div>
      <h2>Users</h2>

      <ul>
        {/* {usersArray.length === 0 && <h2>Loading users...</h2>}
        {usersArray.map((uObj) => (
          <li key={uObj.id}>
            {uObj.name} e-mail: {uObj.email}
          </li>
        ))} */}
        <User data={usersArray} />
      </ul>
      <hr />
      <hr />
    </div>
  );
}

export default UsersList;
