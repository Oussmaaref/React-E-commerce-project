import React from 'react'
import { Row, Col,Image} from "react-bootstrap"
import image from '../Pictures/women3.jpg'
import imagee from '../Pictures/women4.jpg'
import ClothesCard from '../Components/article';
import './women.css'
let Shirt = {
    title: "Shirt",
    text: "T-Shirt for all sizes available in all of our stores",
    img: imagee,
}
export default function Women() {
    return (
        <div>
            <h1>Women Clothing</h1>
            <div className='womenimage'>
            <Image src={image} fluid />
            </div>
            <div className='card'>
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
