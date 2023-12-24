import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Links from '../components/links';
import axios from 'axios';
import Profile_posts from '../components/Profile_posts';
const Personal_page = () => {
  var {id} = useParams();
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
				
				`http://127.0.0.1:8000/profile/${id}/`,config
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
	<div className="profile-title">Профиль</div>
      {user.map((child) =>
	  	<div className="profile">
			
			<div className="profile_left">
				<div className="profile_img">
					<img src={child.author_ava} alt="author_ava" />
				</div>
				
				<div className="profile_name">
					{child.username}
				</div>
				<div className="profile_links">
					
					<Links links={child.links}></Links>
			
					</div>
			</div>
			<div className="profile_right">
			<div className="profile_bio">
          <div className="profile_bio_hint">about me</div>
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

export default Personal_page