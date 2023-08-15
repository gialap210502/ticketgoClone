import React from 'react';
import i1 from '../../../assets/mediaImg/i1.jpg';
import i2 from '../../../assets/mediaImg/i2.jpg';
import i3 from '../../../assets/mediaImg/i3.jpg';
import i4 from '../../../assets/mediaImg/i4.jpg';
import i5 from '../../../assets/mediaImg/i5.jpg';
import i6 from '../../../assets/mediaImg/i6.jpg';
import i7 from '../../../assets/mediaImg/i7.jpg';
import i8 from '../../../assets/mediaImg/i8.jpg';
import i9 from '../../../assets/mediaImg/i9.jpg';
import i11 from '../../../assets/mediaImg/i11.png';
import i12 from '../../../assets/mediaImg/i12.png';
import i13 from '../../../assets/mediaImg/i13.png';
import i14 from '../../../assets/mediaImg/i14.png';
import i15 from '../../../assets/mediaImg/i15.png';
import i16 from '../../../assets/mediaImg/i16.png';
import i17 from '../../../assets/mediaImg/i17.jpg';
import i18 from '../../../assets/mediaImg/i18.jpg';
import i19 from '../../../assets/mediaImg/i19.jpg';
import i20 from '../../../assets/mediaImg/i20.jpg';
import slide3 from '../../../assets/imgSlide/slide3.jpg';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const EventDisplay = () => {

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
        <div className="container" style={{ paddingBottom: '15px' }}>
            <div className="row">
                {listItems?.map((item, index) => {
                    if (index < 2) {
                        return (
                            <div className="col-6" key={item.id}>
                                <img className="rounded bigImg" src={item.fields.Image} alt={`Image ${index}`} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="row" style={{ height: '150px', paddingTop: '10px' }}>
                {listItems?.map((item, index) => {
                    if (index >= 2 && index < 6) {
                        return (
                            <div className="col-sm-3" key={item.id}>
                                <img className="rounded" style={{ height: '150px' }} src={item.fields.Image} alt={`Image ${index}`} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="row" style={{ paddingTop: '35px' }}>
                <h2>SỰ KIỆN SẮP DIỄN RA</h2>
            </div>
            <div className="row" >
                {listItems?.map(item => (
                    <div class="col-md-4 col-sm-6 " key={item.id}>
                        <div className="rounded">
                            <div>
                                <a href={`/event/${item.id}`}>
                                    <img style={{ height: '200px' }} src={item.fields.Image} />
                                </a>
                                <div className="row">
                                    {/* <div className="col-4">
                                        <span class="fa fa-eye" style={{ color: '#ff672a' }}></span> 1,000
                                    </div> */}
                                    <div className="col-6">
                                        <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> {item.fields.address && item.fields.address.split(', ').pop()} <span>+</span>
                                    </div>
                                    <div className="col-6" style={{ float: 'right' }}>
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
                ))}
                <div className="text-center" style={{ paddingTop: '35px' }}>
                    <button id="loadMoreEvent" class="btn btn-danger" type="submit" style={{ backgroundColor: '#ff672a' }} >
                        <i class="fa fa-bars"></i> Xem thêm các sự kiện sắp diễn ra	</button>
                </div>
            </div>
            <div className="text-center" style={{ paddingTop: '20px', color: '#ff672a', fontSize: '20px', fontWeight: 'bold' }}>
                THỂ LOẠI SỰ KIỆN
            </div>
            <div className="row" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                <div className="row" style={{ height: '200px' }}>
                    <div className="col-3" style={{ position: 'relative' }}>
                        <a href="/event/category/Music">
                            <img className="rounded bigImg" style={{ height: '180px' }} src={i11} />
                            <div className="text-overlay" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '20px'
                            }}>
                                Hội Chợ
                            </div>
                        </a>
                    </div>
                    <div className="col-6" style={{ position: 'relative' }} >
                        <a href="/event/category/Music">
                            <img className="rounded bigImg" style={{ height: '180px' }} src={i12} />
                            <div className="text-overlay" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '20px'
                            }}>
                                Âm nhạc
                            </div>
                        </a>
                    </div>
                    <div className="col-3" style={{ position: 'relative' }} >
                        <a href="/event/category/Tour">
                            <img className="rounded bigImg" style={{ height: '180px' }} src={i13} />
                            <div className="text-overlay" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '20px'
                            }}>
                                game show
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row" style={{ height: '150px' }}>
                    <div className="col-3" style={{ position: 'relative' }} >
                        <a href="/event/category/Art">
                            <img className="rounded bigImg" style={{ height: '180px' }} src={i14} />
                            <div className="text-overlay" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '20px'
                            }}>
                                văn hóa nghệ thuật
                            </div>
                        </a>
                    </div>
                    <div className="col-3" style={{ position: 'relative' }} >
                        <a href="/event/category/Tour">
                            <img className="rounded bigImg" style={{ height: '180px' }} src={i15} />
                            <div className="text-overlay" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '20px'
                            }}>
                                giáo dục
                            </div>
                        </a>
                    </div>
                    <div className="col-6" style={{ position: 'relative' }} >
                        <a href="/event/category/Sport">
                            <img className="rounded bigImg" style={{ height: '180px' }} src={i16} />
                            <div className="text-overlay" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '20px'
                            }}>
                                thể thao
                            </div>
                        </a>
                    </div>
                </div>
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
export default EventDisplay;    