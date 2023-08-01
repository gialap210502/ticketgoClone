import React from 'react';
import './Footer.css';
function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                        <h3 className="footer_title">Liên Hệ Hợp Tác</h3>
                        <p>Điện thoại: 0243.788.00.99 (8:30 - 17:00)</p>
                        <p>Hotpne: 08.999.80.818</p>
                        <p>Email: ticketgo.vn@gmail.com</p>
                        <p>Địa chỉ: Số 1, Phạm Văn Bạch, phường Yên Hòa, quận Cầu Giấy, Hà Nội.</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                        <h3 className="footer_title">Thông tin</h3>
                        <p>
                            <a href="https://ticketgo.vn/page/ve-chung-toi">
                                Về chúng tôi
                            </a>
                        </p>
                        <p><a href="">Khuyến mãi</a></p>
                        <p><a href="https://ticketgo.vn/page/phuong-thuc-thanh-toan">Phương thức thanh toán</a></p>
                        <p>
                            <a href="https://ticketgo.vn/page/chinh-sach-bao-mat-va-cac-dieu-khoan">
                                Chính sách bảo mật và các điều khoản</a>
                        </p>
                        <p><a href="https://ticketgo.vn/page/huong-dan-dat-ve">Hướng dẫn đặt vé</a></p>
                        <p><a href="https://ticketgo.vn/page/cac-cau-hoi-thuong-gap">Các câu hỏi thường gặp</a></p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                        <h3 class="footer_title">Khách hàng</h3>
                        <p>
                            <a href="https://ticketgo.vn/merchants/index">
                                Đăng nhập dành cho đối tác</a>
                        </p>
                        <p>
                            <a href="https://ticketgo.vn/find-order">
                                Tra cứu thông tin đặt vé</a>
                        </p>
                        <p>
                            <a href="https://ticketgo.vn/user/showMyProfile">
                                Tài khoản</a>
                        </p>
                        <p>
                            <a href="https://ticketgo.vn">
                                Gửi sự kiện</a>
                        </p>
                        <p>
                            <a href="https://ticketgo.vn">
                                Danh sách sự kiện</a>
                        </p>
                        <p>
                            <a href="https://ticketgo.vn/su-kien-da-dien-ra">
                                Sự kiện đã diễn ra</a>
                        </p>
                        <p>
                            <a href="https://ticketgo.vn/page/chuong-trinh-go-xu">
                                Chương trình Go Xu</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                        <h3 class="footer_title">Đăng ký nhận email</h3>
                        {/* <form action="https://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=eventticketgo', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true">
                            <div class="btn-subscribe rounded input-group overflow-hidden">
                                <div class="i-email input-group-addon"><span class="ello-mail-alt">
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                </span></div>
                                <div class="relative form-control subscribe-input">
                                    <div class="relative form-control subscribe-input">
                                    </div>
                                </div>
                            </div>
                        </form> */}
                        <div class="input-group col">
                            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                            <input type="text" class="form-control" placeholder="Username"/>
                                <button type="submit" class="btn btn-secondary"><i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                        <div class="socialIcon">
                            <i ></i>
                            <a
                                className="fa-brands fa-facebook fa-2x"
                                style={{ color: "#1558cb", width: "50px", height: "50px" }}
                                href="https://www.facebook.com/ticketgo.vn/"
                            ></a>
                            <a class="fa fa-pinterest fa-2x"
                                style={{ color: "red", width: "50px", height: "50px" }}
                                href="https://www.pinterest.com/ticketgovn/"></a>
                            <a class="fa fa-twitter fa-2x"
                                style={{ color: "#1558cb", width: "50px", height: "50px" }}
                                href="https://twitter.com/TicketGo_vn"></a>
                            <a class="fa-brands fa-square-instagram fa-2x"
                                style={{ color: "#4b4c4e", width: "50px", height: "50px" }}
                                href="https://www.instagram.com/ticketgo.vn/"></a>
                            <a class="fa-brands fa-linkedin fa-2x"
                                style={{ color: "#1558cb", width: "50px", height: "50px" }}
                                href="https://www.pnkedin.com/in/news-ticketgo-72b814161/"></a>
                            <a class="fa fa-youtube fa-2x"
                                style={{ color: "red", width: "50px", height: "50px" }}
                                href="https://www.youtube.com/channel/UCtm90qWLPvNaDbYcsbkEO4A"></a>
                        </div>
                        <div className="company_id_footer">
                            <p>Giấy phép Kinh doanh số 0107641285 do Sở Kế Hoạch & Đầu Tư Thành Phố Hà Nội cấp ngày 21/11/2016</p>
                            <a className="pcense" href="http://onpne.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=36877">
                                <img src="../../../dathongbao_bct.png" alt="ticketgo.vn đã thông báo với bộ công thương" />
                            </a>
                            <br />
                            <a href="https://www.dmca.com/Protection/Status.aspx?ID=c6007083-db1a-4a4f-82aa-206ed787e27b&amp;refurl=https://ticketgo.vn/" title="DMCA.com Protection Status" className="dmca-badge">
                                <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=c6007083-db1a-4a4f-82aa-206ed787e27b" alt="DMCA.com Protection Status" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
