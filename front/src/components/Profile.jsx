import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Links from './Links';
import axios from 'axios';
import Profile_posts from '../components/Profile_posts';
import Bio_popup from './Bio_popup';
import Tg_popup from './Tg_popup';
import Ds_popup from './Ds_popup';
import Profile_pic_popup from './Profile_pic_popup';
const Home = () => {
  
  const [user,setUser] = useState([])
 
 
	useEffect(() => {
		  (async () =>{
			const config={
				headers:{
				  'Content-Type':'application/json'
				},
				params:{
					links:'',
					posts:''
				},
				withCredentials:true,
			  }
			try{
			  const {data} = await axios.get(
				
				`http://127.0.0.1:8000/home/`,config
			  );
			  
			  setUser(data.user)
			  console.log(data.user) 
			}
			catch (e){
			  console.log('not user')
			}
		  })();
		  
	  },[]);
 
  return (
    <div>
		<Profile_pic_popup/>
		<Bio_popup/>
		<Tg_popup/>
		<Ds_popup/>
	<div className="profile-title">Профиль</div>

		
      {user.map((child) =>
	  	<div className="profile">
			
			<div className="profile_left">
				<div className="profile_img">
					<img src={child.author_ava} alt="author_ava" type="button"  data-bs-toggle="modal" data-bs-target="#pic_popup" />
				</div>
				
				<div className="profile_name">
					{child.username}
				</div>
				<div className="profile_links">
					
				<div className='profile_link discord'>Discord: {child.links.Discord} <a type="button"  data-bs-toggle="modal" data-bs-target="#ds_popup">
				<i class="bi bi-pencil"></i>
				</a> 
				</div>
				<br />
				<div className='profile_link telegram'>Telegram: @{child.links.Telegram} 
				<a type="button"  data-bs-toggle="modal" data-bs-target="#tg_popup">
				<i class="bi bi-pencil"></i>
				</a></div>	
			
					</div>
			</div>
			<div className="profile_right">
				<div className="profile_bio">
          <div className="profile_bio_hint">about me <a type="button"  data-bs-toggle="modal" data-bs-target="#bio_popup">
	<i class="bi bi-pencil"></i></a></div>
					<div className="profile_bio_text">{child.bio}</div>
				</div>
				<div className="profile_posts">
          <div className="user_profile_posts_title">Последние посты</div>
				<Profile_posts posts={child.posts}/>
				</div>
			</div>
		</div>
         )}
    </div>
  )
}

export default Home