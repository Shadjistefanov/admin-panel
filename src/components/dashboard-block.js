import {Col, Pagination, Row} from "react-bootstrap";
import React from "react";

export default function DashboardBlock() {
    return (
        <div className="dashboard-blocks">
            <Row>
                <Col md={4}>
                    <div className="dashboard-block">
                        <span className='count'>0.00  <span className='currency'>лв.</span></span>
                        Оборот
                    </div>
                </Col>
                <Col md={4}>
                    <div className="dashboard-block">
                        <span className='count'>0.00 <span className='currency'>лв.</span></span>
                        Печалба
                    </div>
                </Col>
            </Row>
        </div>
    )

}