import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Routes =()=>{
    return(
        <div>
          <div className="starting">
          <h1>Routes</h1>    
           
          <div className="card auth-cardPaymentLink">      
          <h2>What makes Routes great?</h2>        
          <CardDeck style={{ width: '1000px' }}>
            <Card  bg="info">
            <img src={process.env.PUBLIC_URL+ "linked_account.png"} width="100px100"/>
              <Card.Body>
                <Card.Title>Linked Accounts</Card.Title>
                <Card.Text>
                Easily onboard your vendors, sellers, service providers etc. as linked accounts without the hassles of any physical paperwork.
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card bg="info">
             <img src={process.env.PUBLIC_URL+ "transfers.png"} width="100px100"/>
              <Card.Body>
                <Card.Title>Transfers</Card.Title>
                <Card.Text>
                Create as many transfers as you need to various linked accounts and automate the process through powerful Transfer APIs.
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card bg="info">
            <img src={process.env.PUBLIC_URL+ "settlements.png"} width="100px100"/>
              <Card.Body>
                <Card.Title>Settlements</Card.Title>
                <Card.Text>
                Control the entire fund movements with flexible settlement plans.
                </Card.Text>
              </Card.Body>
             
            </Card>
          </CardDeck>
          
          </div>
          </div>
         
        </div>

    )
}

export default Routes