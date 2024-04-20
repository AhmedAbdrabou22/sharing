import React from 'react'
import Navbar from '../Utils/Navbar'
import { Col, Row } from 'react-bootstrap';
import ShowLinks from '../Links/ShowLinks';
import ProfileData from './ProfileData';
const Profile = () => {
    return (
        <div>
            <Navbar/>
            <Row className='py-3'>
                <Col sm='12' md='12' lg='6'>
                    <ShowLinks />
                </Col>
                <Col sm='12' className='px-5' md='12' lg='6'>
                    <ProfileData/>
                </Col>
            </Row>
        </div>
    )
}

export default Profile
