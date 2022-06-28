import React from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";



export default function FormContainer2() {
    return (
        <div className="form-cont login">
            <h5 className="heading">Login</h5>
            <Form>
                <Form.Group className='form-group'>
                    <Form.Label>Имейл</Form.Label>
                    <Form.Control type='text'>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label>Имейл</Form.Label>
                    <Form.Control type='password'>
                    </Form.Control>
                </Form.Group>

               <div className="flex-item">
                   {['checkbox'].map((type) => (
                       <div key={type} className="form-checkbox">
                           <Form.Check type={type} id={`check-api-${type}`}>
                               <Form.Check.Input type={type} isValid />
                               <Form.Check.Label>{`Remember`}</Form.Check.Label>
                           </Form.Check>
                       </div>
                   ))}

                   <div className="forgot-password">
                       <Link to='#'>Забравена парола?</Link>
                   </div>
               </div>
                <div className="login-btns">
                    <Button className=''>
                        login</Button>
                    <Link to='#' className='btn btn-secondary'>Cancel</Link>
                </div>

            </Form>

        </div>

    )
}