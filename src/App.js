import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'

import CreateOffer from './Components/createOffer';
import Customer from './Components/customer';
import InvoiceLineItem from './Components/invoiceLineItem';
import InvoiceProcess from './Components/invoiceProcess';
import OfferSubcription from './Components/offerSubcription';
import Payments from './Components/payments';
import PaymentLink from './Components/paymentsLink';
import Routes from './Components/routes';
import Settlements from './Components/settlements';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Navbar/>
    
    
    <Route path="/CreateOffer"> <CreateOffer /> </Route>
    <Route path="/Customer"> <Customer /> </Route>
    <Route path="/InvoiceLineItem"> <InvoiceLineItem /> </Route>
    <Route path="/InvoiceProcess"> <InvoiceProcess /> </Route>
    <Route path="/OfferSubcription"> <OfferSubcription /> </Route>
    <Route path="/Payments"> <Payments /> </Route>
    <Route path="/PaymentLink"> <PaymentLink /> </Route>
    <Route path="/Routes"> <Routes /> </Route>
    <Route path="/Settlements"> <Settlements /> </Route>

   </BrowserRouter>
    
    </div>
  );
}

export default App;
