import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import authorize from '../links/authorize';
import token from '../links/token';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router';

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams?.get('code')) {
      const authorizationCode = searchParams.get('code');
      sessionStorage.setItem('code', authorizationCode);
      const client = 'client';
      const secret = 'secret';
      const headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set(
        'Authorization',
        `Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`
      );

      const url = token();
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers,
      })
        .then(async (res) => {
          const token = await res.json();
          if (token?.id_token) {
            sessionStorage.setItem('id_token', token.id_token);
            navigate('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!searchParams?.get('code')) {
      const authorizeUrl = authorize();
      window.location.href = authorizeUrl;
    }
  });
  return <div>Redirecting...</div>;
};

export default Redirect;
