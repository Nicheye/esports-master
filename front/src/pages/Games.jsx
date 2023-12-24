import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Games = () => {
	const [games,setGames] = useState([])
	useEffect(() => {
		  (async () =>{
			try{
			  const {data} = await axios.get(
				'http://127.0.0.1:8000/games/',{
				  headers:{
					'Content-Type':'application/json'
				  },
				  withCredentials:true,
				}
			  );
			  
			  setGames(data.games)
			  console.log(data.games)
			  
			}
			catch (e){
			  console.log('not auth')
			}
		  })();
	  },[]);
  return (
	<div className='main-container'>
		<div className="title game-title">ВЫБЕРИ ИГРУ</div>
		<div className="subtitle game-subtitle">ПО СВОЕМУ ИНТЕРЕСУ</div>
		<div className="game-card-wrapper">
		{games.map((game)=>
		<div className='game-card'>
		{/* <h3>{game.title}</h3> */}
		<Link to={`/game/${game.id}`}><img src={game.image_url} alt="" className='game-card-img' /></Link>
		

		</div>
		
		
	)}
		</div>
		</div>
  )
}

export default Games