import { React } from 'react';
import '../App.css';

function NavBar() {
    return (
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="navbar_item">Home</li>
                    <li className="navbar_item">Account</li>
                    <li className="navbar_item">Project</li>
                    <li className="navbar_item">Team</li>
                </ul>
            </div>
    )
}

export default NavBar