import React from 'react';
import { Form, Row, Col, Breadcrumb, Button} from "react-bootstrap";
import Select from "react-select";
import Datepicker from "./datepicker";
import Image from "react-bootstrap/Image";


const user = [
    {value: "Консултант 1", label: "Консултант 1"},
    {value: "Консултант 2", label: "Консултант 2"},
    {value: "Супервайзър 1", label: "Супервайзър 1"},
    {value: "Супервайзър 2", label: "Супервайзър 2"},
    {value: "Друго", label: "Друго"}
]
const businessType = [
    {value: "Търговия на дребно", label: "Търговия на дребно"},
    {value: "Услуги", label: "Услуги"},
    {value: "Селско стопанство", label: "Селско стопанство"},
    {value: "Търговия на едро", label: "Търговия на едро"},
    {value: "Друго", label: "Друго"}
]
const businessType2 = [
    {value: "Търговия на дребно", label: "Търговия на дребно"},
    {value: "Услуги", label: "Услуги"},
    {value: "Селско стопанство", label: "Селско стопанство"},
    {value: "Търговия на едро", label: "Търговия на едро"},
    {value: "Друго", label: "Друго"}
]


export default function FormContainer() {
    return (
        <div className="form-cont">
            <Breadcrumb className='breadcrumb'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
                <Breadcrumb.Item active>Form</Breadcrumb.Item>
            </Breadcrumb>
            <h4 className='heading'>Анализ на търговски обект</h4>
            <Form className="form-info">
                <Row>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Име</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Имейл</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Населено място</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Улица</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Номер</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Град</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={3} sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Блок</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={3} sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Вход</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={3} sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Ет.</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={3} sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Ап.</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>КИД</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>ЕИК</Form.Label>
                            <Form.Control type='text'>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Начало на събитието</Form.Label>
                            <Datepicker/>

                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='form-group'>
                            <Form.Label>Край на събитието</Form.Label>
                            <Datepicker/>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className='form-group'>
                            <Form.Label>Потребител *</Form.Label>
                            <Select options={user}
                                    placeholder='Моля изберете'/>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className='form-group'>
                            <Form.Label>Бизнес тип</Form.Label>
                            <Select
                                isMulti
                                options={businessType}
                                isClearable={true}
                                isSearchable={true}
                                placeholder='Моля изберете'
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className='form-group'>
                            <Form.Label>Бизнес подтип</Form.Label>
                            <Select
                                isMulti
                                options={businessType2}
                                isClearable={true}
                                isSearchable={true}
                                placeholder='Моля изберете'
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button className='px-5'>
                            <Image src={require('../images/filter-btn.svg').default} alt="filter icon"/>
                            Подължи</Button>
                    </Col>

                </Row>
            </Form>
        </div>

    )
}