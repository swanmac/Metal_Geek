import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const GearUpdate = ({ gear, id, name, }) => {
  // let navigate = useNavigate()



  const [update, setUpdate] = useState(false)
  const [formValues, setFormValues] = useState({
    name: gear.name,
    type: gear.type,
    color: gear.color,
    photo_url: gear.photo_url,
  })
  console.log(name)
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios
      .put(`http://localhost:8000/gears/${id}`, formValues)

      .then((response) => {
        // navigate("/products")
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="update-form">
      {update ? (
        <form className="col" onSubmit={handleSubmit}>
          <div className="update-close-button">
            <button
              className="close-update-button"
              onClick={() => setUpdate(false)}
            >
              &times;
            </button>
          </div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={formValues.name}
          ></input>
          <input
            name="photo_url"
            type="img"
            placeholder="Photo"
            onChange={handleChange}
            value={formValues.photo_url}
          ></input>
          <input
            className="create-update"
            name="type"
            type="text"
            placeholder="type"
            onChange={handleChange}
            value={formValues.type}
          ></input>
          <div className="update-close-button">
            <textarea
              name="color"
              type="text"
              placeholder="color"
              onChange={handleChange}
              value={formValues.color}
            ></textarea>
            <button className="submit-button" type="submit">
              Submit Changes
            </button>
          </div>
        </form>
      ) : (
        <button className="update-button" onClick={() => setUpdate(true)}>
          Edit
        </button>
      )}
    </div>
  )
}

export default GearUpdate