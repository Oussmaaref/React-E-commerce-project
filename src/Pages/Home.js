import React from 'react'
import { Row, Col, Jumbotron,Container } from "react-bootstrap"
import imagee from "../Pictures/men3.jpg"
import CarrouselElement from "../Components/CarrouselElement";
import ClothesCard from '../Components/article';
import './Home.css'
let Shirt = {
    title: "Shirt",
    text: "T-Shirt for all sizes available in all of our stores",
    img: imagee,
}
export default function Home() {
    return (
        <div >
            <div className='home'>
            <Jumbotron fluid>
                <Container>
                    <h1>Clothes Store</h1>
                    <p>
                        Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.
                     </p>
                </Container>
            </Jumbotron>
            </div>
            <div className='carr'>
            <CarrouselElement />
            </div>
            <div className='ROW'>
            <Row>
                <Col>
                    <ClothesCard {...Shirt} />
                </Col>
                <Col>
                    <ClothesCard {...Shirt} />
                </Col>
                <Col>
                    <ClothesCard {...Shirt} />
                </Col>
            </Row>
            </div>
        </div>
    )
}
