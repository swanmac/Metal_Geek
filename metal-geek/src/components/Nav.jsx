import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import '../App.css'

export default function Nav () {

    const [open, setOpen] = useState(false);

    return (
        <header className='py-2'>
        <div className="nav flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">

        <img src="https://sunbizlocal.com/mlogo.png" width={159} height={39} />

        <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />

        <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

            <link href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap" rel="stylesheet"
            />
            <style>
            @import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');
            </style>              
            <div className="">
            <ul className='text-xl lg:flex lg:justify-between'> 
                <l1 className='lg:px-5 py-2 block'>     
            <Link className="nav-home"to ="/">HOME</Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link className="nav-events"to="/artist">Guitarists</Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link className="nav-events"to="/artistRig">Guitar Rigs</Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link className="nav-events"to="/rigDetails">Rig Details</Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link className="nav-events"to="/gear">Gear Database</Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link className="nav-events"to="/add/">Add Gear</Link></l1>
            </ul>
            </div>
            </nav>
        </div>
    </header>  
    )
}