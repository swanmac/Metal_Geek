import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DeleteBtn from "./DeleteBtn.jsx"
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
        await axios.get(`http://localhost:8000/artists/${id}`)
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

            <div className="artist-details" key={artist.id} onClick={()=>goToArtist(artist)}>
                    <h2>{artist.name}</h2>
                    <img src={artist.photo_url}></img>
                    <p><b>Artist Bio:</b> {artist.bio}</p>
                    <p><b>Bands:</b> {artist.band}</p>
                    <p><b>Website:</b> {artist.website}</p>
                   
            </div>
            <div className="rig-buttons">
                    <p>
                        <button onClick={() => navigate(`/artistRigDetails/${id}`)}>Artist Rig Details</button>
                    </p>
            </div>        

            {/* <div className="crud-buttons">
                        <DeleteBtn></DeleteBtn>{" "}
                        <Link to='/CreateArtist'><button class="crud">Create Artist</button></Link>
                       <Link to='/EditArtist'><button class="crud">Update Artist</button></Link>
                        </div>    */}
                    
    </div>
    </div>

)



}
