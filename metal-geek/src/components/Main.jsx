import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Home'
import Artist from './Artist'
import ArtistRig from './ArtistRig.jsx'
import ArtistDetails from './ArtistDetails.jsx'
import ArtistRigDetails from './ArtistRigDetails'

export default function Main () {


    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Home home/>} />
                
                <Route path = "/artist" element = {<Artist artist/>} />
                <Route path = "/artistDetails/:id" element = {<ArtistDetails artist/>} />
                <Route path = "/artistRig" element = {<ArtistRig />} />
                <Route path = "/artistRig/:id" element ={<ArtistRigDetails/>}/>
            </Routes>
        </div>
    )
}