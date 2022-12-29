import axios from 'axios'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteBtn from "./DeleteBtn.jsx"
import { Link } from "react-router-dom";
import ArtistDetails from './ArtistDetails.jsx'


export default function Artist () {

    let { id } = useParams()

    let navigate = useNavigate()

    const goToArtist =(x)=>{
        navigate(`/artistDetails/${x.id}`)
    }

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
                        

                       
                        <br />
                        {/* <div className="crud-buttons">
                        <DeleteBtn></DeleteBtn>{" "}
                        <Link to='/CreateArtist'><button class="crud">Create Artist</button></Link>
                       <Link to='/EditArtist'><button class="crud">Update Artist</button></Link>
                        </div>   
                     */}
                    
                    </div>
                    
                )
            })}

        </div>
    )






}


