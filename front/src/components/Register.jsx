import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// Define the Login function.
const Register = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
// Create the submit method.
  const submit = async e =>{
    e.preventDefault()

    const user = {
      username:username,
      password:password,
      email:email,
    };
// Create the POST requuest


    await fetch('http://localhost:8000/register/',{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify(
        {
          username,
          password,
          email,
        }
      )
    });
    window.location.href='/login'
  
  }

  return (
    <div className="container">
      <form action="" className='loginform' onSubmit={submit}>
      <div class="login_form_title">РАШ вход/ МУТИ регистрацию</div>
      <div class="login-type-group">
      <Link to='/login' class="login_type">Войти</Link>
        <div class="login_type active">Регистрация</div>
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


  <label for="" class="input-login-label">E-mail</label>
			
			<input type="email" class="login-input"
      value={email}
      required
      onChange={e => setEmail(e.target.value)}
      ></input>
      <div class="login-check-group">

				 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
			<label class="form-check-label input-login-label" for="flexRadioDefault1">
				Светануть пароль
			</label>
			</div>
      </div>
      <button class="login-btn" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register