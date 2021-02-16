import React, { Component } from 'react'
import './App.css';

import {
  Container,
  Row,
} from 'reactstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import UploadForm from './Pages/UploadForm'
import ProductCatalog from './Pages/ProductCatalog'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newProduct: {
        name: "Laptop Gamer",
        description: "Dell 5g",
        imgUrl: "https://intercompras.com/images/product/DELL_N35MY.jpg",
        price: "$35,000.00"
      },
      productsCollection: {}
    }

    this.changeHandler = this.changeHandler.bind( this )
  }

  changeHandler( event ){
    console.log( event.target.value )
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product-catalog">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/upload-product">Subir producto</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Container>
            <Row>
              <Switch>
                <Route path="/product-catalog">
                  <ProductCatalog />
                </Route>
                <Route path="/upload-product">
                  <UploadForm changeHandler = { this.changeHandler }/>
                </Route>
                <Route path="/">
                  <h1>Hola, soy la vista "home"</h1>
                </Route>
              </Switch>
            </Row>
          </Container>
        </Router>
      </div>
    )
  }
}

export default App;