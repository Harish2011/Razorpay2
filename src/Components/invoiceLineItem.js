import React from 'react'
import Table from 'react-bootstrap/Table'

const InvoiceLineItem =()=>{
    return(
       
        <div className="starting">
        <h1>InvoiceLineItem</h1>
        <div className="card auth-cardInvoiceLineItem">
        
            <h3 className="starting">Items</h3>
                
        <div>
        <Table responsive>
            <thead>
                <tr  className="ptable">
               
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Action</th>
                </tr>
               
                <tr>
                <td class="text-center empty-table" id="noitem"  colspan="5"><h4>No items found!</h4></td>
                </tr>
              
               

            </thead>
          
            </Table>
        </div>
        </div>
        </div>
    )
}




export default InvoiceLineItem