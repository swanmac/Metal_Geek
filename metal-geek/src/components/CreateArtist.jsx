import { useEffect, useState, useContext } from "react"
import { Button, Label, TextInput, ToggleSwitch } from 'flowbite-react'
import { DataContext } from "../DataContext"

export default function ArtistForm() {

    const { setHideHeader } = useContext(DataContext)

    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        website: '',
        band: '',
        img: '',
    })

    const handleLoginForm = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleLogin = async (e) => {
        try {
            const response = await Artist.post(`/artists/`, formData)
            return response.data
        } catch (error) {
            throw error 
        }
    }

    useEffect(() => {
        setHideHeader(true)
    })

    return (
        <div className="w-3/5 m-auto mt-20">


    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="">
            <div className="mb-2 block">
                <Label htmlFor="name" value="Artist Name"/>
            </div>
            <TextInput id="name" type="name" placeholder="artistname" name="name" value={formData.name} required={true} onChange={handleLoginForm}/>
        </div>

        <div>
            <div className="mb-2 block">
                <Label htmlFor="bio" value="Bio"/>
            </div>
            <TextInput id="bio" type="bio" placeholder="bio" name="bio" value={formData.bio} required={true} onChange={handleLoginForm}/>
        </div>

        <div>
            <div className="mb-2 block">
                <Label htmlFor="website" value="Website"/>
            </div>
            <TextInput id="website" type="website" placeholder="website" name="website" value={formData.website} required={true} onChange={handleLoginForm}/>
        </div>

        <div>
            <div className="mb-2 block">
                <Label htmlFor="band" value="Band"/>
            </div>
            <TextInput id="band" type="band" placeholder="band" name="band" value={formData.state} required={true} onChange={handleLoginForm}/>
        </div>


        <div>
            <div className="mb-2 block">
                <Label htmlFor="Image" value="Image"/>
            </div>
            <TextInput id="img" type="img" placeholder="img" name="img" value={formData.img} required={false} onChange={handleLoginForm}/>
        </div>

        <Button type="submit">
            Submit
        </Button>
        </form>


    </div>  
)
}