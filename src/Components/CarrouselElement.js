import React from "react";
import { Carousel } from "react-bootstrap"
import img1 from "../Pictures/men1.webp"
import img2 from "../Pictures/women 1.jpg"
import img3 from "../Pictures/women 2.webp"

export default function CarrouselElement() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption className="bg-dark">
                    <h3 className="black">Welcome To Our Clothes Store</h3>
                    <p>We provide have the top clothing quality out there</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className="bg-dark">
                    <h3 >Here we Have clothes for Men</h3>
                    <p>All Men wear are available in our store and you can shippable them everywhere</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption className="bg-dark">
                    <h3>As well for Women</h3>
                    <p>Find your unique style </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}