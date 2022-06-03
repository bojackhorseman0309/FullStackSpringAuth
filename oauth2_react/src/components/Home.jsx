import { useEffect, useState } from 'react';
import demo from '../links/demo';

const Home = () => {
  const [demoString, setDemoString] = useState('default');
  useEffect(() => {
    const token = sessionStorage.getItem('id_token');
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', `Bearer ${token}`);

    const resourceUrl = demo();
    fetch(resourceUrl, {
      method: 'GET',
      mode: 'cors',
      headers,
    }).then(async (demoData) => {
      const demo = await demoData.text();
      setDemoString(demo);
    });
  });
  return (
    <>
      <div className='header'>
        <h1>Home</h1>
      </div>
      <div>
        <p>{demoString}</p>
      </div>
    </>
  );
};

export default Home;
