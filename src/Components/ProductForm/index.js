import React, { Component } from 'react'
import {
    Form,
    Input,
    FormGroup,
    Label,
    Button,
} from 'reactstrap'

class ProductForm extends Component{
    constructor( props ){
        super( props );
        this.state = {
            newProduct:{
                description:"Esta es una description",
                imgUrl:"https://picsum.photos/id/237/200/300",
                name:"Perrito",
                price:0
              }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSendObj = this.onClickSendObj.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }
    onChangeHandler(event){
        let value = event.target.value
        let name = event.target.name
        this.setState({newProduct : {...this.state.newProduct, [name]:value}})
        console.log(this.state.newProduct)
    }
    createProduct(newProduct){
        fetch("https://prueba-de363-default-rtdb.firebaseio.com/ceenti/products/.json",
        {
            method: "POST",
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json() )
        .then(json => console.log(json) )
        //window.location.href = '/product-catalog'
    }
    
    onClickSendObj(){
        console.log(this.state.newProduct)
        this.createProduct(this.state.newProduct)
    }

    render(){
        return(
            <Form className="mt-3 bg-dark text-white border rounded shadow p-3">
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input onChange = { this.onChangeHandler}/>                
                </FormGroup>
                <FormGroup>
                    <Label>Descripción</Label>
                    <Input onChange = { this.onChangeHandler}/>                
                </FormGroup>
                <FormGroup>
                    <Label>URL de la imagen</Label>
                    <Input onChange = { this.onChangeHandler}/>                
                </FormGroup>
                <FormGroup>
                    <Label>Precio</Label>
                    <Input onChange = { this.onChangeHandler}/>                
                </FormGroup>
                <Button onClick = {this.onClickSendObj}>Guardar producto</Button>
            </Form>
        )
    }
}

export default ProductForm