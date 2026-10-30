import { useState } from 'react'
import axios from 'axios'

export default function UploadFace() {

  const [image, setImage] = useState(null)

  const upload = async () => {

    if(!image){
      alert('Select image')
      return
    }

    const formData = new FormData()
    formData.append('image', image)

    const response = await axios.post(
      'http://127.0.0.1:8000/api/verify/',
      formData
    )

    alert(response.data.message)
  }

  return (
    <div style={{marginTop:'40px'}}>
      <h2>Face Verification</h2>

      <input
        type='file'
        onChange={(e)=>setImage(e.target.files[0])}
      />

      <br /><br />

      <button onClick={upload}>
        Verify Identity
      </button>
    </div>
  )
}
