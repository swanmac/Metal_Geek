import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ArtistRigDetails () {

    let { id } = useParams()
    console.log(id)
    const navigate = useNavigate();

    const goToArtistRig=(x)=>{
        navigate(`/rigDesignDetails/${x.id}`)
    }

    // const [artist, setArtist] = useState('')
    const [artistRig, setArtistRig] = useState('')

    const getData = async () => {
        await axios.get(`http://localhost:8000/artist-rig/${id}`)
        .then(res => {
            if (res) {
                setArtistRig(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])


   

return !artistRig? null: (
    <div>
    <div className="artist-rig-wrapper">

    <div className="artists-rig-header">
        </div>
            
            <div className="artist-rig-details" key={artistRig.id} onClick={()=>goToArtistRig(artistRig)}>
                {/* <h2>{artist.name}</h2> */}
                    {/* <p>{artist.description}</p> */}
                    <h2><b>Guitarist Name:</b> {artistRig.name}</h2>
                    <p><b>Guitar:</b> {artistRig.guitar}</p>
                    <p><b>Pedal 1:</b> {artistRig.pedal1}</p>             
                    <p><b>Pedal 2:</b> {artistRig.pedal2}</p>
                    <p><b>Pedal 3:</b> {artistRig.pedal3}</p>      
                    <p><b>Amplfier:</b> {artistRig.amplifier}</p>
                    <p><b>Year of Rig:</b> {artistRig.rig_year}</p>
                    <img src={artistRig.photo_url} className="rig-photo"></img>
            </div>
                
             
    </div>
    </div>
                
   )

}
