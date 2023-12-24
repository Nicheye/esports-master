import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// Define the Login function.
const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
// Create the submit method.
  const submit = async e =>{
    e.preventDefault()

    const user = {
      username:username,
      password:password
    };
// Create the POST requuest
const config = {
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
};

const { data } = await axios.post('http://localhost:8000/token/', user, config);
  localStorage.clear();
  console.log(data.access)
  localStorage.setItem('access_token',data.access);
  localStorage.setItem('refresh_token',data.refresh);
  axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
  window.location.href = '/'
  }

  return (
    <div className="container">
      <form action="" className='loginform' onSubmit={submit}>
      <div class="login_form_title">РАШ вход/ МУТИ регистрацию</div>
      <div class="login-type-group">
        <div class="login_type active">Войти</div>
        <Link to='/register' class="login_type">Регистрация</Link>
			</div>
      <div class="input-login-wrapper">
      <label for="" class="input-login-label">Имя пользователя</label>
			<input type="text" class="login-input"
      name='username'  
       value={username}
      required 
      onChange={e => setUsername(e.target.value)}/>
      
      <label for="" class="input-login-label">Пароль</label>
			
			<input type="password" class="login-input"
      value={password}
      required
      onChange={e => setPassword(e.target.value)}
      ></input>
      <div class="login-check-group">

				 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
			<label class="form-check-label input-login-label" for="flexRadioDefault1">
				Светануть пароль
			</label>
			</div>
      </div>
      <button class="login-btn" type="submit">Войти</button>
      </form>
    </div>


  )
}

export default Login