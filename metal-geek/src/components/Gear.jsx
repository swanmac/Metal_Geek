import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import '../App.css'

export default function Gear () {

  let { id } = useParams()
  console.log(id)

  let navigate = useNavigate()
  
  const goToGear =(x)=>{
    navigate(`/gearDetails/${x.id}`)
  }
  const [gear, setGear] = useState([]);

 
    const getData = async () => {
      await axios.get('http://localhost:8000/gears/') 
        .then(res => {
          if (res) {
            setGear(res.data);
            console.log(res.data)
          }
        })
    }

    useEffect(() => {
        getData()
    }, [])


        return !gear? null: (
        <div className="grid">

                    {gear.map((value) => {
                return (
                    <div className="gear-grid" key={value.id} onClick={()=>goToGear(value)}>
                        <h2>{value.name}</h2>
                        <img src={value.photo_url} className="gear-photo"></img>
                        <p><b>Type:</b> {value.type}</p>
                        <p><b>Color:</b> {value.color}</p>

                        <br />
                        

                       
                        <br />
                        
                    
                    
                    </div>
                    
                )
            })}

        </div>
    )






}