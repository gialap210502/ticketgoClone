import './typeEvent.css'
import React from 'react';
const typeEvents = () => {
    return (
        <><div style={{minHeight: '60px'}}></div>
        <div className="event_type">
            <div className="container">
                <div className="row_pc">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-9 col-xs-9 event_type_list">
                            <h2>SỰ KIỆN NỔI BẬT</h2>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-3 col-xs-12 hidden-xs hidden-sm" id="create_event_button">
                            <div className="pull-right">
                                <div className="pull-left" style={{ marginRight: '5px', }}>
                                    <a href="https://ticketgo.vn/su-kien-trong-tuan" className="btn btn_create_event_top">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>LỊCH SỰ KIỆN</a>
                                </div>
                                <div className="pull-left">
                                    <span className="btn btn_create_event_top" data-toggle="modal" data-target="#sendEventButton">
                                        <i className="fa fa-plus" aria-hidden="true"></i> GỬI SỰ KIỆN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
};
export default typeEvents;