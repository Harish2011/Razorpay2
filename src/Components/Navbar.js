import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


const Navbar1 =()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/CreateOffer">CreateOffer</Nav.Link>
                <Nav.Link href="/Payments">Payments</Nav.Link>
                <Nav.Link href="/PaymentLink">PaymentLink</Nav.Link> 
                <Nav.Link href="/Settlements">Settlements</Nav.Link>

                <Nav.Link href="/InvoiceLineItem">InvoiceLineItem</Nav.Link>
                <Nav.Link href="/OfferSubcription">OfferSubcription</Nav.Link>
                <Nav.Link href="/Customer">Customers</Nav.Link>

                <Nav.Link href="/Routes">Routes</Nav.Link>
                <Nav.Link href="/InvoiceProcess">InvoiceProcess</Nav.Link>
              
                </Nav>
            </Navbar>
            
        </div>
       
    )
}

export default Navbar1

  //   <nav>
  //   <div class="nav-wrapper">
  //     <Link to="/" class="brand-logo left" >Razorpay</Link>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //       <li><Link to="/CreateOffer">CreateOffer</Link></li>
  //       <li><Link to="/Customer">Customer</Link></li>
  //       <li><Link to="/InvoiceLineItem">InvoiceLineItem</Link></li>
  //       <li><Link to="/InvoiceProcess">InvoiceProcess</Link></li>
  //       <li><Link to="/OfferSubcription">OfferSubcription</Link></li>
  //       <li><Link to="/Payments">Payments</Link></li>
  //       <li><Link to="/PaymentLink">PaymentLink</Link></li>
  //       <li><Link to="/Routes">Routes</Link></li>
  //       <li><Link to="/Settlements">Settlements</Link></li>
        
  //     </ul>
  //   </div>
  // </nav>

