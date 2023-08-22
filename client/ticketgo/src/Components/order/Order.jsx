import React from 'react';
import i26 from '../../assets/mediaImg/i26.jpg';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const Order = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const resultMsg = searchParams.get('resultMsg');
    const invoiceNo = searchParams.get('invoiceNo');
    const goodsNm = searchParams.get('goodsNm');
    const amount = searchParams.get('amount');
    const buyerFirstNm = searchParams.get('buyerFirstNm');
    const buyerLastNm = searchParams.get('buyerLastNm');
    const timeStamp = searchParams.get('timeStamp');
    const cardNo = searchParams.get('cardNo');
    const bankId = searchParams.get('bankId');

    const formattedDateString = moment(timeStamp, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss");


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
                            <th>MÃ ĐƠN HÀNG</th>
                            <th>cardNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{buyerFirstNm}</td>
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
                            <th>GIÁ SẢN PHẨM</th>
                            <th>TỔNG GIÁ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{goodsNm}</td>
                            <td>1</td>
                            <td>{amount} VND</td>
                            <td>{amount} VND</td>
                        </tr>
                        <tr>
                            <td colspan="3">Tổng tiền</td>
                            <td style={{ color: '#ff672a', fontWeight: 'bold' }}>{amount} VND</td>
                        </tr>
                        <tr>
                            <td colspan="3">Trạng thái</td>
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
