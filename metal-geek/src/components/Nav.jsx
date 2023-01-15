import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav () {
    return (
        <div className="nav">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

            <link href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap" rel="stylesheet"
            />
            <style>
            @import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');
            </style>              
            <div className="nav-bar">
            <Link className="nav-home"to ="/">HOME</Link>
            <Link className="nav-events"to="/artist">Guitarists</Link>
            <Link className="nav-events"to="/artistRig">Guitar Rigs</Link>
            <Link className="nav-events"to="/rigDetails">Rig Details</Link>
            <Link className="nav-events"to="/gear">Gear Database</Link>
            <Link className="nav-events"to="/add/">Add Gear</Link>
            </div>
        </div>
    )
}