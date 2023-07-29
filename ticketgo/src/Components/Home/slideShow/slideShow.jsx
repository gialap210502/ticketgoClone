import slidefirst from '../../../assets/imgSlide/slidefirst.jpg';
import slide2 from '../../../assets/imgSlide/slide2.jpg';
import slide3 from '../../../assets/imgSlide/slide3.jpg';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const slideShow = () => {
    return (
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slidefirst}
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
                    src={slide2}
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
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p>This is the caption for the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};
export default slideShow;