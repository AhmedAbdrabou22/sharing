// Links.js
import React from 'react';
import Navbar from '../Utils/Navbar';
import { Col, Row } from 'react-bootstrap';
import CustomizedLinks from './CustomizedLinks';
import ShowLinks from './ShowLinks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Links = () => {
    return (
        <div>
            <Navbar styleData={'links'} />
            <Row className='py-3'>
                <Col sm='12' md='12' lg='6'>
                    <ShowLinks />
                </Col>
                <Col sm='12' className='px-5' md='12' lg='6'>
                    <DndProvider backend={HTML5Backend}>
                        <CustomizedLinks />
                    </DndProvider>
                </Col>
            </Row>
        </div>
    );
};

export default Links;
