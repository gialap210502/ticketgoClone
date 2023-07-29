import React from 'react';
import { Carousel } from 'react-bootstrap';
const slideShow = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>This is the caption for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>This is the caption for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p>This is the caption for the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default slideShow;