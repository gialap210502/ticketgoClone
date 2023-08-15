const Order = () => {
    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr className="table-secondary">
                            <th>NO.</th>
                            <th>THÔNG TIN SỰ KIỆN</th>
                            <th>THÔNG TIN ĐƠN HÀNG</th>
                            <th>LOẠI VÉ</th>
                            <th>SỐ LƯỢNG</th>
                            <th>ĐƠN GIÁ	</th>
                            <th>THÀNH TIỀN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vé xe bus 2 tầng ngắm cảnh tại Đà Lạt - Vietnam Sightseeing</td>					
                            <td>23080214117</td>
                            <td>Vé tour đêm - Trẻ em (6-11t)</td>
                            <td>1</td>
                            <td>95,000 VNĐ</td>
                            <td>95,000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Vé xe bus 2 tầng ngắm cảnh tại Đà Lạt - Vietnam Sightseeing</td>					
                            <td>23080214117</td>
                            <td>Vé tour đêm - Trẻ em (6-11t)</td>
                            <td>1</td>
                            <td>95,000 VNĐ</td>
                            <td>95,000</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn-info" style={{ background: '#ff672a', borderColor: '#ff672a', fontSize: '14px', textAlign: 'center', color: '#fff' }}>Quay lại trang chủ</button>
            </div>
        </div>
    );
};

export default Order;