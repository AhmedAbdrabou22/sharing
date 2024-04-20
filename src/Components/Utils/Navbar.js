import React from 'react'
import { Link } from 'react-router-dom'
import { PiLinkSimpleBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ styleData }) => {
    return (
        <div className='font navbar'>
            <div>
                <div>
                    <span className='fs-3'><PiLinkSimpleBold />DevLinks</span>
                </div>
            </div>
            <div>
                <Link className='tabs' to="/">
                    <PiLinkSimpleBold /> <span className='navDetails'>Links</span>
                </Link>
                <Link className='tabs' to="/profile">
                    <CgProfile /> <span className='navDetails'>Profile Details</span>
                </Link>
            </div>
            <div>
                <button className='btn'>Preview</button>
            </div>
        </div>
    )
}

export default Navbar
