import React from 'react';
import i26 from '../../assets/mediaImg/i26.jpg';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import axios from "axios";
import { createOrder } from '../../redux/apiRequest';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Order = () => {
    const customerData = useSelector(state => state.customer);
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const resultMsg = searchParams.get('resultMsg');
    const resultCd = searchParams.get('resultCd');
    const invoiceNo = searchParams.get('invoiceNo');
    const goodsNm = searchParams.get('goodsNm');
    const amount = searchParams.get('amount');
    const buyerFirstNm = searchParams.get('buyerFirstNm');
    const buyerLastNm = searchParams.get('buyerLastNm');
    const timeStamp = searchParams.get('timeStamp');
    const cardNo = searchParams.get('cardNo');
    const bankId = searchParams.get('bankId');

    const transDt = searchParams.get('transDt');
    const transTm = searchParams.get('transTm');
    const year = transDt.slice(0, 4);
    const month = transDt.slice(4, 6) - 1;
    const day = transDt.slice(6, 8);
    const hour = transTm.slice(0, 2);
    const minute = transTm.slice(2, 4);
    const second = transTm.slice(4, 6);
    const targetTime = new Date(year, month, day, hour, minute, second);
    const millisecondsSinceEpoch = targetTime.getTime();

    const formattedDateString = moment(timeStamp, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss");
    const [listItems, setListItems] = useState([]);
    const fetchData = async () => {
        try {
            const authtoken = await axios.get('https://lapduong.gcalls.vn/auth');
            const list = await axios.get('https://lapduong.gcalls.vn/listRecords');

            setListItems(list.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    for (let index = 0; index < listItems.length; index++) {
        if(listItems[index].fields.Orders !== invoiceNo && index === listItems.length - 1) {
            if (resultCd === "00_000") {
                const data = {
                    "Total": parseFloat(amount),
                    "Customer": customerData[0].NameCus,
                    "Date": parseFloat(millisecondsSinceEpoch),
                    "Email": customerData[0].Mail,
                    "Items": customerData[0].Items,
                    "Orders": invoiceNo,
                    "Phone": customerData[0].Phone,
                    "Qty": parseFloat(customerData[0].Qty)
                };
                createOrder(dispatch, data);
            }
        }
    }


    // if (resultCd === "00_000") {
    //     const data = {
    //         "Total": parseFloat(amount),
    //         "Customer": customerData[0].NameCus,
    //         "Date": parseFloat(millisecondsSinceEpoch),
    //         "Email": customerData[0].Mail,
    //         "Items": customerData[0].Items,
    //         "Orders": invoiceNo,
    //         "Phone": customerData[0].Phone,
    //         "Qty": parseFloat(customerData[0].Qty)
    //     };
    //     createOrder(dispatch, data);
    // }




    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                <div className="alert alert-success">
                    CÁM ƠN ĐÃ ĐẶT ĐƠN HÀNG. VUI LÒNG KIỂM TRA THÔNG TIN ĐƠN HÀNG VÀ TÌNH TRẠNG THANH TOÁN NHƯ DƯỚI ĐÂY
                </div>
                {/* <div className="alert alert-warning">
                    <div className="row">
                        <div className="col-3">
                            <img src={i26} style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-8" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                            THÔNG TIN CHUYỂN KHOẢN NGÂN HÀNG <br />

                            THÔNG TIN TÀI KHOẢN NGÂN HÀNG: CÔNG TY CP CÔNG NGHỆ ALADDIN<br />

                            SỐ TÀI KHOẢN: 0451000389156<br />

                            NGÂN HÀNG: NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN NGOẠI THƯƠNG VIỆT NAM (VIETCOMBANK), CHI NHÁNH THÀNH CÔNG<br />

                            NỘI DUNG CHUYỂN KHOẢN: THANH TOAN (MÃ ĐƠN HÀNG) TÊN KHÁCH HÀNG
                        </div>
                    </div>
                </div> */}
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr className="table-secondary">
                            <th>KHÁCH HÀNG</th>
                            <th>Emai</th>
                            <th>Số Điện Thoại </th>
                            <th>MÃ ĐƠN HÀNG</th>
                            <th>cardNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{buyerFirstNm}</td>
                            <td>{customerData[0].Mail}</td>
                            <td>{customerData[0].Phone}</td>
                            <td>{invoiceNo}</td>
                            <td>{cardNo}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered table-sm">
                    <thead>

                        <tr className="table-secondary">
                            <th>SỰ KIỆN</th>
                            <th>Ngày Mua</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{goodsNm}</td>
                            <td>{formattedDateString}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr className="table-active">
                            <th>THÔNG TIN SẢN PHẨM</th>
                            <th>SỐ LƯỢNG</th>
                            <th>TỔNG GIÁ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerData[0].Items.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                                <td>{customerData[0].QtyEach[index]}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colspan="2">Tổng tiền</td>
                            <td style={{ color: '#ff672a', fontWeight: 'bold' }}>{amount} VND</td>
                        </tr>
                        <tr>
                            <td colspan="2">Trạng thái</td>
                            <td style={{ color: '#ff672a', fontWeight: 'bold' }}>{resultMsg}</td>
                        </tr>
                    </tbody>
                </table>

                <a href="/" type="button" class="btn btn-info" style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '14px', textAlign: 'center', color: '#fff' }}>Quay lại trang chủ</a>
            </div>
        </div>
    );
};

export default Order;
