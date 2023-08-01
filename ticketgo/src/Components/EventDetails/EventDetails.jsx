import React from 'react';
import i3 from '../../assets/mediaImg/i3.jpg';
import i21 from '../../assets/mediaImg/i21.jpg';
import i22 from '../../assets/mediaImg/i22.jpg';
import i25 from '../../assets/mediaImg/i25.jpg';
const eventDetails = () => {
    return (
        <div>
            <div class="item">
                <img src={i3} alt="Vé xe bus 2 tầng tour ngày và ngắm cảnh đêm tại Hà Nội siêu HOT Vietnam Sightseeing" style={{ width: '100%' }} />
            </div>
            <div style={{ height: '30px' }}></div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-8">
                        <div style={{ fontSize: '24px', fontWeight: '700' }}>
                            Vé xe bus 2 tầng tour ngày và ngắm cảnh đêm tại Hà Nội siêu HOT Vietnam Sightseeing
                        </div>
                        <div class="event_info">
                            <p>
                                <i class="fa fa-clock-o" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                <span style={{ fontSize: '20px' }}>
                                    00:00
                                </span>
                            </p>
                            <p>
                                <i class="fa fa-calendar" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                <span style={{ fontSize: '20px' }}>
                                    Ngày 21
                                    Tháng 7
                                    Năm 2023
                                </span>
                            </p><p>
                                <i class="fa fa-map-marker" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                <span style={{ fontSize: '20px' }}>
                                    Nhà hát lớn Hà Nội , Hà Nội , Hà Nội
                                </span>
                            </p>
                        </div>
                        <div class="event_info">
                            <p style={{ marginTop: '10px', fontSize: '20px' }}>
                                <i class="fa fa-ticket" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                Vé 4 Tiếng (dành cho khách VN): 200.000,
                                Vé 4 Tiếng (dành cho khách VN) - trẻ em: 150.000,
                                Vé 4 tiếng dành cho khách nước ngoài: 299.000,
                                Vé 4 tiếng dành cho khách nước ngoài trẻ em: 225.000,
                                Vé 24 Tiếng - người lớn: 429.000,
                                Vé 24 Tiếng - trẻ em: 320.000,
                                Vé 48 Tiếng người lớn: 599.000,
                                Vé 48 tiếng trẻ em: 410.000,
                                Vé tour đêm người lớn: 155.000,
                                Vé tour đêm trẻ em: 115.000,
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="btn btn-primary flex w-100" style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '20px', textAlign: 'center' }}>

                            MUA NGAY

                            <i class="fa fa-paper-plane-o" style={{ marginLeft: '5px' }}></i>
                        </div>
                        <div class="socialIcon">
                            <a
                                className="fa-brands fa-facebook fa-2x"
                                style={{ color: "#1558cb", width: "50px", height: "50px", marginLeft: "15px" }}
                                href="https://www.facebook.com/ticketgo.vn/"
                            ></a>
                            <a class="fa fa-pinterest fa-2x"
                                style={{ color: "red", width: "50px", height: "50px", marginLeft: "15px" }}
                                href="https://www.pinterest.com/ticketgovn/"></a>
                            <a class="fa fa-twitter fa-2x"
                                style={{ color: "#1558cb", width: "50px", height: "50px", marginLeft: "15px" }}
                                href="https://twitter.com/TicketGo_vn"></a>
                            <a class="fa-brands fa-square-instagram fa-2x"
                                style={{ color: "#4b4c4e", width: "50px", height: "50px", marginLeft: "15px" }}
                                href="https://www.instagram.com/ticketgo.vn/"></a>
                            <a class="fa-brands fa-linkedin fa-2x"
                                style={{ color: "#1558cb", width: "50px", height: "50px", marginLeft: "15px" }}
                                href="https://www.pnkedin.com/in/news-ticketgo-72b814161/"></a>
                            <a class="fa fa-youtube fa-2x"
                                style={{ color: "red", width: "50px", height: "50px", marginLeft: "15px" }}
                                href="https://www.youtube.com/channel/UCtm90qWLPvNaDbYcsbkEO4A"></a>
                        </div>
                        <div id="contact_support" style={{ textAlign: 'center' }}>
                            <p>Liên hệ bộ phận chăm sóc khách hàng</p>
                            <p>Email: ticketgo.vn@gmail.com</p>
                            <p>vui lòng gọi: <a style={{ color: '#ff672a' }} href="tel:0899980818"><b>08.999.80.818</b></a> - <a style={{ color: '#ff672a' }} href="tel:02437880099"><b>0243.788.00.99</b></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#ff672a', border: 'none' }}>GIỚI THIỆU VỀ SỰ KIỆN</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p>
                        <span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}>
                            <strong>
                                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: "80%" }} src={i21} />
                            </strong>
                        </span>
                    </p>
                    <p style={{ textAlign: 'justify' }}><span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}><strong>◾&nbsp;</strong>Du lịch Hà Nội bằng xe buýt 2 tầng là một trải nghiệm thú vị và độc đáo cho du khách khi tới thăm thành phố. Với phương tiện này, bạn có cơ hội được ngắm nhìn nhiều địa danh nổi tiếng tại Thủ đô từ trên cao và có cơ hội check in cảnh đẹp. Dưới đây là một số trải nghiệm thú vị khi đi xe buýt 2 tầng ở Hà Nội:</span></p>
                    <p style={{ textAlign: 'justify' }}><span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}><strong>◾&nbsp;</strong>Ngắm nhìn toàn cảnh thành phố: với xe buýt 2 tầng Hà Nội, bạn có thể ngắm nhìn toàn cảnh của thành phố, chiêm ngưỡng các công trình kiến trúc nổi tiếng và các địa danh lịch sử, văn hóa của Thủ đô như:&nbsp;<strong>nhà tù Hỏa Lò, Hoàng thành Thăng Long, Lăng chủ tịch Hồ Chí Minh, nhà hát Lớn Hà Nội</strong>…</span></p>
                    <p style={{ textAlign: 'justify' }}><span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}><strong>◾&nbsp;</strong>Check in nhiều cảnh đẹp: với xe buýt 2 tầng tại Hà Nội, bạn có thể thoải mái check in nhiều cảnh đẹp với view từ trên cao.&nbsp;</span></p>
                    <p style={{ textAlign: 'justify' }}><span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}><strong>◾&nbsp;</strong>Tận hưởng không khí mát mẻ: trên xe buýt 2 tầng, bạn có thể tận hưởng không khí trong lành, mát mẻ của thành phố. Đặc biệt là những ngày mùa xuân hoặc thu.&nbsp;</span></p>
                    <p style={{ textAlign: 'justify' }}><span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}><strong>◾&nbsp;</strong>Tự do xem các chương trình giải trí được cài đặt sẵn trên xe buýt.&nbsp;</span></p>
                    <p style={{ textAlign: 'justify' }}><span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}><strong>◾&nbsp;</strong>Sử dụng màn hình, tủ lạnh, cổng sạc và wifi hoàn toàn miễn phí.&nbsp;</span></p>
                    <p>
                        <span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}>
                            <strong>
                                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: "80%" }} src={i22} />
                            </strong>
                        </span>
                    </p>

                </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#ff672a', border: 'none' }}>THÔNG TIN SẢN PHẨM</h2>
                </div>
                <div class="card" data-bs-toggle="collapse" href="#collapseOne" >
                    <div class="card-header" style={{ background: "#ff672a" }}>
                        <span class="fa fa-paper-plane-o" style={{ marginRight: '10px', color: 'white' }}></span>
                        <span style={{ color: 'white' }}>Vé 4 Tiếng (dành cho khách VN)</span>
                        <span style={{ float: 'right', color: 'white' }}>200.000 VNĐ</span>
                    </div>
                    <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
                <div class="card" data-bs-toggle="collapse" href="#collapse2" >
                    <div class="card-header" style={{ background: "#ff672a" }}>
                        <span class="fa fa-paper-plane-o" style={{ marginRight: '10px', color: 'white' }}></span>
                        <span style={{ color: 'white' }}>Vé 4 Tiếng (dành cho khách VN)</span>
                        <span style={{ float: 'right', color: 'white' }}>200.000 VNĐ</span>
                    </div>
                    <div id="collapse2" class="collapse show" data-bs-parent="#accordion">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
                <div class="card" data-bs-toggle="collapse" href="#collapse3" >
                    <div class="card-header" style={{ background: "#ff672a" }}>
                        <span class="fa fa-paper-plane-o" style={{ marginRight: '10px', color: 'white' }}></span>
                        <span style={{ color: 'white' }}>Vé 4 Tiếng (dành cho khách VN)</span>
                        <span style={{ float: 'right', color: 'white' }}>200.000 VNĐ</span>
                    </div>
                    <div id="collapse3" class="collapse show" data-bs-parent="#accordion">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
                <div class="card" data-bs-toggle="collapse" href="#collapse4" >
                    <div class="card-header" style={{ background: "#ff672a" }}>
                        <span class="fa fa-paper-plane-o" style={{ marginRight: '10px', color: 'white' }}></span>
                        <span style={{ color: 'white' }}>Vé 4 Tiếng (dành cho khách VN)</span>
                        <span style={{ float: 'right', color: 'white' }}>200.000 VNĐ</span>
                    </div>
                    <div id="collapse4" class="collapse show" data-bs-parent="#accordion">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
                <div class="card" data-bs-toggle="collapse" href="#collapse5" >
                    <div class="card-header" style={{ background: "#ff672a" }}>
                        <span class="fa fa-paper-plane-o" style={{ marginRight: '10px', color: 'white' }}></span>
                        <span style={{ color: 'white' }}>Vé 4 Tiếng (dành cho khách VN)</span>
                        <span style={{ float: 'right', color: 'white' }}>200.000 VNĐ</span>
                    </div>
                    <div id="collapse5" class="collapse show" data-bs-parent="#accordion">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#ff672a', border: 'none' }}>THÔNG TIN ĐƠN VỊ TỔ CHỨC</h2>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={i25} style={{ border: '1px solid gray' }} />
                    </div>
                    <div className="col-10">
                        <h4 style={{ fontSize: '18px', fontWeight: '700' }}>VIETNAM SIGHTSEEING</h4>
                        <div>
                            <p style={{ textAlign: 'justify' }}>
                                <span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}>
                                    Vietnam Sightseeing là một trong những đơn vị tiên phong mang dịch vụ
                                    trải nghiệm du lịch bằng Xe buýt 2 tầng thoáng nóc đến với Việt Nam. Khám
                                    phá thành phố bằng phương tiện Xe buýt 2 tầng thoáng nóc hiện là xu hướng du lịch vô cùng độc đáo, thú vị trên thế giới và đang nhận được sự ủng hộ tích cực từ đa số khách hàng tại Việt Nam. Đặc biệt, khác với hình thức di chuyển khác, hình thức Hop On Hop Off (tên gọi loại xe đón và trả khách tại các điểm du lịch nổi tiếng trong thành phố) cho phép hành khách có thời gian tự khám phá, trải nghiệm và thoải mái về thời gian)</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#ff672a', border: 'none' }}> SỰ KIỆN LIÊN QUAN</h2>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
                    <div className="col-sm-3">
                        <div >
                            <a href="#">
                                <img style={{ height: '150px' }} src={i3} />
                            </a>
                            <div className="row">
                                <div className="col-5" style={{ color: '#ff672a' }}>
                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> Hà Nội <span>+</span>
                                </div>
                                <div className="col-5" style={{ color: '#ff672a' }}>
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
        </div>
    );
};
export default eventDetails;  