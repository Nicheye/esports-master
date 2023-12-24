import React from 'react'

const Profile_posts = (props) => {
	const posts = props.posts
  return (
	<div>{posts.map((post)=>
		<div className='profile_post'>
			<div className='profile_post_title'>{post.title}</div>
			<div className='profile_post_game'>
				<img src={post.game_ava} alt="" /></div>
			<div className='profile_post_description'>{post.description}</div>
			
		</div>
		
		
		)}</div>
  )
}

export default Profile_posts