import React from 'react'
import { useParams } from "react-router-dom"
import Artist from '../components/Artist'

const DeleteBtn = () => {
    let { id } = useParams()
    console.log(id)
    
    const handleDelete = async () => {
        // await axios.delete(`http://localhost:8000/artists/${id}`)
        try {
            await Artist.delete (`/artists/${id}`)
        } catch (error){
            alert("An Error Occured")
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteBtn