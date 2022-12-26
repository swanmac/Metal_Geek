import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav () {
    return (
        <div className="nav">
            <div className="nav-bar">
            <Link className="nav-home"to ="/">HOME</Link>
            <Link className="nav-events"to="/artist">Guitarists</Link>
            <Link className="nav-events"to="/artistRig">Guitar Rigs</Link>
            </div>
        </div>
    )
}