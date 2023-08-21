import React from 'react';
import PaymentForm from "../../PaymentForm";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from "axios";
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { getCodeAuth, getList } from '../../redux/apiRequest';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, updateCartItem } from '../../redux/cartSlice';
const EventDetails = () => {
    //const [itemList1, setitemList] = useState([]);

    let ticketList = useSelector((state) => state.cart);


    let itemList = useSelector((state) => state.listItem.getList.current.items)
    const dispatch = useDispatch();
    const domain = 'https://sandbox.megapay.vn';
    const fetchData = async () => {
        try {
            getCodeAuth(dispatch);
            getList(dispatch);
            // const authtoken = await axios.get('http://localhost:5500/auth');
            // const list = await axios.get('http://localhost:5500/listTableRecords');
            // setitemList(list.data.items);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
        const formatTimeStamp = moment().format('YYYYMMDDHHmmss');
        setTimeStamp(formatTimeStamp);
    }, []);
    const { eventId } = useParams();
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


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [timeStamp, setTimeStamp] = useState('');
    const [amount, setAmount] = useState('');
    const [ticketQuantities, setTicketQuantities] = useState({});
    const [buyerFirstNm, setBuyerFirstNm] = useState('');


    const [selectedPriceIndex, setSelectedPriceIndex] = useState(null);
    const handlePriceSelect = (priceIndex) => {
        setSelectedPriceIndex(priceIndex);
    };

    const merId = 'EPAY000001'
    const encodeKey = "rf8whwaejNhJiQG2bsFubSzccfRc/iRYyGUn6SPmT6y/L7A2XABbu9y4GvCoSTOTpvJykFi6b1G0crU8et2O0Q=="

    const merTrxId = timeStamp + eventId;
    const input_string = timeStamp + merTrxId + merId + amount + encodeKey



    const sha256 = require('js-sha256');
    const merchantToken = sha256(input_string);

    const extractPrice = (priceItem) => {
        // Example: "Hạng A: 500.000"
        const parts = priceItem.split(':'); // Tách chuỗi thành mảng, sẽ là ["Hạng A", " 500.000"]
        if (parts.length === 2) {
            const price = parseFloat(parts[1].trim().replace(/\D/g, '')); // Lấy phần số và xóa dấu phân cách nghìn
            return price;
        }
        return 0; // Trả về 0 nếu không thể trích xuất giá
    };
    const handleQuantityChange = (priceItem, quantity) => {
        const priceValue = extractPrice(priceItem);
        const newTicketQuantities = { ...ticketQuantities, [priceItem]: quantity };
        setTicketQuantities(newTicketQuantities);

        const newAmount = Object.values(newTicketQuantities).reduce(
            (total, qty) => total + qty * priceValue,
            0
        );
        setAmount(newAmount);
    };

    const handleAddItem = (id, productName, price) => {
        const isTicket = ticketList.some((item)=>item.productName === productName && item.price === price);
        if(!isTicket) {
            dispatch(addItemToCart({
                id: id,
                productName: productName,
                price: price,
                amount: 1
            }))
        }
        if(isTicket) {
            dispatch(updateCartItem({
                id: id,
                productName: productName,
                price: price,
                amount: 2
            }))
        }
        
        alert('THem san pham thanh cong')
    }
    console.log(ticketList)

    return (
        <div>
            <div>
                {itemList?.map((item, index) => {
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
                        {itemList?.map((item, index) => {
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
                                <div className='row'>
                                    <div className='col-md-4' style={{ maxWidth: '70%', marginRight: '0px' }}>
                                        <div style={{ maxWidth: '100%', marginLeft: '0px', marginRight: '0px' }}>
                                            <h2 style={{ textTransform: 'uppercase', fontSize: '14px' }}>THÔNG TIN KHÁCH HÀNG</h2>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Họ Tên:</Form.Label>
                                                <Form.Control type="text" name="buyerFirstNm" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Điện thoại:</Form.Label>
                                                <Form.Control type="text" name="buyerPhone" />
                                            </Form.Group>
                                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Email:</Form.Label>
                                                <Form.Control type="text"  name="buyerEmail"/>
                                            </Form.Group> */}
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label style={{ fontSize: '13px', fontWeight: 'bold' }}>Địa chỉ:</Form.Label>
                                                <Form.Control type="text" name="buyerAddr" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div>
                                            <h2 style={{ textTransform: 'uppercase', fontSize: '14px' }}>Giỏ hàng của bạn</h2>
                                            <div>
                                                {itemList?.map((item, index) => {
                                                    if (item.id && item.id.includes(eventId)) {
                                                        const invoiceNo = eventId + amount + timeStamp
                                                        return (
                                                            <div key={index}>
                                                                <input type="hidden" name="merId" value={merId} />
                                                                <input type="hidden" name="currency" value="VND" />
                                                                <input type="hidden" name="amount" value={amount} />
                                                                <input type="hidden" name="invoiceNo" value={invoiceNo} />
                                                                <input type="hidden" name="goodsNm" value={item.fields["Product Name"]} />
                                                                <input type="hidden" name="payType" value="NO" />
                                                                <input type="hidden" name="callBackUrl" value="http://localhost:3000/Order" />
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
                                                                {item.fields.Price?.map((priceItem, priceIndex) => {
                                                                    const priceValue = extractPrice(priceItem);
                                                                    // const handleCheckboxChange = (event) => {
                                                                    //     if (event.target.checked) {
                                                                    //         setAmount(amount + priceValue);
                                                                    //     } else {
                                                                    //         setAmount(amount - priceValue);
                                                                    //     }
                                                                    // };
                                                                    return (
                                                                        <div key={priceIndex} className="row border-bottom">
                                                                            <span className="col-6 border-end">{item.fields["Product Name"]}</span>
                                                                            <span className="col-3 border-end">{priceItem} VNĐ</span>
                                                                            <div className="col-3">
                                                                                <div className="input-group mb-3 input-group-sm">
                                                                                    {/* <input
                                                                                        type="checkbox"
                                                                                        className="form-check-input"
                                                                                        onChange={handleCheckboxChange}
                                                                                        required
                                                                                    /> */}
                                                                                    <a onClick={() => handleAddItem(item.fields.id, item.fields["Product Name"], priceItem)}>+ Thêm</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })}


                                            </div>
                                            <div className="row" style={{ paddingTop: '20px' }}>
                                                <div className="row" style={{ paddingTop: '20px' }}>
                                                    <div class="col-8 border" >
                                                        <div style={{ paddingTop: '7px', }}>
                                                            Tổng cộng
                                                        </div>
                                                    </div>
                                                    {ticketList?.map((TicketChosen, index) => (
                                                        <div key={index} className="row border-bottom">
                                                            <span className="col-6 border-end">{TicketChosen.productName}</span>
                                                            <span className="col-3 border-end">{TicketChosen.price} VNĐ</span>
                                                            <div className="col-3">
                                                                {/* <a onClick={()=>handleDelete(TicketChosen.productName)}>- Xóa</a> */}
                                                            </div>
                                                        </div>

                                                    ))
                                                    }

                                                    <div class="col-4 border" style={{ color: '#ff672a', fontWeight: 'bold', float: 'right' }}>
                                                        <p style={{ float: 'right', paddingTop: '7px' }}>{amount} VNĐ</p>
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
                </Modal >


            </div >
        </div >

    );
};
export default EventDetails;  