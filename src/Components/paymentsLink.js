import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

const PaymentLink =()=>{
    return(
       
        <div className="starting">
        <h1>Payment Links</h1>
        <div className="card auth-cardPaymentLink">
        <Form>
            <h3 className="starting">Payment Links</h3>
                
                <Form.Row>
                    <Form.Group as={Col} md="2" controlId="formGridCity">
                    <Form.Label>Payment Link Status</Form.Label>
                    <Form.Control as="select" value="Choose...">
                        <option>ALL</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formGridCity">
                    <Form.Label>Payment Link Id</Form.Label>
                    <Form.Control  type="text" />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formGridZip">
                    <Form.Label>Batch Id</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} md="2"  controlId="formGridZip">
                    <Form.Label>Receipt No</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="formGridZip">
                    <Form.Label>Customer Contact</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} md="2"  controlId="formGridZip">
                    <Form.Label>Customer Email</Form.Label>
                    <Form.Control  type="email" />
                    </Form.Group>

                    <Form.Group as={Col} md="2"  controlId="formGridZip">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Count</Form.Label>
                    <Form.Control type="number" placeholder="25" />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="formGridZip">
                    <Button id="plsbtn" variant="link">Clear</Button>
                    <Button id="plsbtn" variant="light">Search</Button>
                    </Form.Group>
                  
                    
                </Form.Row>


                
              
              
               
        </Form>
        <div>
        <Table className="ptable" responsive>
            <thead>
                <tr>
               
                <th>Payment Link Id</th>
                <th>Created Date</th>
                <th>Amount</th>
                <th>Receipt No</th>
                <th>Customer</th>
                <th>Payment Link</th>
                <th>Status</th>
                </tr>
            </thead>
          
            </Table>
        </div>
        </div>
        </div>
    )
}



export default PaymentLink