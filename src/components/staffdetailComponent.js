import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

var cardstyle = {
    backgroundColor: 'rgb(146, 185, 252)',
};

class StaffDetail extends Component {

    constructor(props){
        super(props);

    }

    renderStaff(staff) {
        if(staff) {
                return(
                    <div className="col-12 col-md-6 col-lg-4 mt-3">
                    <Card key={staff.id} style={cardstyle}>
                        <CardTitle><b>Họ và tên: {staff.name}</b></CardTitle>
                        <p>Ngày sinh: <b>{dateFormat(staff.doB, "dd/mm/yy")}</b></p>
                        <p>Ngày vào công ty: <b>{dateFormat(staff.startDate, "dd/mm/yy")}</b></p>
                        <p>Phòng ban: <b>{staff.department.name}</b></p>
                        <p>Số ngày nghỉ còn lại: <b>{staff.annualLeave}</b></p>
                        <p>Số ngày đã làm thêm: <b>{staff.overTime}</b></p>
                    </Card>
                    </div>
                )
        }
        else {
            return(
                <div>
                    <p>Bấm vào tên nhân viên để xem thông tin.</p>
                </div>
            );
        }
    }

    render() {
         if(!this.props.staff){
             return(
             <div>
                 <p>Bấm vào tên nhân viên để xem thông tin.</p>
             </div>);
         }

        return (
            // <></>
            <div className="row">
                {this.renderStaff(this.props.staff)}
            </div>
        )
    }

}

export default StaffDetail;