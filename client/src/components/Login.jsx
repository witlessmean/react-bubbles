import React, {useState} from "react";
import  {axiosWithAuth}  from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const history = useHistory()

  const [ loginCreds, setLogInCreds ] = useState({
    username: '',
    password: ''
  }) 

const onInputChange = (event) => {
  setLogInCreds({
    ...loginCreds, [event.target.name]: event.target.value
  })
}

const onSubmission = (event) => {
 event.preventDefault();
  axiosWithAuth().post('/api/login', loginCreds).then((response) => {
    //console.log("login response ", res);
    localStorage.setItem('token', JSON.stringify(response.data.payload))
      history.push("/bubblepage")
  }).catch((error) => {
    console.log(error)
  })
}

  return (
    <>
      <form  onSubmit={onSubmission}>

<label htmlFor="username-id"/>
<input name="username" id="username-id" type="text" placeholder="User Name" value={loginCreds.username} onChange={onInputChange}/>
<label htmlFor ="password-id"/>
<input name="password" id="password-id" type="password" placeholder="password" value={loginCreds.password} onChange={onInputChange} />    
      <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;


