import * as crypto from 'crypto-js';

const base64Url = (string) => {
  return string
    .toString(crypto.enc.Base64)
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

const generateCodeVerifier = () => {
  return base64Url(
    crypto.enc.Base64.stringify(crypto.lib.WordArray.random(32))
  );
};

const generateCodeChallenge = () => {
  const codeVerifier = sessionStorage.getItem('codeVerifier');
  return base64Url(crypto.SHA256(codeVerifier));
};

export {
  base64Url,
  generateCodeVerifier,
  generateCodeChallenge as generateCodeChalleange,
};
