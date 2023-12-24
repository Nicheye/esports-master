import React,{useState} from 'react'
import axios from 'axios';
const MateCreate = (props) => {
  const game = props.game
  console.log(game)
  const [title,setTitle] = useState('');
  const [description,setdescription] = useState('');
  const [type,setType] = useState(1);
  const [connection,setConnection] = useState('Telegram');
  const handleSubmit = async(e) =>{
	e.preventDefault();
	const config = {
		headers: {
		  'Content-Type': 'application/json'
		},
		withCredentials: true
	  };
	  
	  
	const article = {title:title,description:description,type:type,game:game,type_of_connection:connection}
	const { data } = await axios.post(`http://127.0.0.1:8000/games/mate/${game}/`, article, config);
	console.log(type)
	
  }
  return (
	
	<div className="container">
		<h2 className='title create_title'>Добавить анкету</h2>
		<form onSubmit={handleSubmit} className='create_form'>
			<div className="mate-create-top-wrapper">
			<div className="mate-create-top-group">
			<label htmlFor="" className='form_label'>фокус:</label>
			<select name="" id="" value={type} onChange={(e) => setType(e.target.value)}>
				<option value="1">fun</option>
				<option value="2">hard</option>
			</select>
			</div>
			
			<div className="mate-create-top-group">
			<label htmlFor="" className='form_label'>вид связи:</label>
			<select name="" id="" value={connection} onChange={(e) => setConnection(e.target.value)}>
				<option value="Telegram">Telegram</option>
				<option value="Discord">Discord</option>
			</select>
			</div>
			
			<div className="mate-create-top-group">
			<label htmlFor="" className='form_label'>Заголовок</label>
			<input type="text" required value={title} onChange={(e) =>setTitle(e.target.value)} />
			</div>
			
			</div>

			<div className="mate-create-bottom-group">
			<label htmlFor="" className='descr_label'>Описание</label>
			<br />
			<textarea type="text" required value={description} className='mate_text_area' onChange={(e) =>setdescription(e.target.value)} />

			
			<button className='login-btn'>Add Article</button>
			</div>
			
		</form>
	</div>
  )
}

export default MateCreate