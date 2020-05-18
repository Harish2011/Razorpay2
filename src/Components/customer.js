import React from 'react'
import Table from 'react-bootstrap/Table'

const Customer =()=>{
    return(
       
        <div className="starting">
        <h1>Customers</h1>
        <div className="card auth-cardInvoiceLineItem">
        
            <h3 className="starting">Customers</h3>
                
        <div>
        <Table responsive>
            <thead>
                <tr  className="ptable">
               
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
                </tr>
               
                <tr>
                <td class="text-center empty-table" id="noitem"  colspan="5"><h4>No Customers found!</h4></td>
                </tr>
              
               

            </thead>
          
            </Table>
        </div>
        </div>
        </div>
    )
}





export default Customer