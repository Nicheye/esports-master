import React from 'react'
import tg from '../assets/images/tg.png';
import vk from '../assets/images/vk.png'
import yt from '../assets/images/yt.png'
const Footer = () => {
  return (
	<footer className='footer fixed-bottom'>
		<div className="footer-content">
			<div className="footer-link">контакты:</div>
			<div className="footer-socials">
				<div className="footer-social">
					<div className="footer-social-title">VK</div>
					<a className="footer-social-img" href=''><img src={vk} className='footer-img' alt="" /></a>
				</div>
				<div className="footer-social">
					<div className="footer-social-title">TG</div>
					<a className="footer-social-img" href=''><img src={tg} className='footer-img' alt="" /></a>
				</div>
				<div className="footer-social">
					<div className="footer-social-title">YT</div>
					<a className="footer-social-img" href=''><img src={yt} className='footer-img' alt="" /></a>
				</div>
			</div>
			<div className="footer-link">esports@game.com</div>
		</div>
	</footer>
  )
}

export default Footer