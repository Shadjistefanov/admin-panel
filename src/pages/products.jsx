import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import ProductTable from "../components/product-table";
import {Col, Container, Row} from "react-bootstrap";

const ProductPage = () => {
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
                                <ProductTable/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage


