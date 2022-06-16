import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import Intro from "../components/homePage";
import {Col, Container, Row} from "react-bootstrap";

const HomePage = () => {
    return (
        <div>
            <Container fluid>
                <Header/>
                <div className="main">

                    <Row>
                        <Col className='sidebar-col' sm='auto'>
                            <Sidebar/>
                        </Col>
                        <Col>
                            <div className='cont'>
                                <Intro/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default HomePage