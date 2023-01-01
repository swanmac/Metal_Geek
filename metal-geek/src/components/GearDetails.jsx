import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function GearDetails () {

    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate();

    const goToGear=(x)=>{
        navigate(`/gearDetails/${id}`)
    }
    
    const [gear, setgear] = useState('')

    const getData = async () => {
        await axios.get(`http://localhost:8000/gears/${id}`)
        .then(res => {
            if (res) {
                setgear(res.data)
                console.log(res.data)
            }
        })
    }
    
    useEffect(() => {
        getData()
    }, [])

    console.log(id)
return !gear? null: (
    <div>
    <div className="gears-wrapper">

        <div className="gears-header">
        </div>

            <div className="gear-details" key={gear.id} onClick={()=>goToGear(gear)}>
                    <h2>{gear.name}</h2>
                    <img src={gear.photo_url}></img>
                    <p><b>Type:</b> {gear.type}</p>
                    <p><b>Color:</b> {gear.color}
                    </p>
                   
            </div>
            {/* <div className="rig-buttons">
                    <p>
                        <button onClick={() => navigate(`/artistRigDetails/${id}`)}>Artist Rig Details</button>
                    </p>
            </div>         */}

   
                    
    </div>
    </div>

)



}
