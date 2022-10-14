import { React } from 'react';
import '../App.css';

function NavBar(props) {
    return (
            <div className="menu-wrap">
                <input type="checkbox" class="toggler" />
                <div class="hamburger"></div><div></div>
                <div class="menu">
                    <div>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Account</li>
                                <li>Project</li>
                                <li>Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header class="showcase">
                    <div class="container showcase-inner">
                        <h1>Milestone 3</h1>
                        <p>jaoweifja;sldfkjsa;ldkfjas;dlfjas;ldkfja;lsdfja;slkdf</p>
                    </div>
                </header>
            </div>
    )
}

export default NavBar