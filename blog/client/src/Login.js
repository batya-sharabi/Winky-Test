import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const clientId = "357559087367-2fsnvut6uh7rom4go6u6c3ev5epkief3.apps.googleusercontent.com";
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result.error);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('http://localhost:5000/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
    navigate(`/dashboard`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
            <GoogleLogin
              clientId={clientId}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            ></GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default Login;