import React from 'react';
//import './Footer.css';
const header = () => {
    return (
        <div class="navbar__top">
            <div class="container">
                <div class="row_pc">
                    <div class="row">
                        <nav class="navbar">
                            <div class="col-xs-12">
                                <ul class="nav navbar-nav">
                                    <li><a href="https://ticketgo.vn/event/category/am-nhac">Vé ca nhạc</a></li>
                                    <li><a href="https://ticketgo.vn/event/category/van-hoa-nghe-thuat">Văn hóa nghệ thuật</a></li>
                                    <li><a href="https://ticketgo.vn/event/category/tour">Tour</a></li>
                                    <li><a href="https://ticketgo.vn/event/category/the-thao" target="_blank">Thể thao</a></li>
                                    <li><a href="https://ticketgo.vn/ve-may-bay/gtd	">Vé máy bay / Khách sạn</a></li>
                                    <li><a href="https://ticketgo.vn/event/category/movies">Vé xem phim</a></li>
                                    <li><a href="https://ticketgo.vn/blog">Tin tức</a></li>
                                    <li><a href="https://ticketgo.vn/videos">Video</a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right navbar-form nav__form__location">
                                    <select id="option_city" class="form-control" onchange="window.document.location.href=this.options[this.selectedIndex].value;">
                                        <option value="">Chọn địa điểm</option>
                                        <option value="https://ticketgo.vn/location/ha-noi">Hà Nội</option>
                                        <option value="https://ticketgo.vn/location/ho-chi-minh">Hồ Chí Minh</option>
                                        <option value="https://ticketgo.vn/location/quang-ninh">Quảng Ninh</option>
                                        <option value="https://ticketgo.vn/location/thua-thien-hue">Huế</option>
                                        <option value="https://ticketgo.vn/location/quang-nam">Quảng Nam</option>
                                        <option value="https://ticketgo.vn/location/da-nang">Đà Nẵng</option>
                                    </select>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default header;