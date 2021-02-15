import React from 'react'
import { Row, Col,Image} from "react-bootstrap"
import image from '../Pictures/men2.jpg'
import imagee from '../Pictures/men3.jpg'
import ClothesCard from '../Components/article';
import './women.css'
let Shirt = {
    title: "Shirt",
    text: "T-Shirt for all sizes available in all of our stores",
    img: imagee,
}
export default function Men() {
    return (
        <div>
            <h1>Men Clothing</h1>
            <div className='menimage'>
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
            </Row>
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