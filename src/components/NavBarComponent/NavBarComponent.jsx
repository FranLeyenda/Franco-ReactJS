import "./NavBarComponent.css"
import MainRouter from "../../routes/MainRouter";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

//ButtonComponent
import ButtonComponent from "../ButtonComponent/ButtonComponent";

//CarritoComponent
import CardWidgetComponent from "../CardWidgetComponent/CardWidgetComponent";

//NHardcodeadoComponent
import NHardcodeadoComponent from "../NHardcodeadoComponent/NHardcodeadoComponent";

const NavBarComponent = () => {
    
    
    return(
        <header>
            <div className="contenedorNavBar">
                <ul>
                    <li><Link to="/"className="nombrePagina">Tech-Vibe</Link></li>
                    <li><Link to={"/category/laptops"}>Laptops</Link></li>
                    <li><Link to={"/category/smartphones"}>Smartphones</Link></li>
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
                <CardWidgetComponent />
                <NHardcodeadoComponent />
            </div>
        </header>
    )
}

export default NavBarComponent;