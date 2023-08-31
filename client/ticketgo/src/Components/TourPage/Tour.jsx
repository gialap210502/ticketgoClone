import React from 'react';
import i1 from '../../assets/mediaImg/i1.jpg';
import './Tour.css'
import i3 from '../../assets/mediaImg/i3.jpg';
import { useEffect, useState } from 'react';
import axios from "axios";

const EventTourDisplay = () => {
    const [listItems, setListItems] = useState([]);
    const fetchData = async () => {
        try {
            const authtoken = await axios.get('https://lapduong.gcalls.vn/auth');
            console.log(authtoken);
            const list = await axios.get('https://lapduong.gcalls.vn/listTableRecords');
            console.log(list.data.items);
            setListItems(list.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    let itemDisplayed = false;

    return (
        <div className='container' style={{ paddingTop: '10px', paddingBottom: '35px' }}>

            <div className='row'>
                <div className='col-6'>
                    <ul className=" rounded breadcrumb" style={{ width: '160px' }}>
                        <li><a style={{ color: '#fff' }} href="/">Trang chủ /</a></li>
                        <li><span>Tour</span></li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                {listItems?.map((item) => {
                    if (!itemDisplayed && item.fields.Category && item.fields.Category.includes("Tour")) {
                        itemDisplayed = true;
                        return (
                            <div className='row' key={item.id}>
                                <div className='col-6'>
                                    <img style={{ height: '290px' }} className='rounded' src={item.fields.Image} />
                                </div>
                                <div className='col-6'>
                                    <div className="sub_event_cate">
                                        <h3><a href={`/event/${item.id}`}>{item.fields["Product Name"]}</a></h3>
                                        <div className="ticket_hot_cate">
                                            <div className="row">
                                                {/* <div className='col-2' style={{ paddingLeft: '15px' }}>
                                                    <span className="fa fa-eye" style={{ color: '#ff672a', marginRight: '5px' }}></span>
                                                    1.702
                                                </div> */}
                                                <div className='col-4' style={{ paddingLeft: '15px' }}>
                                                    <span className="fa fa-map-marker" style={{ color: '#ff672a', marginRight: '5px' }}></span>
                                                    <span style={{ fontWeight: 'bold' }}>{item.fields.address && item.fields.address.split(', ').pop()}</span>
                                                </div>
                                                <div className='col-8' style={{ float: 'right', fontSize: '18px', color: '#ff672a', fontWeight: '700' }}>
                                                    <span style={{ float: 'right' }}> {item.fields.Type && Array.isArray(item.fields.Type) && item.fields.Type[0].split(': ')[1]} + </span>  <span style={{ float: 'right' }}> VNĐ&nbsp; </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hot_cate_info" style={{ paddingTop: '20px', fontWeight: '400', textTransform: 'lowercase', fontSize: '14px' }}>
                                            {item.fields.Intro?.length > 700 ? `${item.fields.Intro.slice(0, 700)} . . .` : item.fields.Intro}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <hr />
            <div className="row" style={{ float: 'right', color: '#ff672a', fontSize: '17px', fontFamily: 'open sans' }}>
                <p>Tổng số : {listItems.filter(item => item.fields.Category && item.fields.Category.includes("Tour")).length}  Sự kiện</p>
            </div>
            <div style={{ height: '45px' }}></div>
            <div className="row" style={{ display: 'flex' }} >
                {listItems?.map((item) => {
                    if (item.fields.Category && item.fields.Category.includes("Tour")) {
                        return (
                            <div className="col-sm-3" style={{ width: '400px', paddingRight: '10px' }} key={item.id}>
                                <div className="rounded">
                                    <div>
                                        <a href={`/event/${item.id}`}>
                                            <img style={{ height: '190px' }} src={item.fields.Image} />
                                        </a>
                                        <div className="row">
                                            {/* <div className="col-4">
                                            <span class="fa fa-eye" style={{ color: '#ff672a' }}></span> 1,000
                                        </div> */}
                                            <div className="col-6">
                                                <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> {item.fields.address && item.fields.address.split(', ').pop()} <span>+</span>
                                            </div>
                                            <div className="col-6">
                                                | <span style={{ color: '#ff672a', fontWeight: '700' }}>VNĐ</span> {item.fields.Type && Array.isArray(item.fields.Type) && item.fields.Type[0].split(': ')[1]}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '14px', color: 'black', textAlign: 'center' }}>
                                            <a href={`/event/${item.id}`} style={{ color: 'black' }}>
                                                {item.fields["Product Name"]}
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}

            </div>
            <div className="text-center" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12" >
                    <h2 style={{ marginBottom: '0', marginTop: '15px', borderLeft: 'none' }}>
                        <span >Bắt đầu bán vé sự kiện của bạn với</span>
                        <img src="../../../logo3.png" alt="tạo sự kiện với ticketgo" />
                    </h2>
                </div>
            </div>
            <div className="text-center" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12" id="contacts">
                    <p>Liên hệ bộ phận phát triển kinh doanh, vui lòng gọi: <a style={{ color: '#ff672a' }} href="tel:08.999.80.818" class="link">08.999.80.818</a> - <a style={{ color: '#ff672a' }} href="tel:0243.788.00.99" class="link">0243.788.00.99</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default EventTourDisplay;  