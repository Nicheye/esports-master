import React from 'react';

const Links = (props) => {
	const links = props.links
	
  return (
	<div>
	<div className='profile_link discord'>Discord: {links.Discord}  </div>
	<br />
	
	<div className='profile_link telegram'>Telegram: @{links.Telegram} 
	</div>	
	</div>
	
  )
}

export default Links