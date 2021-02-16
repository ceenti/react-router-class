import PageTitle from '../Components/PageTitle/index'
import { Col } from 'reactstrap'
import React, {Component} from 'react'
import Cards from '../Components/Cards'
import { render } from '@testing-library/react'

 class ProductCatalog extends Component{
     constructor(props){
         super(props);
         this.state = {
             productsList: []
         }
         this.getProductData = this.getProductData.bind(this)
         this.deleteProductById = this.deleteProductById.bind(this)
         this.deleteConfirmation = this.deleteConfirmation.bind(this)
     }
    getProductData(){
        fetch("https://prueba-de363-default-rtdb.firebaseio.com/ceenti/products/.json")
        .then( response => response.json())
        .then( json => {

            let result = Object.keys(json).map( key => {
                json[key]["id"]= key
                console.log(json)
                return json[key]
            })
            this.setState({productsList : result})
        })
    }
    deleteProductById(id){
        fetch(`https://prueba-de363-default-rtdb.firebaseio.com/ceenti/products/${id}/.json`,
        {
            method: 'DELETE',
        })
        .then( response => response.json())
        .then( json => { this.getProductData()})
    }

    deleteConfirmation(id){
        if(window.confirm("¿Estás seguro?")){this.deleteProductById(id)}
    }

    componentDidMount(){
        this.getProductData()
    }

    render(){
        return (
            <>
                <Col xs="12">
                    <PageTitle title="Mira nuestros productos!" />
                </Col>
                {
                    this.state.productsList.map(product => {
                        return(
                            <Cards
                              product = {product}
                              deleteProduct = {this.deleteConfirmation}
                            />
                        )
                    })
                }
                
           </>
        )
    }

}

export default ProductCatalog