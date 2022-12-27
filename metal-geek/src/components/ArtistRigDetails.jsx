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


    const goToRigDetails=(x)=>{
        navigate(`/rig-details/${x.id}`)
    }

return !artistRig? null: (
    
    <div className="artist-rig-wrapper">

        {/* <div className="artist-rig-header"> */}      
        <div className="artistRig">
            {artistRig.map((value) => {
                return (
            <div className="artist-rig" key={value.id} onClick={()=>goToRigDetails(value)}>
                {/* <h2>{artist.name}</h2> */}
                    {/* <p>{artist.description}</p> */}
                    <h2><b>Guitarist Name:</b> {value.name}</h2>
                    <p><b>Guitar:</b> {value.guitar}</p>
                    <p><b>Pedal 1:</b> {value.pedal1}</p>             
                    <p><b>Pedal 2:</b> {value.pedal2}</p>
                    <p><b>Pedal 3:</b> {value.pedal3}</p>      
                    <p><b>Amplfier:</b> {value.amplifier}</p>
                    <p><b>Year of Rig:</b> {value.rig_year}</p>
                    <img src={value.photo_url}></img>
            </div>
                )
             } )}
    </div>
    </div>
                
   )

}
