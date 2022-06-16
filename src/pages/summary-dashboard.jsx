import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import {Col, Container, Row} from "react-bootstrap";
import DashboardBlock from "../components/dashboard-block";

const SummaryDashboard = () => {
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
                                <DashboardBlock/>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default SummaryDashboard