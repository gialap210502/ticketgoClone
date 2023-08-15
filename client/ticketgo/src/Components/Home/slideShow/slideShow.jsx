import slidefirst from '../../../assets/imgSlide/slidefirst.jpg';
import slide2 from '../../../assets/imgSlide/slide2.jpg';
import slide3 from '../../../assets/imgSlide/slide3.jpg';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from "axios";
const SlideShow = () => {

    const [listItems, setListItems] = useState([]);
    const fetchData = async () => {
        try {
            const authtoken = await axios.get('http://localhost:5500/auth');
            console.log(authtoken);
            const list = await axios.get('http://localhost:5500/listTableRecords');
            console.log(list.data.items);
            setListItems(list.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Carousel>
                {listItems?.map((item, index) => {
                    if (index < 4) {
                        return (
                            <Carousel.Item key={item.id}>
                                <img
                                    className="d-block w-100" src={item.fields.Image} alt={`Image ${index}`}
                                />
                                <Carousel.Caption>
                                    <h3>Chương trình hòa nhạc đặc biệt: VNSO Holiday concert 2023 - Hòa nhạc mùa hè.    </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    }
                    return null;
                })}

            </Carousel>
        </div>
    );
};
export default SlideShow;