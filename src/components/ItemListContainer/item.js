import React from 'react'
import { getFetch } from './itemList'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getFetch()
        .then(respuesta => setProductos(respuesta))
        .catch(fail => console.log(fail))
        .finally( () => setLoading(false) )
    }, []);

    return (
        <ul>
            {loading ? <h1>Loading . . .</h1> 
            :
            productos?.map(producto => 
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="#" />
                <Card.Body>
                <Card.Title key={producto.id}>{producto.name}</Card.Title>
                <Card.Text>
                    details of the product
                </Card.Text>
                <Button variant="primary">BUY</Button>
                </Card.Body>
            </Card>
            )}
        </ul>
    )
}

export default Item