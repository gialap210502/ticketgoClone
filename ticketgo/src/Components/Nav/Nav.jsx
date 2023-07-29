import React from 'react';
import './Nav.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
const Nav = () => {
    return (
        <div id="header" className="fixed">
            <div className="container">
                <div className="row_pc">
                    <div className="row">
                        <div className="col-xs-8 col-sm-6 col-md-3 col-lg-4 auto_width_mb">
                            <div id="logo">
                                <a href="https://ticketgo.vn">
                                    <img src="../../../logo3.png" alt="bán vé sự kiện" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-6 col-md-3 col-lg-4 auto_width_mb">
                            <form class="d-flex">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Your Email" name="email" />
                                    <button class="input-group-text"><i class="fa-solid fa-magnifying-glass" style={{ color: '#9b9da1' }}></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xs-8 col-sm-6 col-md-4 col-lg-4 header_bar">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#"> Register</a>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-link dropdown">
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                            
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;