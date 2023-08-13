import "./NavBarComponent.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//ButtonComponent
import ButtonComponent from "../ButtonComponent/ButtonComponent";

//CarritoComponent
import CarritoComponent from "../CarritoComponent/CarritoComponent";

const NavBarComponent = () => {
    
    
    return(
        <header>
            <div className="contenedorNavBar">
                <ul>
                    <li><p className="nombrePagina">FranShoes</p></li>
                    <li><a href="#">Zapatillas</a></li>
                    <li><a href="#">Buzos</a></li>
                    <li><a href="#">Camperas</a></li>
                </ul>
            </div>
            <div className="containerCarrito">
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <ButtonComponent btnType ="success" btnName ="Buscar"/>
                        </Col>
                    </Row>
                </Form>
                <CarritoComponent />
            </div>
        </header>
    )
}

export default NavBarComponent;