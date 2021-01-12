import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        let isLoggedIn = () => {
            if (JSON.parse(globalData).user !== null) {
                return (
                    <nav className='nav navbar navbar-expand-lg navbar-light justify-content-around'>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to='/'>Catalog</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/cart'>My cart</Link></li>
                            <li className="nav-item"><a className="nav-link" href='/profile'>Profile</a></li>
                            <li className="nav-item"><a className="nav-link" href='/logout'>Logout</a></li>
                        </ul>
                    </nav>
                )
            } else {
                return (
                    <nav className='nav navbar navbar-expand-lg navbar-light justify-content-around'>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to='/'>Catalog</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/cart'>My cart</Link></li>
                            <li className="nav-item"><a className="nav-link" href='/login'>Log in</a></li>
                        </ul>
                    </nav>
                )
            }
        }

        return (
            isLoggedIn()
        )
    }
}
