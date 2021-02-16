import ProductForm from '../Components/ProductForm/index'
import PageTitle from '../Components/PageTitle/index'
import { Col } from 'reactstrap'
function UploadForm( props ) {

    return (
        <>
            <Col xs="12">
                <PageTitle title="Registra un nuevo producto" />
                <ProductForm 
                // changeHandler = { props.changeHandler }

                />
            </Col>
        </>
    )
}

export default UploadForm