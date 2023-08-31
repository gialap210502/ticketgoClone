import slidefirst from '../../../assets/imgSlide/slidefirst.jpg';
import slide2 from '../../../assets/imgSlide/slide2.jpg';
import slide3 from '../../../assets/imgSlide/slide3.jpg';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios";
const SlideShow = () => {
    const state = useSelector((state) => state);
    //let itemList = useSelector((state)=> state.listItem.getList.current.items)
    const [listItems, setListItems] = useState([]);
    let itemList = [];
    if (state.listItem.getList.current && state.listItem.getList.current.items) {
        itemList = state.listItem.getList.current.items;
    }

    useEffect(() => {
        // fetchData();

    }, []);
    return (
        <div>
            <Carousel>
                {itemList?.map((item, index) => {
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