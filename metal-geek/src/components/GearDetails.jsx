import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { headers } from "../services/artist.service";
import { Link } from "react-router-dom";

export default function GearDetails () {

    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate();

    const goToGear=(x)=>{
        navigate(`/gearDetails/${x.id}`)
    }
    
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    const [gear, setGear] = useState('')

    const [deleted, setDeleted] = useState(false);



    const getData = async () => {
        await axios.get(`http://localhost:8000/gears/${id}`)
        .then(res => {
            if (res) {
                setGear(res.data)
                console.log(res.data)
            }
        })
    }
    
    useEffect(() => {
        getData()
    }, [])

    console.log(id)

    // const retrieveAllGear = () => {
    //     axios
    //       .get(`http://localhost:8000/gears/`, {
    //         headers: {
    //           headers,
    //         },
    //       })
    //       .then((response) => {
    //         setGear(response.data);
    //         console.log(gear);
    //       })
    //       .catch((e) => {
    //         console.error(e);
    //       });
    //   };

    const deleteGear = (id) => {
        axios
          .delete(`http://localhost:8000/gears-delete/${id}`, {
            headers: {
              headers,
            },
          })
          .then((response) => {
            setDeleted(true);
            setGear();
          })
          .catch((e) => {
            console.error(e);
          });
      };

    //   useEffect(() => {
    //     retrieveAllGear();
    //   }, [retrieveAllGear]);
    
      const handleUpdateClick = (id) => {
        navigate(`/updateGear/${id}`);
      };



    
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
                        <button onClick={() => navigate(`/artistRigDetails/${id}`)ar}>Artist Rig Details</button>
                    </p>
            </div>         */}
        <div className="card-container">
                <div
                  className="btn-group justify-content-around w-75 mb-1 "
                  data-toggle="buttons"
                >
                  <span>
                    <button
                      className="btn-info"
                      onClick={() => handleUpdateClick(gear.id)}
                    >
                      Update
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn-danger"
                      onClick={() => deleteGear(gear.id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
                </div>
            
          {/* ))} */}


    </div>
    </div>

)



}
