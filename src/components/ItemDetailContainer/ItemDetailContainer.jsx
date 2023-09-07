import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ItemDetailContainer = ({productData}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{productData.price}</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="success">Buy Now</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer
