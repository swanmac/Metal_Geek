import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RigDetails () {
// let { id } = useParams()
    // console.log(id)
    const navigate = useNavigate();
    const [rigDetails, setRigDetails] = useState([])

    const getData = async () => {
        await axios.get(`https://dry-peak-27830.herokuapp.com/rig-detail`)
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

const goToRigDetails=(x)=>{
    navigate(`/rigDesignDetails/${x.id}`)
}

return !rigDetails? null: (
    
    <div className="rig-details-wrapper">

        {/* <div className="artist-rig-header"> */}      
        <div className="rig-details-top">
            {rigDetails.map((value) => {
                return (
            <div className="md:text-xl max-w-md mx-auto pb-5 pt-10" key={value.id} onClick={()=>goToRigDetails(value)}>
                {/* <h2>{artist.name}</h2> */}
                    {/* <p>{artist.description}</p> */}
                    <h2><b>Guitarist:</b> {value.name}</h2>             
                    <p><b>Rig Description:</b> {value.description}</p>
                    <p><b>Tuning:</b> {value.tuning}</p>
                    <img src={value.photo_url}className="mx-auto flex items-center"></img>
            </div>
                )
             } )}
    </div>
    </div>
                
   )

}
