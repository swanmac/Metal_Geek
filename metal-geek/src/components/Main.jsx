import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Artist from './Artist'
import ArtistRig from './ArtistRig.jsx'
import ArtistDetails from './ArtistDetails.jsx'
import ArtistRigDetails from './ArtistRigDetails'
import RigDetails from './RigDetails.jsx'
import RigDesignDetails from './RigDesignDetails.jsx'
import { AddGear } from "./AddGear.jsx"
import Gear from './Gear.jsx'
import GearDetails from './GearDetails.jsx'
import { UpdateGear } from "./UpdateGear.jsx"
import GearUpdate from './GearUpdate.jsx'



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
                <Route path = "/gearDetails/:id" element = {<GearDetails gear/>} />
                <Route path = "/updateGear/:id" element={<UpdateGear />} /> 
                <Route path = "/GearUpdate" element={<GearUpdate />} /> 
                <Route path = "/add/" element={<AddGear />} />
                <Route exact path="about" element={<About/>}/>
                {/* <Route path="/gear/:id/update/" element={<UpdateGear />} />  */}
                {/* <Route path = "/gear/:id/delete/" element={<GearDelete />} />  */}

                
                
                
                

            </Routes>
        </div>
        
    )
}