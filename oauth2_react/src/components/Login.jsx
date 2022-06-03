import { Link } from 'react-router-dom';
import { generateCodeVerifier, generateCodeChalleange } from '../pkce/pkce';

const Login = () => {
  if (!sessionStorage.getItem('codeVerifier')) {
    const codeVerifier = generateCodeVerifier();
    sessionStorage.setItem('codeVerifier', codeVerifier);
    const codeChallenge = generateCodeChalleange(codeVerifier);
    sessionStorage.setItem('codeChallenge', codeChallenge);
  }

  return <Link to={'/redirect'}>Login</Link>;
};

export default Login;
