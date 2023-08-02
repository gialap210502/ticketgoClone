import React from 'react';
import i26 from '../../assets/mediaImg/i26.jpg';
const EventMusicDisplay = () => {
    return (
        <div className="container mt-3">
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
                <div className="row">
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr className="table-active">
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-light ">
                                <td>Active</td>
                                <td>Activeson</td>
                                <td>act@example.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EventMusicDisplay;
