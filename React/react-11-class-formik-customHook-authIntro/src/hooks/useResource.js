import axios from 'axios';
import { useEffect, useState } from 'react';

// custom hooks yra tiesiog specialios funkcijos kurios gali naudoti hooks
// turi prasideti su zodeliu 'use'

function useResource(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const { data } = await axios.get(url);
    console.log('data ===', data);
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return [data, setData];
}

export default useResource;
