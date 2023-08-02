import React from 'react';
import i26 from '../../assets/mediaImg/i26.jpg';
const EventMusicDisplay = () => {
    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                <div className="alert alert-success">
                    CÁM ƠN ĐÃ ĐẶT ĐƠN HÀNG. VUI LÒNG KIỂM TRA THÔNG TIN ĐƠN HÀNG VÀ TÌNH TRẠNG THANH TOÁN NHƯ DƯỚI ĐÂY
                </div>
                <div className="alert alert-warning">
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
                </div>
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr className="table-secondary">
                            <th>KHÁCH HÀNG</th>
                            <th>MÃ ĐƠN HÀNG</th>
                            <th>ĐIỆN THOẠI</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gialap</td>
                            <td>23080214120</td>
                            <td>091******6851</td>
                            <td>gia******.com</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered table-sm">
                    <thead>

                        <tr className="table-secondary">
                            <th>SỰ KIỆN</th>
                            <th>NGÀY BẮT ĐẦU</th>
                            <th>NGÀY KẾT THÚC</th>
                            <th>NGÀY XEM SHOW/SỰ KIỆN</th>
                            <th>ĐỊA CHỈ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vở diễn À Ố Show</td>
                            <td>18:00 01/08/2023</td>
                            <td>20:01 31/12/2023</td>
                            <td>18:00 15/08/2023</td>
                            <td>Nhà hát thành phố , Số 7 cổng trường Lam Sơn, Quận 1, 1, Hồ Chí Minh</td>
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
                            <td>Hạng AAH!</td>
                            <td>1</td>
                            <td>700,000 VND</td>
                            <td>700,000 VND</td>
                        </tr>
                        <tr>
                            <td colspan="3">Tổng tiền</td>
                            <td style={{ color: '#ff672a', fontWeight: 'bold' }}>700,000 VND</td>
                        </tr>
                        <tr>
                            <td colspan="3">Trạng thái</td>
                            <td style={{ color: '#ff672a', fontWeight: 'bold' }}>Chưa thanh toán</td>
                        </tr>
                    </tbody>
                </table>

                <button type="button" class="btn btn-info" style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '14px', textAlign: 'center', color: '#fff' }}>Quay lại trang chủ</button>
            </div>
        </div>
    );
};

export default EventMusicDisplay;
