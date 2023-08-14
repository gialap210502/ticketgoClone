import React from 'react';
import './register.css'
const register = () => {
    return (
        <section classNameName="vh-100 bg-image" >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100 mt-5 mb-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <div class="row">
                                        <div class="col d-flex justify-content-center">
                                            <img style={{ height: '70px' }} src="../../../logo3.png" alt="bán vé sự kiện" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col d-flex justify-content-center">
                                            <h2 style={{ borderLeft: 'none' }} className="text-uppercase text-center mb-5">ĐĂNG KÝ</h2>
                                        </div>
                                    </div>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example1cg">Tên đầy đủ</label>
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" />

                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example3cg">EMAIL</label>
                                            <input type="email" id="form3Example3cg" className="form-control form-control-lg" />

                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example4cg">MẬT KHẨU</label>
                                            <input type="password" id="form3Example4cg" className="form-control form-control-lg" />

                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example4cdg">NHẬP LẠI MẬT KHẨU</label>
                                            <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />

                                        </div>
                                        <div class="form-group mt-4 mb-4">
                                            <div class="captcha">
                                                <span><img src="https://ticketgo.vn/captcha/default?I6pMN5Hs"/></span>
                                                <button type="button" class="btn btn-danger" id="reload">
                                                    ↻
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                            <label className="form-check-label" for="form2Example3g">
                                                Tôi đồng ý với <a href="#!" className="text-body"><u> các chính sách và điều kiện sử dụng dịch vụ của website</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-success" style={{ backgroundColor: '#4e558f' }}>ĐĂNG KÝ</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Bạn đã có tài khoản? <a href="#!"
                                            className="fw-bold text-body"><u>Đăng nhập</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default register;    