import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RigDesignDetails () {

    let { id } = useParams()
    console.log(id)
    const navigate = useNavigate();

    const goToRigDesignDetails=()=>{
        navigate(`/artist/`)
    }

    // const [artist, setArtist] = useState('')
    const [rigDetails, setRigDetails] = useState('')

    const getData = async () => {
        await axios.get(`https://dry-peak-27830.herokuapp.com/rig-detail/${id}`)
        .then(res => {
            if (res) {
                setRigDetails(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])


   

return !rigDetails? null: (
    <div>
    <div className="rig-design-wrapper">

    <div className="rig-design-header">
        </div>
            
            <div className="rig-design-details" key={rigDetails.id} onClick={()=>goToRigDesignDetails(rigDetails)}>
                {/* <h2>{artist.name}</h2> */}
                    {/* <p>{artist.description}</p> */}
                    <h2><b>Guitarist:</b> {rigDetails.name}</h2>
                    <p><b>Rig Description:</b> {rigDetails.description}</p>
                    <p><b>Tuning:</b> {rigDetails.tuning}</p>             
                    <img src={rigDetails.photo_url}className="rig-design-photo"></img>
            </div>
                
             
    </div>
    </div>
                
   )

}
