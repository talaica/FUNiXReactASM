import React, { Component } from 'react';
import { Card, CardTitle, CardImg, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

var cardstyle = {
    backgroundColor: 'rgb(146, 185, 252)',
};

class StaffDetail extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    renderStaff() {
        const staff = this.props.staff;

        if(staff !== undefined) 
                return(
                    <div className="container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/list"><i>Nhân viên</i></Link></BreadcrumbItem>
                                <BreadcrumbItem active><i>{staff.name}</i></BreadcrumbItem>
                            </Breadcrumb>
                        <div className="row">
                                <div className="col-12 col-md-4 col-lg-3">
                                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                                </div>
                                <div className="col-12 col-md-8 col-lg-9">
                                    <CardBody>
                                    <CardTitle><b>Họ và tên: {staff.name}</b></CardTitle>
                                    <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                                    <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                                    <p>Phòng ban: {staff.department.name} </p>
                                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                                    </CardBody>
                                </div>
                        </div>
                    </div>
                );
        
        else {
                <div></div>
        }
    }

    render() {

        return (
            <div>
               {this.renderStaff(this.props.staff)}
            </div>
        )
    }

}

export default StaffDetail;