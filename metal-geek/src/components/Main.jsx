import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import Artist from './Artist'
import ArtistRig from './ArtistRig.jsx'
import ArtistDetails from './ArtistDetails.jsx'
import ArtistRigDetails from './ArtistRigDetails'
import RigDetails from './RigDetails.jsx'
import RigDesignDetails from './RigDesignDetails.jsx'
import { AddArtist } from "./AddArtist.jsx"
import { Gear } from "./Gear.jsx"
import { UpdateArtist } from "./UpdateArtist.jsx"



export default function Main () {

    

    return (

        <div>
            <Routes>
                <Route path = "/" element = {<Home home/>} />
                <Route path = "/artist" element = {<Artist artist/>} />
                <Route path = "/artistDetails/:id" element = {<ArtistDetails artist/>} />
                <Route path = "/artistRig" element = {<ArtistRig />} />
                <Route path = "/artistRigDetails/:id" element ={<ArtistRigDetails/>}/>
                <Route path = "/RigDetails" element = {<RigDetails />} />
                <Route path = "/RigDesignDetails/:id" element = {<RigDesignDetails />} />
                <Route path = "/gear" element = {<Gear />} />
                {/* <Route path="/add/" element={<AddArtist />} />
                <Route path="/artist/:id/update/" element={<UpdateArtist />} /> */}
                {/* <Route path = "/gear" element = {<Gear />} /> */}
                
                

            </Routes>
        </div>
        
    )
}