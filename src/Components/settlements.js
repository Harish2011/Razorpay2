import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

const Settlements =()=>{
    return(
       
        <div className="starting">
        <h1>Settlements</h1>
        <div className="card auth-cardpayments">
        <Form>
            <h3 className="starting">Settlements</h3>
                
                <Form.Row>
                    

                    <Form.Group as={Col} md="3"  controlId="formGridZip">
                    <Form.Label>Settlement Id</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} md="1" controlId="formGridZip">
                    <Form.Label>Count</Form.Label>
                    <Form.Control type="number" placeholder="25" />
                    </Form.Group>
                    <br/>

                  
                    
                </Form.Row>

                <Form.Group as={Col} controlId="formGridZip">
                    <Button id="psbtn" variant="link">Clear</Button>
                    <Button id="psbtn" variant="light">Search</Button>
                </Form.Group>


                
              
              
               
        </Form>
        <div>
        <Table className="ptable" responsive>
            <thead>
                <tr>
               
                <th>Settlement Id</th>
                <th>Amount</th>
                <th>Fees</th>
                <th>Tax</th>
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



export default Settlements