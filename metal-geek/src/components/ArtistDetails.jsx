import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function ArtistDetails () {

    let { id } = useParams()
    console.log(id)
    const navigate = useNavigate();

    const goToArtist=(x)=>{
        navigate(`/artistRigDetails/${id}`)
    }
    
    const [artist, setartist] = useState('')

    const getData = async () => {
        await axios.get(`https://dry-peak-27830.herokuapp.com/artists/${id}`)
        .then(res => {
            if (res) {
                setartist(res.data)
                console.log(res.data)
            }
        })
    }
    
    useEffect(() => {
        getData()
    }, [])

    console.log(id)
return !artist? null: (
    <div>
    <div className="artists-wrapper">

        <div className="artists-header">
        </div>

            <div className="md:text-xl max-w-md mx-auto pb-5 pt-10" key={artist.id} onClick={()=>goToArtist(artist)}>
                    <h2>{artist.name}</h2>
                    <img src={artist.photo_url}className="md:max-w-md mx-auto"></img>
                    <p><b>Artist Bio:</b> {artist.bio}</p>
                    <p><b>Bands:</b> {artist.band}</p>
                    <p><b>Website:</b> {artist.website}</p>
                   
            </div>
            <br />
            <div className="rig-buttons">
                    <p>
                        <button class="rig-buttons" onClick={() => navigate(`/artistRigDetails/${id}`)}>Artist Rig Details</button>
                    </p>
            </div>        

   
                    
    </div>
    </div>

)



}
