import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import StaffDetail from './staffdetailComponent';

var cardstyle = {
    backgroundColor: 'rgb(146, 185, 252)',
    fontWeight: "bolder",
};

class Stafflist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff});
    }


    render() {
        const list = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-md-6 col-lg-4 mt-3">
                    <Card onClick={() => this.onStaffSelect(staff)} style={cardstyle}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className="row">
                    {list}
                </div>
                <div>
                <StaffDetail staff={this.state.selectedStaff} />
                </div>
            </div>
        );
    }

    
}

export default Stafflist;