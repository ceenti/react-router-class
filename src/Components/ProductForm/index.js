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
            newProduct:{}
        }
    }
    render(){
        return(
            <Form className="mt-3 bg-dark text-white border rounded shadow p-3">
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input onChange = { this.props.changeHandler}/>                
                </FormGroup>
                <FormGroup>
                    <Label>Descripción</Label>
                    <Input/>                
                </FormGroup>
                <FormGroup>
                    <Label>URL de la imagen</Label>
                    <Input/>                
                </FormGroup>
                <FormGroup>
                    <Label>Precio</Label>
                    <Input/>                
                </FormGroup>
                <Button>Guardar producto</Button>
            </Form>
        )
    }
}

export default ProductForm