import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListComponent.css";
import { useNavigate } from 'react-router-dom';

const ItemListComponent = ({productsData})=> {
    const navigate = useNavigate();
    return (
        <div className="productContainer">
            {productsData.map((product) => {
                return(
                    <Card style={{ width: '18rem' }} key={product.id}>
                        <Card.Img variant="top" src={product.thumbnail}/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="primary" onClick={()=> navigate(`/item/${product.id}`)}>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemListComponent