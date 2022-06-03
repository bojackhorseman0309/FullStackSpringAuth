const token = () => {
  const codeVerifier = sessionStorage.getItem('codeVerifier');
  const code = sessionStorage.getItem('code');
  return `http://localhost:8080/oauth2/token?client_id=client&redirect_uri=http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=${code}&code_verifier=${codeVerifier}
  `;
};

export default token;
