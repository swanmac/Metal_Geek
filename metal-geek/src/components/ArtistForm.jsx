import { useState } from "react"
import axios from "axios"

export default function ArtistForm({artistId}) {
  const [formData, setFormData] = useState({
    artist: artistId,
    name: '',
    bio: '',
    website: 0,
    band: '',
    img: '',
  })
  
  return (
    <div>
      <form>

      </form>
    </div>  
  )
}