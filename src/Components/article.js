import React from "react";
import { Card, Button } from "react-bootstrap"

export default function ClothesCard({ title, img, text }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    )
}