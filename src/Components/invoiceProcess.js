import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import gst from '../images/gst.png'
import download from '../images/download_option.png'
import partial from '../images/partial_payments.png'
const InvoiceProcess =()=>{
    return(
        <div>
          <div className="starting">
          <h1>InvoiceProcess</h1>    
           
          <div className="card auth-cardPaymentLink">      
          <h2>What makes Invoice great?</h2>        
          <CardDeck style={{ width: '1000px' }}>
            <Card  bg="info">
            <img src={process.env.PUBLIC_URL+ "gst.png"} width="100px100"/>
              <Card.Body>
                <Card.Title>GST compliant</Card.Title>
                <Card.Text>
                Add GST, discounts and shipping details, all in an invoice and let our invoicing solution do the calculation for you.
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card bg="info">
             <img src={process.env.PUBLIC_URL+ "partial_payments.png"} width="100px100"/>
              <Card.Body>
                <Card.Title>Partial payments</Card.Title>
                <Card.Text>
                  Enable partial payments for your customers at the time of invoice creation directly from the dashboard..{' '}
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card bg="info">
            <img src={process.env.PUBLIC_URL+ "download_option.png"} width="100px100"/>
              <Card.Body>
                <Card.Title>Download Option</Card.Title>
                <Card.Text>
                Let your customers save and download .pdf version of invoices for future reference.
                </Card.Text>
              </Card.Body>
             
            </Card>
          </CardDeck>
          
          </div>
          </div>
         
        </div>

    )
}

export default InvoiceProcess