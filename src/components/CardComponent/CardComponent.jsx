import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="../../img/pensford DC.jpg" />
      <Card.Body>
        <Card.Title>Zapatillas Pensford Ss Le (Xksg) DC</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;