import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

const Payments =()=>{
    return(
       
        <div className="starting">
        <h1>Payments</h1>
        <div className="card auth-cardpayments">
        <Form>
            <h3 className="starting">Payments</h3>
                
                <Form.Row>
                    <Form.Group as={Col} md="2" controlId="formGridCity">
                    <Form.Label>Payment Id</Form.Label>
                    <Form.Control  type="text" />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formGridState">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" value="Choose...">
                        <option>ALL</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="formGridZip">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group as={Col} md="2"  controlId="formGridZip">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Count</Form.Label>
                    <Form.Control type="number" placeholder="25" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Button id="psbtn" variant="link">Clear</Button>
                   
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Button id="psbtn" variant="light">Search</Button>
                   
                    </Form.Group>
                    
                </Form.Row>


                
              
              
               
        </Form>
        <div>
        <Table className="ptable" responsive>
            <thead>
                <tr>
               
                <th>Payment Id</th>
                <th>Amount</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Created At</th>
                <th>Status</th>
                </tr>
            </thead>
          
            </Table>
        </div>
        </div>
        </div>
    )
}

export default Payments