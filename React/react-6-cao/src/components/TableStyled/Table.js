import { useEffect, useState } from 'react';
import { BillTable, BillTableContainer } from './Styled';

function BillsList() {
  const [billsArray, setBillsArray] = useState([]);
  async function getBills() {
    const resp = await fetch('db/db.json');
    const dataInJs = await resp.json();
    setBillsArray(dataInJs);
  }
  useEffect(() => {
    getBills();
  });
  return (
    <BillTableContainer>
      <h1 className='title'>Bills Table</h1>
      <BillTable>
        <thead>
          <tr>
            <th>Bill id</th>
            <th>Number of People</th>
            <th>Price</th>
          </tr>
        </thead>
        {billsArray.length === 0 && <h2>Loading Bills ...</h2>}
        {billsArray.map((bObj, id) => (
          <tbody key={id}>
            <tr>
              <td>{bObj.id}</td>
              <td>{bObj.people}</td>
              <td>{bObj.price}</td>
            </tr>
          </tbody>
        ))}
      </BillTable>
    </BillTableContainer>
  );
}

export default BillsList;
