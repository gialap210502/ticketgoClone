import React from 'react';
import i1 from '../../assets/mediaImg/i1.jpg';
import './Music.css'
import i3 from '../../assets/mediaImg/i3.jpg';
const eventMusicDisplay = () => {
    return (
        <div className='container' style={{ paddingTop: '10px', paddingBottom: '35px' }}>
            <div className='row'>
                <div className='col-6'>
                    <ul className=" rounded breadcrumb" style={{ width: '160px' }}>
                        <li><a style={{ color: '#fff' }} href="https://ticketgo.vn">Trang chủ /</a></li>
                        <li><span>Ca Nhạc</span></li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <img src={i1} className='rounded' />
                </div>
                <div className='col-6'>
                    <div className="sub_event_cate">
                        <h3><a href="https://ticketgo.vn/event/liveshow-hoang-dung-the-bao-ft-mau-nuoc-band-tai-da-lat-ngay-4-8-2023">Liveshow Hoàng Dũng - Thế Bảo ft Màu Nước Band tại Đà Lạt - Ngày 4.8.2023</a></h3>
                        <div className="ticket_hot_cate">
                            <div className="row">
                                <div className='col-2' style={{ paddingLeft: '15px' }}>
                                    <span class="fa fa-eye" style={{ color: '#ff672a', marginRight: '5px' }}></span>
                                    1.702
                                </div>
                                <div className='col-2'>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a', marginRight: '5px' }}></span>
                                    <span>&nbsp;Lâm Đồng</span>
                                </div>
                                <div className='col-8' style={{ float: 'right', fontSize: '18px', color: '#ff672a', fontWeight: '700' }}>
                                    <span style={{ float: 'right' }}> 350.000 + </span>  <span style={{ float: 'right' }}> VNĐ&nbsp; </span>
                                </div>
                            </div>
                        </div>
                        <div className="hot_cate_info" style={{ paddingTop: '20px', fontWeight: '400', textTransform: 'lowercase', fontSize: '14px' }}>
                            "Đã đi Đà Lạt thì không thể bỏ qua những quán cafe acoustic."
                            Đây quả thật là câu nói đúng đắn. Thử tưởng tượng dưới tiết trời se lạnh bạn được nhâm nhi ly trà nóng. Ngân nga theo giai điệu acoustic sẽ như thế nào? Đây chắc chắn là trải nghiệm chill không thể quên được đấy nhé.
                            Lululola là một quán cafe chuyên về nhạc acoustic tại Đà Lạt. Với không gian mở, view đồi núi hoàng hôn cực chill. Chính vì vậy mà quán nhận được sự yêu thích của du khách 4 phương.
                            Mục đích đem những bản tình ca của các ca sĩ nổi tiếng đến với bạn trong buổi chiều nhẹ dịu. Giúp bạn gạt bỏ bộn bề và hòa mình vào sự b...
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row" style={{ float: 'right', color: '#ff672a', fontSize: '17px', fontFamily: 'open sans' }}>
                <p>Tổng số : 5 Sự kiện</p>
            </div>
            <div style={{ height: '45px' }}></div>
            <div className="row" style={{ display: 'flex' }} >
                <div className="col-sm-3" style={{ width: '400px', paddingRight: '10px' }}>
                    <div className="rounded">
                        <div>
                            <a href="#">
                                <img style={{ height: '190px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-4">
                                    <span class="fa fa-eye" style={{ color: '#ff672a' }}></span> 1,000
                                </div>
                                <div className="col-4">
                                    | <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-4">
                                    | <span style={{ color: '#ff672a', fontWeight: '700' }}>VNĐ</span> 540.000
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '14px', color: 'black', textAlign: 'center' }}>
                                <a href="#" style={{ color: 'black' }}>
                                    Học SUP - Chơi SUP tại ngoại thành Hà Nội - 0,5 ngày - Umove Adventure [HN02]
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3" style={{ width: '400px', paddingRight: '10px' }}>
                    <div className="rounded">
                        <div>
                            <a href="#">
                                <img style={{ height: '190px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-4">
                                    <span class="fa fa-eye" style={{ color: '#ff672a' }}></span> 1,000
                                </div>
                                <div className="col-4">
                                    | <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-4">
                                    | <span style={{ color: '#ff672a', fontWeight: '700' }}>VNĐ</span> 540.000
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '14px', color: 'black', textAlign: 'center' }}>
                                <a href="#" style={{ color: 'black' }}>
                                    Học SUP - Chơi SUP tại ngoại thành Hà Nội - 0,5 ngày - Umove Adventure [HN02]
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3" style={{ width: '400px', paddingRight: '10px' }}>
                    <div className="rounded">
                        <div>
                            <a href="#">
                                <img style={{ height: '190px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-4">
                                    <span class="fa fa-eye" style={{ color: '#ff672a' }}></span> 1,000
                                </div>
                                <div className="col-4">
                                    | <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-4">
                                    | <span style={{ color: '#ff672a', fontWeight: '700' }}>VNĐ</span> 540.000
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '14px', color: 'black', textAlign: 'center' }}>
                                <a href="#" style={{ color: 'black' }}>
                                    Học SUP - Chơi SUP tại ngoại thành Hà Nội - 0,5 ngày - Umove Adventure [HN02]
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3" style={{ width: '400px', paddingRight: '10px' }}>
                    <div className="rounded">
                        <div>
                            <a href="#">
                                <img style={{ height: '190px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-4">
                                    <span class="fa fa-eye" style={{ color: '#ff672a' }}></span> 1,000
                                </div>
                                <div className="col-4">
                                    | <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-4">
                                    | <span style={{ color: '#ff672a', fontWeight: '700' }}>VNĐ</span> 540.000
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '14px', color: 'black', textAlign: 'center' }}>
                                <a href="#" style={{ color: 'black' }}>
                                    Học SUP - Chơi SUP tại ngoại thành Hà Nội - 0,5 ngày - Umove Adventure [HN02]
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3" style={{ width: '400px', paddingRight: '10px' }}>
                    <div className="rounded">
                        <div>
                            <a href="#">
                                <img style={{ height: '190px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-4">
                                    <span class="fa fa-eye" style={{ color: '#ff672a' }}></span> 1,000
                                </div>
                                <div className="col-4">
                                    | <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-4">
                                    | <span style={{ color: '#ff672a', fontWeight: '700' }}>VNĐ</span> 540.000
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '14px', color: 'black', textAlign: 'center' }}>
                                <a href="#" style={{ color: 'black' }}>
                                    Học SUP - Chơi SUP tại ngoại thành Hà Nội - 0,5 ngày - Umove Adventure [HN02]
                                </a>
                            </h3>
                        </div>
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
export default eventMusicDisplay;  