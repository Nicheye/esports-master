import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Ds_popup = () => {
  const [discord,SetDiscord] = useState('')

  const submit = async e =>{
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
      };
      const social={
        discord:discord
      }
      const { data } = await axios.patch(`http://127.0.0.1:8000/home/`, social, config);
      l
	  
}
  


  return (
	<div class="modal fade" id="ds_popup" tabindex="-1" aria-labelledby="ds_popup" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">Редактировать Discord</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="" onSubmit={submit}>
      <div className="social_popup_title">Discord <i class="bi bi-discord"></i></div>
      
			
			<input type="text" class="login-input social_input"
      value={discord}
      required
      placeholder='Введите Discord'
      onChange={e => SetDiscord(e.target.value)}
      ></input>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
      </div>
      </form>
    
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Ds_popup