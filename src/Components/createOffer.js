import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormLable from 'react-bootstrap/FormLabel';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const CreateOffer =()=>{
    return(

        <div className="starting">
        <h1>CreateOffer</h1>
        <div className="card auth-card">
        <Form>
            <h3 className="starting">Description</h3>
                 <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Offer Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="Ramesh Somasundaram" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                    Display Text
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="10% off on all HDFC Debit cards (This appears on check for)" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                    Terms
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control as="textarea" placeholder="Terms and conditions for offers" rows="3" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Offer Type
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control as="select" value="Choose...">
                        <option>Please select</option>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                    </Form.Control>
                    </Col>
                </Form.Group>
                
                <Button id="crbtn" variant="primary" type="submit">
                    Next
                </Button>

              
               
        </Form>
        </div>
        </div>
        
    )
}

export default CreateOffer