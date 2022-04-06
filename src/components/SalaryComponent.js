import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

class Salary extends Component {

    constructor(props) {
        super(props);

        this.state={

        };
    }


    render() {
        const salarycard = this.props.staffs.map((staff) => {
            const salary = Number(staff.salaryScale) * 3000000 + Number(staff.overTime)/8*200000;
            return(
                <Card key={staff.id}>
                    <CardTitle>{staff.name}</CardTitle>
                        <CardBody>
                            <CardText>Mã nhân viên: {staff.id}</CardText>
                            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                            <Button>Lương: {salary} </Button>
                        </CardBody>
                </Card>
            );
        });

        return(
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/list">Nhân viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    {salarycard}
                </div>
            </div>
        </div>
        );
    }
}

export default Salary;