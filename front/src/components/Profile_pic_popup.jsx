import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Profile_pic_popup = () => {
	const [image,SetImage] = useState([])

	const submit = async e =>{
	  e.preventDefault()
	  const config = {
		headers: {
		  'Content-Type': 'multipart/form-data'
		},
		withCredentials: true
		};
		const social={
			avatar:image.pictureAsFile
		}
		console.log(image)
		const { data } = await axios.patch(`http://127.0.0.1:8000/home/`, social, config);
		
		
  }
	
  
  const uploadPicture = (e) => {
	SetImage({
		/* contains the preview, if you want to show the picture to the user
		   you can access it with this.state.currentPicture
	   */
		picturePreview : URL.createObjectURL(e.target.files[0]),
		/* this contains the file we want to send */
		pictureAsFile : e.target.files[0]
	})
};
	return (
	  <div class="modal fade" id="pic_popup" tabindex="-1" aria-labelledby="pic_popup" aria-hidden="true">
	<div class="modal-dialog">
	  <div class="modal-content">
		<div class="modal-header">
		  <h1 class="modal-title" id="exampleModalLabel">Выберите картинку</h1>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
		<form action="" encType="multipart/form-data" onSubmit={submit}>
		<div className="social_popup_title">Выберите картинку <i class="bi bi-card-image"></i></div>
		
		

		<div class="mb-3">
  
		<input name='avatar' class="login-input social_input" type="file" id="formFile" 
		required
		placeholder='о мне'
		onChange={uploadPicture} />
		</div>
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

export default Profile_pic_popup