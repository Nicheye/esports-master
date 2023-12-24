import React,{useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios';
import MateCreate from '../components/MateCreate';
import { Link } from 'react-router-dom';
const Mate = () => {
	var {id} = useParams();
	const [mates,setMates] = useState([])
	const [image,setImage] = useState([])
	useEffect(() => {
		  (async () =>{
			try{
			  const {data} = await axios.get(
				`http://127.0.0.1:8000/games/mate/${id}/`,{
				  headers:{
					'Content-Type':'application/json'
				  },
				  withCredentials:true,
				}
			  );
			  
			  setMates(data.mates)
			  
			  
			}
			catch (e){
			  console.log('wrong game')
			}
			try{
				const {data} = await axios.get(
				  `http://127.0.0.1:8000/games/game/${id}/`,{
					headers:{
					  'Content-Type':'application/json'
					},
					withCredentials:true,
				  }
				);
				
				setImage(data.image_url)
				
				
			  }
			  catch (e){
				console.log('wrong image')
			  }
		  })();
	  },[]);
	 
	  var id = Number(id)
	  if(localStorage.getItem('access_token') ===null){
		<div className='container'>{mates.map((mate)=>
			<div>
			<h3>{mate.title}</h3>
			<h1 style={{color:mate.color}}>{mate.type}</h1>
			<p>{mate.description}</p>
			<a href=""></a>
			</div>
		)}
		</div>
  		}
	else{
		return(
			<div className='main-container'>
				<div className="title mate-title-big">
					ВЫБЕРИ МЕЙТА
				</div>
				<div className="subtitle mate-subtitle">
					СКИЛЛ ИЛИ ФАН
				</div>
				<div className='game_mate_img'>
				<img src={image} alt=""  />
				</div>
				
				<div className="mate-card-wrapper">
				{mates.map((mate)=>
				<div className={`mate-card ${mate.type}`}>

				<div className="mate-card-content">
			    <Link to={`/profik/${mate.author_id}`} ><img src={mate.author_ava} className='author_ava' alt="" /></Link>	
				<div className="pidori">
				<h2 className="mate-author">{mate.created_by}</h2>
				<h3 className='mate-type' >{mate.type}</h3>
				<p className='mate-description'>{mate.description}</p>
				</div>
				</div>
				<h4 className='mate-title'>{mate.title}</h4>
				
				</div>
			)}
			</div>
			   <div className="mate-card-wrapper">
			   
			   </div>
				
			
			<MateCreate game={id}/>
			</div>
		)
	}
  return (
	<div className='main-container'>
				<div className="title mate-title-big">
					ВЫБЕРИ МЕЙТА
				</div>
				<div className="subtitle mate-subtitle">
					СКИЛЛ ИЛИ ФАН
				</div>
				<img src={image} alt="" />
			   <div className="mate-card-wrapper">
			   {mates.map((mate)=>
				<div className={`mate-card ${mate.type}`}>

				<div className="mate-card-content">
				<img src={mate.author_ava} className='author_ava' alt="" />
				<div className="pidori">
				<h2 className="mate-author">{mate.created_by}</h2>
				<h3 className='mate-type' >{mate.type}</h3>
				<p className='mate-description'>{mate.description}</p>
				</div>
				</div>
				<h4 className='mate-title'>{mate.title}</h4>
				
				</div>
			)}
			   </div>
			
			</div>
  )
  
}

export default Mate