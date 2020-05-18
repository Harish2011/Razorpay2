import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

const OfferSubcription =()=>{
    return(
       
        <div className="starting">
        <h1>OfferSubcription</h1>
        <div className="card auth-cardOfferSubcription">
        
            <h3 className="starting">Offers</h3>
                
        <div>
        <Table responsive>
            <thead>
                <tr  className="ptable">
               
                <th>Offer Id</th>
                <th>Offer Title</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Start On</th>
                <th>Ends On</th>
                </tr>
               
                <tr>
                <td class="text-center empty-table" id="noitem"  colspan="6"><h4>No Offers found!</h4></td>
                </tr>
              
               

            </thead>
          
            </Table>
        </div>
        </div>
        </div>
    )
}




export default OfferSubcription