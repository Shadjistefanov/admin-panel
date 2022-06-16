import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Button,
    Col,
    FloatingLabel,
    Form,
    ListGroup,
    NavLink,
    Row,
    Table
} from "react-bootstrap";
import React from "react";
import BtnToggle from "./switchBtn";
import NavPage from "./nav-page";

export default function Intro() {
    return(
        <div className='intro-block'>
                <Row>
                    <Col md={12}>
                        <div className="user-title">
                            <h5>User Management</h5>
                        </div>
                        <div className="create-user">
                            <Button className='button button-primary'>Create User</Button>
                            <Button className='button button-primary'>User Functions</Button>
                        </div>
                    </Col>
                </Row>

               {/*Start filters form*/}

                <Form>
                    <Row>
                        <Col sm={6}>
                            <Form.Group  controlId="formUsername">
                                <Form.Control type="email" placeholder="Username" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group  controlId="formEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <div className='filters'>
                                <Button className='button btn-primary'>Filter</Button>
                                <Button className='button btn-danger'>Clear</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>

                {/*End filters form*/}


                {/*Start table cont*/}
                <div className='setting-block bg-white'>
                      <ListGroup as='ul' defaultActiveKey="#link1">
                          <ListGroup.Item as="li" action>
                              <NavLink href='#'>
                                  <i className='bi-gear-fill'> </i>
                              </NavLink>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" action>
                              <NavLink href='#'>
                                  <i className='bi-arrow-repeat'> </i>
                              </NavLink>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" action>
                              <NavLink href='#'>
                                  <i className='bi-download'> </i>
                              </NavLink>
                          </ListGroup.Item>
                      </ListGroup>
                </div>

                {/*start table*/}

                <Table responsive className='bg-white'>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Is admin</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='text-left'>Ivan Ivanov</td>
                        <td className='text-left'>Ivanov@gmail.com</td>
                        <td><div className="admin-type">
                            <img className='isNot-admin' src={require('../images/close.svg').default}
                                 alt="close logo"/>
                            <img className='is-admin' src={require('../images/check.svg').default}
                                 alt="close logo"/>
                        </div></td>
                        <td>   <div className='switchBtn-cont'>
                          <BtnToggle/>
                        </div></td>
                        <td>
                          <button className='btn-edit'>   <img
                              src={require('../images/pencil-square.svg').default}
                              alt="pencil edit logo"/></button>
                          <button>   <img
                              src={require('../images/save.svg').default}
                              alt="save logo"/> </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-left'>Georgi Georgiev</td>
                        <td className='text-left'>georgiev@gmail.com</td>
                        <td><div className="admin-type">
                            <img className='isNot-admin' src={require('../images/close.svg').default}
                                 alt="close logo"/>
                            <img className='is-admin' src={require('../images/check.svg').default}
                                 alt="close logo"/>
                        </div></td>
                        <td>   <div className='switchBtn-cont'>
                            <BtnToggle/>
                        </div></td>
                        <td>
                            <button className='btn-edit'>   <img
                                src={require('../images/pencil-square.svg').default}
                                alt="pencil edit logo"/></button>
                            <button>   <img
                                src={require('../images/save.svg').default}
                                alt="save logo"/> </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-left'>Alexander Petrov</td>
                        <td className='text-left'>petkata@gmail.com</td>
                        <td><div className="admin-type">
                            <img className='isNot-admin' src={require('../images/close.svg').default}
                                alt="close logo"/>
                            <img className='is-admin' src={require('../images/check.svg').default}
                                 alt="close logo"/>
                        </div></td>
                        <td>   <div className='switchBtn-cont'>
                            <BtnToggle/>
                        </div></td>
                        <td>
                            <button className='btn-edit'>   <img
                                src={require('../images/pencil-square.svg').default}
                                alt="pencil edit logo"/></button>
                            <button>   <img
                                src={require('../images/save.svg').default}
                                alt="save logo"/> </button>
                        </td>
                    </tr>
                    </tbody>

                </Table>

                <div className='navigation bg-white'>
                    <NavPage/>
                    <Form>
                        <FloatingLabel controlId="floatingSelect" label="This page">
                            <Form.Select aria-label="Floating label select example">
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                            </Form.Select>
                        </FloatingLabel>
                        <div className="total-pages">
                            Total
                            <span>20</span>
                        </div>
                    </Form>

                </div>

                {/*End table*/}

                {/*End table cont*/}


        </div>
    )

}