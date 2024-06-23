import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/aboutUs";

function Header() {
    const { user, logout } = useAuth0()
    console.log(user)

    return (
        <div className="header_container">
            <div className="header_left">
                <img  className="header_image" src="https://i.pinimg.com/736x/18/0e/20/180e20437c42f66ae76cdb28ac6912db.jpg" alt="Logo"/>
                <div className="search_box">
                    <SearchIcon className="search_icon"/>
                    <input type="text" placeholder="Search User" />
                </div>
            </div>
            <div className="header_right">
                <Button style={{border:'none'}} variant="outlined">
                    Hi, {user?.given_name}

                </Button>
                <Link style={{ textDecoration: 'none' }} to='/'>
                <Button style={{border:'none'}} variant="outlined">
                    Home
                </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/aboutUs'>
                <Button style={{border:'none'}} variant="outlined">
                    About Us
                </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/profile'>
                <Button style={{border:'none'}} variant="outlined">
                    Profile
                </Button>
                </Link>
                <Button style={{border:'none'}} variant="outlined">
                    Dark Mode
                </Button>
                <Button style={{ backgroundColor: '#2775B1', color: 'white' }}
                    variant='outlined'
                    onClick={() => logout({
                        returnTo: window.location.origin
                    })}>
                    Logout
                </Button>
            </div>
        </div>
    )
}
export default Header ;

//create simple counter application usinf react whare the user can increment and decrement the counter value