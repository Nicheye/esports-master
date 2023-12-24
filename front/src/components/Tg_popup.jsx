
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Tg_popup = () => {
  const [telegram,SetTelegram] = useState('')

  const submit = async e =>{
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
      };
      const social={
        telegram:telegram
      }
      const { data } = await axios.patch(`http://127.0.0.1:8000/home/`, social, config);
    
	  
}
  
  return (
	<div class="modal fade" id="tg_popup" tabindex="-1" aria-labelledby="tg_popup" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">Редактировать Telegram</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="" onSubmit={submit}>
      <div className="social_popup_title">Telegram <i class="bi bi-telegram"></i></div>
      
			
			<input type="text" class="login-input social_input"
      value={telegram}
      required
      placeholder='Введите Telegram'
      onChange={e => SetTelegram(e.target.value)}
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

export default Tg_popup