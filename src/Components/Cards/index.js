import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardImg
} from 'reactstrap'
function Cards(props){
    let {name, description, imgUrl, price, id} = props.product

    return(

            <Card className="m-2">
                <CardImg top width="100%" src={imgUrl} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Precio: {price}</CardSubtitle>
                <CardText>{description}</CardText>
                <Button data-id={id} onClick={
                    (event) => {
                        console.log(event.target.dataset.id)
                       return props.deleteProduct(event.target.dataset.id)
                    }
                }>Delete</Button>
                </CardBody>
            </Card>
    )
}

export default Cards