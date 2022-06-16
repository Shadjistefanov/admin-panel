import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import FormContainer from "../components/form-comps";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProductTable from "../components/product-table";

const FormPage = () => {
    return (
        <div>
            <Container fluid>
                <Header/>
                <div className="main">

                    <Row>
                        <Col sm='auto' className='sidebar-col'>
                            <Sidebar/>
                        </Col>
                        <Col>
                            <div className='cont'>
                                <FormContainer/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default FormPage