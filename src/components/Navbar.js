import React, { Component } from 'react';
import user from '../user.png';
import homeIcon from '../homeIcon.png';


class Navbar extends Component {
    render (){
        return (
            <div className="navbar">
            <img className="user" src={user} alt="userblank"/>
            <img  className="home" src={homeIcon} alt="homeicon"/>
            </div>
        )
    }
}
export default Navbar