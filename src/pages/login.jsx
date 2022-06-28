import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import {Col, Container, Row} from "react-bootstrap";
import FormContainer2 from "../components/login-form";

const LoginForm = () => {
    return (
        <div>
            <Container fluid>
                <Header/>
                <div className="main">

                    <Row>
                        <Col>
                            <div className='cont'>

                                <FormContainer2/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default LoginForm