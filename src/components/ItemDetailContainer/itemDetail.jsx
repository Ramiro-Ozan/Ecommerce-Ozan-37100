import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({prod}) => {
  console.log(prod)
  return (
    <Card className="text-center">
      <Card.Header>
        <img src={`#`} alt="FOTO DEL prod" />
      </Card.Header>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.price}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Ecommerce OZAN</Card.Footer>
    </Card>
  )
}

export default ItemDetail