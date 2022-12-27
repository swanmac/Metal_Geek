import { useState } from 'react'
import { Label, TextInput, ToggleSwitch, Dropdown } from 'flowbite-react'

export default function EditArtist ({artist}) {

//Initial value for useState for Editing artist
const artistEdit = {
    id: artist.id,
    name: artist.name,
    bio: artist.bio,
    website: artist.website,
    band: artist.band, 
    img: artist.img,
}

//useState, with editartist as current state and setEditartist as func to update state
const [editartist, setEditartist] = useState(artistEdit)

    //edit's handleChange w/ text input value updating artistText
    const editHandleChange = (artist) => {
        setEditartist({...editartist,[artist.target.name]: artist.target.value})
    }
    
    //edit's handleSubmit to actualize changes
    //runs axios call and updates state
    const editHandleSubmit = (artist) => {
    artist.preventDefault();
        editartists(editartist)
        setEditartist(editartist)
        window.location.reload()
    }

    //axios call to update
    const editartists = async() => {
        const post = await Artist.put(`/artists/${artist.id}`, editartist)
        console.log(post.data)
        setEditartist(post.data)
    }

    return (
        <div>
            

            <Dropdown>
                <form onSubmit={editHandleSubmit}>
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Artist Name"/>
                    </div>
                    <TextInput name="name" onChange={editHandleChange} value={editartist.name} />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bio" value="Bio"/>
                    </div>
                    <TextInput name="bio" value={editartist.bio} onChange={editHandleChange}/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="website" value="Website"/>
                    </div>
                    <TextInput name="website" value={editartist.website} onChange={editHandleChange}/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="band" value="Band"/>
                    </div>
                    <TextInput name="band" value={editartist.band} onChange={editHandleChange}/>
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Image" value="Image"/>
                    </div>
                    <TextInput name="img" value={editartist.img} onChange={editHandleChange}/>
                </div>

                <button className="button-styling" type="submit">
                Edit Artist
                </button>
                </form>
            </Dropdown>
                


        </div>
    )
}