import React, { Component } from 'react';
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Department extends Component {

    constructor(props){
        super(props);

        this.state={

        };
    }


    render() {
        const dept = this.props.depts.map((dept) => {

        return(
                <div className="col-12 col-md-6 col-lg-4">
                    <Card key={dept.id} className="cards">
                        <CardTitle className="cardtitle"> {dept.name}</CardTitle>
                        <br />
                        <CardText> Số lượng nhân viên: {dept.numberOfStaff}</CardText>
                    </Card>
                </div>
        );
    });
    
    return(
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/list"><i>Nhân viên</i></Link></BreadcrumbItem>
                <BreadcrumbItem active><i>Phòng ban</i></BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                    <div className="col-12">
                        <h3>Phòng ban</h3>
                        <hr />
                    </div>
                </div>
            <div className="row cardstyle">
                {dept}
            </div>
        </div>
    );
    
}

}

export default Department;