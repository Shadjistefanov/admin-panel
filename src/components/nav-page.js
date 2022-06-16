import React from 'react';
import {Pagination} from "react-bootstrap";


export default function NavPage() {
    return (
        <Pagination>
                <Pagination.Item>
                        <img src={require('../images/left-arrow.svg').default}
                             alt="arrow logo"/>
                </Pagination.Item>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
            <Pagination.Item>{6}</Pagination.Item>
                <Pagination.Item>
                        <img src={require('../images/right-arrow.svg').default}
                             alt="arrow logo"/>
                </Pagination.Item>
        </Pagination>
    );
}