import React from 'react';
import './Nav.css';
import { Dropdown } from 'react-bootstrap';
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
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#one">English</Dropdown.Item>
                                            <Dropdown.Item href="#two">Vietnamese</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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