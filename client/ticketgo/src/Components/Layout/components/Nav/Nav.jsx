import React from 'react';
import './Nav.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
function Nav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id="header" className="fixed">
            <div className="container">
                <div className="row_pc">
                    <div className="row">
                        <div className="col-xs-8 col-sm-6 col-md-3 col-lg-4 auto_width_mb">
                            <div id="logo">
                                <a href="/">
                                    <img src="../../../logo3.png" alt="bán vé sự kiện" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-6 col-md-3 col-lg-4 auto_width_mb">
                            <form class="d-flex">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Search" name="email" />
                                    <button class="input-group-text"><i class="fa-solid fa-magnifying-glass" style={{ color: '#9b9da1' }}></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xs-8 col-sm-6 col-md-4 col-lg-4 header_bar">
                            <ul class="nav">
                                <li class="nav-item">
                                    <button class="nav-link" style={{color: '#6c757d'}} onClick={handleShow}> Login</button>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" style={{color: '#6c757d'}} href="/register"> Register</a>
                                </li>
                                <li class="nav-item">
                                    {/* <Dropdown>
                                        <Dropdown.Toggle variant="light" >
                                            
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#one">English</Dropdown.Item>
                                            <Dropdown.Item href="#two">Vietnamese</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> */}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: 'rgb(255, 103, 42)', textAlign: 'center' }}>
                    <Modal.Title style={{ color: '#fff', fontSize: '16px', margin: 'auto' }}>ĐĂNG NHẬP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <InputGroup className="mb-3" style={{ margin: 'auto', left: '20%' }}>
                            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#1558cb" }} >
                                <a className="fa-brands fa-facebook fa-2x" style={{ color: "#fff" }} href="https://www.facebook.com/ticketgo.vn/"></a>
                            </InputGroup.Text>
                            <InputGroup.Text className="d-grid" style={{ backgroundColor: "#1558cb", color: "#fff", width: '220px' }}>Đăng nhập bằng Facebook</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3" style={{ margin: 'auto', left: '20%' }}>
                            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "red" }} >
                                <a className="fa-brands fa-google fa-2xl" style={{ color: "#fff" }} href="https://www.facebook.com/ticketgo.vn/"></a>
                            </InputGroup.Text>
                            <InputGroup.Text className="d-grid" style={{ backgroundColor: "red", color: "#fff", width: '220px' }}>Đăng nhập bằng Google</InputGroup.Text>
                        </InputGroup>

                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Mật khẩu" />
                        </Form.Group>
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked />
                            <label class="form-check-label">Ghi nhớ đăng nhập</label>
                            <a href="#" style={{ float: 'right' }}>Quên mật khẩu?</a>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-block" style={{ backgroundColor: 'rgb(255, 103, 42)', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>ĐĂNG NHẬP</button>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>

    );
};
export default Nav;