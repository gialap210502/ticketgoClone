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
                    <h3>Chương trình hòa nhạc đặc biệt: VNSO Holiday concert 2023 - Hòa nhạc mùa hè.    </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Manga Comic Con Việt Nam 2023</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Show diễn "Tinh Hoa Bắc Bộ"</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};
export default slideShow;