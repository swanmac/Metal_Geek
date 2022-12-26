import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Artist () {
    let navigate = useNavigate()
    const [artists, setArtists] = useState([])
 
        const getData = async () => {
        await axios.get('http://localhost:8000/artists')
        .then(res => {
            if (res) {
                setArtists(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

        const goToArtist =(x)=>{
        navigate(`${x.id}`)
    }

        return !artists? null: (
        <div className="artists">
            {artists.map((value) => {
                return (
                    <div className="artist-card" key={value.id} onClick={()=>goToArtist(value)}>
                        <h2>{value.name}</h2>
                        <img src={value.photo_url}></img>
                        <p>{value.bio}</p>
                        <p><b>Bands:</b> {value.band}</p>
                        <p><b>Website:</b> {value.website}</p>
                       
                        <br />
                    </div>
                )
            })}

        </div>
    )






}


