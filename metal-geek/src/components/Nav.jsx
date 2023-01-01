import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav () {
    return (
        <div className="nav">
            <div className="nav-bar">
            <Link className="nav-home"to ="/">HOME</Link>
            <Link className="nav-events"to="/artist">Guitarists</Link>
            <Link className="nav-events"to="/artistRig">Guitar Rigs</Link>
            <Link className="nav-events"to="/rigDetails">Rig Details</Link>
            <Link className="nav-events"to="/gear">Gear Database</Link>
            {/* <Link to={"/add/"} className="nav-link"> Add an Artist</Link> */}
            </div>
        </div>
    )
}