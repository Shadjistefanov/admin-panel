import React from 'react';
import {Button, ButtonGroup, Dropdown, Form, Table} from "react-bootstrap";
import BtnToggle from "./switchBtn";
import Image from "react-bootstrap/Image";
import LoadingComp from "./loading";


export default function ProductTable() {

    return (
            <div className='product-table '>
                {/*start form*/}
                <Form>
                    <Form.Group className='form-group'>
                        <Form.Control className='bg-transparent' type='search' placeholder='Search products'>
                        </Form.Control>
                        <button className='search'><img src={require('../images/search.svg').default} alt="search logo"/></button>
                    </Form.Group>

                    <Form.Group className='filters'>
                        <Button variant="outline-secondary">
                            <img src={require('../images/filter.svg').default} alt="filter logo"/>
                            <img className='hover-image' src={require('../images/white-filter.svg').default} alt="filter logo"/>
                            Filters</Button>
                        <Button variant="outline-secondary">
                            <img src={require('../images/columns.svg').default} alt="columns logo"/>
                            <img className='hover-image' src={require('../images/white-columns.svg').default} alt="columns logo"/>
                            Columns
                            <span>6</span></Button>
                    </Form.Group>
                </Form>

            {/*    End form*/}

            {/*    Start table*/}

                <Table responsive className='bg-light'>
                    <thead>
                    <tr>
                        <th>
                            <input type="checkbox" className="form-checkIinput"/>
                        </th>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Stocks</th>
                        <th>Sku</th>
                        <th>Price</th>
                        <th>Variants</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td >
                            <input type="checkbox" className="form-checkIinput"/>
                        </td>
                        <td >
                            <a href="#">
                              <Image src={require('../images/product-img.png')} alt="product item"/>
                                Розе Гранд Кюве Лафаж
                            </a>
                        </td>
                        <td>Wine</td>
                        <td>   <div className='switchBtn-cont'>
                            <BtnToggle/>
                        </div></td>
                        <td>2874847299</td>
                        <td>$65</td>
                        <td>2</td>
                        {/*<td className='edit-row' ><a className='link-edit bg-white' href="#">*/}
                        {/*    <img className='' src={require('../images/edit.svg').default}*/}
                        {/*         alt="edit logo"/>Edit</a>*/}
                        {/*<button className='bg-white'>*/}
                        {/*    <img className='' src={require('../images/arrow-down.svg').default}*/}
                        {/*         alt="arrow logo"/></button>*/}
                        {/*</td>*/}
                        <td>
                            <Dropdown as={ButtonGroup}>
                                <Button href='/' variant="default">
                                    <img className='' src={require('../images/edit.svg').default}
                                         alt="edit logo"/>Edit
                                </Button>
                                <Dropdown.Toggle split variant="default" id="" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <input type="checkbox" className="form-checkIinput"/>
                        </td>
                        <td >
                            <a href="#">
                                <Image src={require('../images/product-img.png')} alt="product item"/>
                                Розе Гранд Кюве Лафаж
                            </a>
                        </td>
                        <td>Wine</td>
                        <td>   <div className='switchBtn-cont'>
                            <BtnToggle/>
                        </div></td>
                        <td>2874847299</td>
                        <td>$65</td>
                        <td>2</td>
                        <td>
                            <Dropdown as={ButtonGroup}>
                                <Button href='/' variant="default">
                                    <img className='' src={require('../images/edit.svg').default}
                                         alt="edit logo"/>Edit
                                </Button>
                                <Dropdown.Toggle split variant="default" id="" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <input type="checkbox" className="form-checkIinput"/>
                        </td>
                        <td >
                            <a href="#">
                                <Image src={require('../images/product-img.png')} alt="product item"/>
                                Розе Гранд Кюве Лафаж
                            </a>
                        </td>
                        <td>Accessories</td>
                        <td>   <div className='switchBtn-cont'>
                            <BtnToggle/>
                        </div></td>
                        <td>2874847299</td>
                        <td>$65</td>
                        <td>2</td>
                        <td>
                            <Dropdown as={ButtonGroup}>
                                <Button href='/' variant="default">
                                    <img className='' src={require('../images/edit.svg').default}
                                         alt="edit logo"/>Edit
                                </Button>
                                <Dropdown.Toggle split variant="default" id="" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    </tbody>

                </Table>

                <LoadingComp/>

            {/*    End table*/}

            </div>
    );
}