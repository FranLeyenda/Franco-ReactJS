import "./NavBarComponent.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//ButtonComponent
import ButtonComponent from "../ButtonComponent/ButtonComponent";

//CarritoComponent
import CarritoComponent from "../CarritoComponent/CarritoComponent";

//NHardcodeadoComponent
import NHardcodeadoComponent from "../NHardcodeadoComponent/NHardcodeadoComponent";

const NavBarComponent = () => {
    
    
    return(
        <header>
            <div className="contenedorNavBar">
                <ul>
                    <li><p className="nombrePagina">ShoeWave</p></li>
                    <li><a href="#">Calzado</a></li>
                    <li><a href="#">Indumentaria</a></li>
                    <li><a href="#">Accesorios</a></li>
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
                <NHardcodeadoComponent />
            </div>
        </header>
    )
}

export default NavBarComponent;