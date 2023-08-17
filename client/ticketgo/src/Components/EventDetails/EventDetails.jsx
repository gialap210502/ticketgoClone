import React from 'react';
import PaymentForm from "../../PaymentForm";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useEffect, useState } from 'react';
import axios from "axios";
import moment from 'moment';
import { useParams } from 'react-router-dom';
//import { getCodeAuth, getList } from '../../../redux/apiRequest';
import { useSelector, useDispatch } from 'react-redux';
const EventDetails = () => {
    const [show, setShow] = useState(false);
    const [showPay, setShowPay] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClosePay = () => setShowPay(false);
    const handleShowPay = () => setShowPay(true);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const [timeStamp, setTimeStamp] = useState('');

    const [listItems, setListItems] = useState([]);
    const domain = 'https://sandbox.megapay.vn';
    const fetchData = async () => {
        try {
            // getCodeAuth(dispatch);
            // getList(dispatch);
            const authtoken = await axios.get('http://localhost:5500/auth');
            const list = await axios.get('http://localhost:5500/listTableRecords');
            setListItems(list.data.items);

            //window.openPayment(1, domain);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePaymentClick = () => {
        // Gọi hàm khi người dùng chọn thanh toán
        const iframe = document.createElement('iframe');
        iframe.src = domain + '/pg_was/js/payment/layer/paymentClient.js';
        document.body.appendChild(iframe);

        // Gọi hàm openPayment sau khi tệp script được tải
        iframe.onload = () => {
            window.openPayment(1, domain);
        };
    };
    useEffect(() => {
        fetchData();
        const formatTimeStamp = moment().format('YYYYMMDDHHmmss');
        setTimeStamp(formatTimeStamp);
        console.log("hello" + timeStamp);
    }, []);
    const { eventId } = useParams();

    //const merId = 'EPAY000001';
    // const current_time = datetime.datetime.now();
    // const formatted_time = current_time.strftime('%Y%m%d%H%M%S');


    const merTrxId = 'qwfeqw'
    const merId = 'EPAY000001'
    const amount = '200000'
    const encodeKey = "rf8whwaejNhJiQG2bsFubSzccfRc/iRYyGUn6SPmT6y/L7A2XABbu9y4GvCoSTOTpvJykFi6b1G0crU8et2O0Q=="
    const input_string = timeStamp + merTrxId + merId + amount + encodeKey

    const sha256 = require('js-sha256');
    //const input_string = "20230817153020qwfeqwEPAY000001200000rf8whwaejNhJiQG2bsFubSzccfRc/iRYyGUn6SPmT6y/L7A2XABbu9y4GvC";
    const merchantToken = sha256(input_string);

    console.log(merchantToken)

    return (
        <div>
            <div>
                {listItems?.map((item, index) => {
                    if (item.id && item.id.includes(eventId)) {
                        return (
                            <div>
                                <div class="item">
                                    <img src={item.fields.Image} alt="Vé xe bus 2 tầng tour ngày và ngắm cảnh đêm tại Hà Nội siêu HOT Vietnam Sightseeing" style={{ width: '100%' }} />
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="container shadow p-3 mb-5 bg-white rounded">
                                    <div className="row">
                                        <div className="col-8">
                                            <div style={{ fontSize: '24px', fontWeight: '700' }}>
                                                {item.fields["Product Name"]}
                                            </div>
                                            <div class="event_info">
                                                <p>
                                                    <i class="fa fa-clock-o" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                                    <span style={{ fontSize: '20px' }}>
                                                        {item.fields.Date.split(' ')[1]}
                                                    </span>
                                                </p>
                                                <p>
                                                    <i class="fa fa-calendar" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                                    <span style={{ fontSize: '20px' }}>
                                                        {item.fields.Date.split(' ')[0]}
                                                    </span>
                                                </p><p>
                                                    <i class="fa fa-map-marker" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                                    <span style={{ fontSize: '20px' }}>
                                                        {item.fields.address}
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="event_info">
                                                <p style={{ marginTop: '10px', fontSize: '20px' }}>
                                                    <i class="fa fa-ticket" style={{ color: '#ff672a', marginRight: '5px' }}></i>
                                                    {item.fields.Describe}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="btn btn-primary flex w-100" style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '20px', textAlign: 'center' }} onClick={handleShow}>

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
                                                    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: "80%" }} src={item.fields.Image} />
                                                </strong>
                                            </span>
                                        </p>
                                        <p style={{ textAlign: 'justify' }}>
                                            <span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}><strong>◾&nbsp;</strong>
                                                {item.fields.Intro}
                                            </span></p>
                                    </div>
                                </div>
                                <div className="container shadow p-3 mb-5 bg-white rounded">
                                    <div style={{ textAlign: 'center' }}>
                                        <h2 style={{ color: '#ff672a', border: 'none' }}>THÔNG TIN ĐƠN VỊ TỔ CHỨC</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={item.fields.orgImg} />
                                        </div>
                                        <div className="col-10">
                                            <h4 style={{ fontSize: '18px', fontWeight: '700' }}>{item.fields["ORGANIZATIONAL UNITS"]}</h4>
                                            <div>
                                                <p style={{ textAlign: 'justify' }}>
                                                    <span style={{ fontFamily: 'verdana, geneva, sans-serif', fontSize: '12pt' }}>
                                                        {item.fields.orgIntro}
                                                    </span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}

                <div className="container shadow p-3 mb-5 bg-white rounded">
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ color: '#ff672a', border: 'none' }}> SỰ KIỆN LIÊN QUAN</h2>
                    </div>
                    <div className="row">
                        {listItems?.map((item, index) => {
                            if (index < 8) {
                                return (
                                    <div className="col-sm-3">
                                        <div >
                                            <a href={`/event/${item.id}`}>
                                                <img style={{ height: '150px' }} src={item.fields.Image} />
                                            </a>
                                            <div className="row">
                                                <div className="col-6" style={{ color: '#ff672a' }}>
                                                    <span class="fa fa-map-marker" style={{ color: '#ff672a' }}></span> {item.fields.address && item.fields.address.split(', ').pop()}
                                                </div>
                                                <div className="col-6" style={{ color: '#ff672a' }}>
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
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                <Modal show={show} size='xl' >
                    <Modal.Body>
                        <div className="container">
                            <Form id="megapayForm" name="megapayForm" method="POST">
                                <input type="hidden" name="merId" value={merId} />
                                <input type="hidden" name="currency" value="VND" />
                                <input type="hidden" name="amount" value={amount} />
                                <input type="hidden" name="invoiceNo" value="test200000" />
                                <input type="hidden" name="goodsNm" value="Test Payment" />
                                <input type="hidden" name="payType" value="DC" />
                                <input type="hidden" name="callBackUrl" value="http://localhost:3000/callback" />
                                <input type="hidden" name="notiUrl" value="http://localhost:3000/callback" />
                                <input type="hidden" name="reqDomain" value="http://localhost:3000" />
                                <input type="hidden" name="fee" value="0" />
                                <input type="hidden" name="description" value="testsystem" />
                                <input type="hidden" name="userLanguage" value="VN" />
                                <input type="hidden" name="timeStamp" value={timeStamp} />
                                <input type="hidden" name="merTrxId" value={merTrxId} />
                                <input type="hidden" name="windowColor" value="#ef5459" />
                                <input type="hidden" name="windowType" value="0" />
                                <input type="hidden" name="merchantToken" value={merchantToken} />

                                <div className='row'>
                                    <div className='col-md-4' style={{ maxWidth: '70%', marginRight: '0px' }}>
                                        <div style={{ maxWidth: '100%', marginLeft: '0px', marginRight: '0px' }}>
                                            <h2 style={{ textTransform: 'uppercase', fontSize: '14px' }}>THÔNG TIN KHÁCH HÀNG</h2>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Họ Tên:</Form.Label>
                                                <Form.Control type="email" placeholder="" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Điện thoại:</Form.Label>
                                                <Form.Control type="email" placeholder="" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Email:</Form.Label>
                                                <Form.Control type="email" placeholder="" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Địa chỉ:</Form.Label>
                                                <Form.Control type="email" placeholder="" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Ngày xem show/sự kiện:</Form.Label>
                                                <Form.Control type="email" placeholder="" />
                                            </Form.Group>

                                        </div>
                                        <div style={{ maxWidth: '100%', marginLeft: '0px', marginRight: '0px' }}>
                                            <h2 style={{ textTransform: 'uppercase', fontSize: '14px' }}>LỰA CHỌN THANH TOÁN</h2>
                                            <div class="card-header">
                                                <div class="form-check">
                                                    <input type="radio" class="form-check-input" id="radio" name="optradio" value="option2" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} />
                                                    <label class="form-check-label" for="radio" style={{ fontSize: '12px' }}>Thẻ tín dụng mở tại Việt Nam</label>
                                                </div>
                                            </div>
                                            <Collapse in={open}>
                                                <div id="example-collapse-text" style={{ fontSize: '12px' }}>
                                                    Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.
                                                </div>
                                            </Collapse>
                                            <div class="card-header">
                                                <div class="form-check">
                                                    <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text2" aria-expanded={open2} />
                                                    <label class="form-check-label" for="radio2" style={{ fontSize: '12px' }}>ATM / Internet Banking </label>
                                                </div>
                                            </div>
                                            <Collapse in={open2}>
                                                <div id="example-collapse-text2" style={{ fontSize: '12px' }}>
                                                    Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.
                                                </div>
                                            </Collapse>
                                            <div class="card-header">
                                                <div class="form-check">
                                                    <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option2" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text3" aria-expanded={open3} />
                                                    <label class="form-check-label" for="radio3" style={{ fontSize: '12px' }}> Chuyển khoản</label>
                                                </div>
                                            </div>
                                            <Collapse in={open3}>
                                                <div id="example-collapse-text3" style={{ fontSize: '12px' }}>
                                                    Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công. Sau khi chúng tôi xác nhận giao dịch chuyển khoản thành công.
                                                    Xem thông tin chuyển khoản tại đây
                                                </div>
                                            </Collapse>
                                            <div class="card-header">
                                                <div class="form-check">
                                                    <input type="radio" class="form-check-input" id="radio4" name="optradio" value="option2" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text4" aria-expanded={open4} />
                                                    <label class="form-check-label" for="radio4" style={{ fontSize: '12px' }}>Thẻ tín dụng quốc tế </label>
                                                </div>
                                            </div>
                                            <Collapse in={open4}>
                                                <div id="example-collapse-text4" style={{ fontSize: '12px' }}>
                                                    Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.
                                                </div>
                                            </Collapse>
                                            <div class="card-header">
                                                <div class="form-check">
                                                    <input type="radio" class="form-check-input" id="radio5" name="optradio" value="option2" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text5" aria-expanded={open5} />
                                                    <label class="form-check-label" for="radio5" style={{ fontSize: '12px' }}> Ví điện tử MoMo</label>
                                                </div>
                                            </div>
                                            <Collapse in={open5}>
                                                <div id="example-collapse-text5" style={{ fontSize: '12px' }}>
                                                    Sản phẩm điện tử sẽ được gửi ngay sau khi giao dịch thanh toán thành công.
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div>
                                            <h2 style={{ textTransform: 'uppercase', fontSize: '14px' }}>Giỏ hàng của bạn</h2>
                                            <div>
                                                <div class="row border-bottom">
                                                    <span class="col-6 border-end">Vé 1 vòng - Người lớn</span>
                                                    <span class="col-3 border-end">150,000 VNĐ</span>
                                                    <div class="col-3 ">
                                                        <div class="input-group mb-3 input-group-sm">
                                                            <button type="button" class="btn btn-danger">-</button>
                                                            <input type="text" class="form-control" />
                                                            <button type="button" class="btn btn-info">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ paddingTop: '20px' }}>
                                                <div class="col-4">
                                                    <label for="email" class="form-label">Mã giảm giá</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" />
                                                        <button type="button" class="btn btn-info" style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '14px', textAlign: 'center', color: '#fff' }}>Kiểm tra</button>
                                                    </div>
                                                </div>
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div class="col-8 border" >
                                                        <div style={{ paddingTop: '7px', }}>
                                                            Tổng cộng
                                                        </div>
                                                    </div>

                                                    <div class="col-4 border" style={{ color: '#ff672a', fontWeight: 'bold', float: 'right' }}>
                                                        <p style={{ float: 'right', paddingTop: '7px' }}> VNĐ</p>
                                                    </div>
                                                </div>
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div class="form-check">
                                                        <input type="checkbox" className="form-check-input" id="checkTerm" name="option1" value="something" />
                                                        <label className="form-check-label" for="checkTerm">Tôi đồng ý với các Điều khoản & Chính sách của Tickego.vn</label>
                                                    </div>
                                                    <div onClick={handlePaymentClick} class="btn btn-info" style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '14px', textAlign: 'center', color: '#fff' }}>
                                                        Tiếp tục thanh toán
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="btn btn-primary " style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '14px', textAlign: 'center' }} onClick={handleClose}>
                            Đóng
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* <Modal show={showPay} size='xl' >
                    <Modal.Body>
                        <div className="container">
                            <div class="epay-form">
                                <Form id="megapayForm" name="megapayForm" method="POST" action="#" target="paymentF">
                                    <input type="hidden" name="windowColor" value="#A50034" />
                                    <input type="hidden" name="windowType" value="0" />
                                    <input type="hidden" name="merId" value="LGVN000001" />
                                    <input type="hidden" name="currency" value="VND" />
                                    <input type="hidden" name="amount" value="56990000" />
                                    <input type="hidden" name="invoiceNo" value="LG_73000192700" />
                                    <input type="hidden" name="goodsNm" value="VN.GR-X257MC.AMCPEVN" />
                                    <input type="hidden" name="buyerFirstNm" value="Gialap" />
                                    <input type="hidden" name="buyerLastNm" value="Duong" />
                                    <input type="hidden" name="buyerPhone" value="0919636851" />
                                    <input type="hidden" name="buyerCountry" value="VN" />
                                    <input type="hidden" name="callBackUrl" value="https://www.lg.com/vn/shop/epay/response/index/" />
                                    <input type="hidden" name="notiUrl" value="https://www.lg.com/vn/shop/rest/V1/payment/epay/callback/" />
                                    <input type="hidden" name="reqDomain" value="https://www.lg.com/vn/shop/" />
                                    <input type="hidden" name="fee" value="0" />
                                    <input type="hidden" name="description" value="LG Electronics Vietnam" />
                                    <input type="hidden" name="merchantToken" value="ba114ab92294b2c75b5e14aec5c2e9b6592dd8fb9b4af96e5e6d4a6f6b07097f" />
                                    <input type="hidden" name="userLanguage" value="VN" />
                                    <input type="hidden" name="timeStamp" value="1692110126" />
                                    <input type="hidden" name="merTrxId" value="LGVN00000173000192700" />
                                    <input type="hidden" name="payType" value="DC" />
                                    <input type="hidden" name="userId" value="null" />
                                    <input type="hidden" name="ipinfo" value="ip=2001:ee0:2ea:9edd:60d5:64f5:e1a3:6da5&amp;loc=VN" />
                                    <div>
                                        <div id="paymentLayer" class="payment_layer" style={{ display: 'block' }}>
                                            <div class="payment_bg"></div>
                                            <div id="payment_box" class="payment_pop_layer" style={{ marginTop: '-325px', marginLeft: '-400px' }}>
                                                <div class="payment_pop_container">
                                                    <div class="payment_pop_conts">
                                                        <iframe name="paymentF" id="paymentF" width="100%" height="100%" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" style={{ backgroundImage: 'url(../images/progress.gif)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                 
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="btn btn-primary " style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '14px', textAlign: 'center' }} onClick={handleClosePay}>
                            Đóng
                        </div>
                    </Modal.Footer>
                </Modal> */}
                {/* <form id="megapayForm" name="megapayForm" method="POST" >
                    <input type="hidden" name="invoiceNo" value="" />
                    <input type="hidden" name="amount" value="" />
                    <input type="hidden" name="currency" value="VND" />
                    <input type="hidden" name="goodsNm" value="" />
                    <input type="hidden" name="fee" value="" />


                    <input type="hidden" name="buyerFirstNm" value="" />
                    <input type="hidden" name="buyerLastNm" value="" />
                    <input type="hidden" name="buyerPhone" value="" />
                    <input type="hidden" name="buyerEmail" value="" />
                    <input type="hidden" name="buyerAddr" value="hanoi" />
                    <input type="hidden" name="buyerCity" value="hanoi" />
                    <input type="hidden" name="buyerState" value="hanoi" />
                    <input type="hidden" name="buyerPostCd" value="12950" />
                    <input type="hidden" name="buyerCountry" value="" />
                    <input type="hidden" name="receiverLastNm" value="" />
                    <input type="hidden" name="receiverFirstNm" value="" />
                    <input type="hidden" name="receiverPhone" value="" />
                    <input type="hidden" name="receiverState" value="" />
                    <input type="hidden" name="receiverPostCd" value="12950" />
                    <input type="hidden" name="receiverCountry" value="" />


                    <input type="hidden" name="callBackUrl" value="https://demo.megapay.vn/callback/transactionHandle" />

                    <input type="hidden" name="notiUrl" value="https://demo.megapay.vn/ipn/transactionHandle" />

                    <input type="hidden" name="merId" value="" />

                    <input type="hidden" name="reqDomain" value="http://localhost:8080" />
                    <input type="hidden" name="userId" value="0" />
                    <input type="hidden" name="userLanguage" value="VN" />
                    <input type="hidden" name="merchantToken" value="" />
                    <input type="hidden" name="payToken" value="" />
                    <input type="hidden" name="timeStamp" value="" />
                    <input type="hidden" name="merTrxId" />
                    <input type="hidden" name="windowType" value="" />
                    <input type="hidden" name="windowColor" value="" />
                    <input type="hidden" name="userFee" value="" />
                    <input type="hidden" name="vaCondition" value="03" />
                    <input type="hidden" name="payType" value="" />
                    <input type="hidden" name="payOption" value="" />
                    <input type="hidden" name="vaStartDt" value="20230816120429" />
                    <input type="hidden" name="vaEndDt" value="20240216235959" />
                    <input type="hidden" name="bankCode" value="" />
                    <input type="hidden" name="description" value="" />
                </form> */}
                <form id="paymentForm">
                    <input type="hidden" name="productName" id="productName" value="Samsung Galaxy" />
                    <input type="hidden" name="productAmount" id="productAmount" value="2000000" />
                    <input type="hidden" name="paymentFee" id="paymentFee" value="0" />
                    <input type="hidden" name="paymentMethod" id="paymentMethod" value="NO" data-bankcode="" />
                    <input type="hidden" name="windowColor" id="windowColor" value="" />
                    <input type="hidden" name="saveCard" id="saveCard" value="PAY_CREATE_TOKEN" />
                    <input type="hidden" name="tokenId" id="tokenId" value="" />
                    <input type="hidden" name="merId" id="merId" value="MGPDEMO003" />
                </form>

            </div>
        </div>

    );
};
export default EventDetails;  