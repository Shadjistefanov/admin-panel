import React from 'react';
import {Spinner} from "react-bootstrap";




export default function LoadingComp() {
    return (
        <div className="form-cont loading">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>


        </div>

    )
}