import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesList() {
  const [serviceArray, setServiceArray] = useState([]);
  async function getServices() {
    const resp = await fetch('./db/services.json');
    const dataInJS = await resp.json();
    setServiceArray(dataInJS);
  }
  useEffect(() => {
    getServices();
  });

  return (
    <div className='cards-grid'>
      {serviceArray.map((sObj) => (
        <article className='card' key={sObj.id}>
          <div className='up-side'>
            <i className={`fa ${sObj.icon}`} aria-hidden='true'></i>
          </div>

          <div className='bottom-side'>
            <h2 className='card-title'>{sObj.title}</h2>
            <p className='card-summary'>{sObj.summary}</p>
            <a className='learn-more' href='/'>
              Learn more
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
