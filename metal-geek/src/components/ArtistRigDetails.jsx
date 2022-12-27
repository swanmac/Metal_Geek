import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ArtistRigDetails () {

    let { id } = useParams()
    console.log(id)
    const navigate = useNavigate();
    const [artist, setArtist] = useState('')
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


const getArtist = async () => {
    await axios.get(`http://localhost:8000/artist/${id}`)
    .then(res => {
        if (res) {
            setArtist(res.data)
            console.log(res.data)
        }
    })
}

useEffect(() => {
    getArtist()
}, [])

const goToArtist=(x)=>{
    navigate(`/artist/${x.id}`)
}

return !artist? null: !artistRig? null:(
    
    <div className="artist-rig-details-wrapper">

        {/* <div className="artist-rig-header">       */}
        <div className="artistRig">
            
            <div className="artist-rig" key={artist.id} onClick={()=>goToArtist(artistRig)}>
                {/* <h2>{artist.name}</h2> */}
                    {/* <p>{artist.description}</p> */}
                
                    <p><b>Guitar:</b> {artist.guitar}</p>
                    <p><b>Pedal 1:</b> {artist.pedal1}</p>             
                    <p><b>Pedal 2:</b> {artist.pedal2}</p>
                    <p><b>Pedal 3:</b> {artist.pedal3}</p>      
                    <p><b>Amplfier:</b> {artist.amplifier}</p>
                    <p><b>Year of Rig:</b> {artist.rig_year}</p>
                    <img src={artist.photo_url}></img>
                    </div>
        </div>

        <div>
            <h1 id="upcoming-events-header">Upcoming Events</h1>

            <div className="upcoming-events">
        
        {(!artistRig)?
        <p>Artist details to come...</p>:
        <div>
        
        {artistRig.map((artistRig) => ( 
        (artist.id !== artistRig.artist_id)?
        null
        : 
        <div className="upcoming-events-card" onClick={()=>goToArtist(artistRig)}>
        <h3>{artistRig.name} on {artistRig.date}</h3>
        <img src={artistRig.photo_url}></img>
        <p id="more-info"> More Info  </p>
                   </div>
                    
                ))}
                </div>}
            </div>
        </div>

       
        </div>


    )
}
 



