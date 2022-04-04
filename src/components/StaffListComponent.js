import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';

// var cardstyle = {
//     backgroundColor: 'rgb(146, 185, 252)',
//     fontWeight: "bolder",
// };

function RenderListItem({staff}) {
    return(
        <Card key={staff.id}>
            <Link to={`/list/${staff.id}`}>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <CardTitle className="staff-card">{staff.name}</CardTitle>
            </Link>
        </Card>
    );
}

const List = (props) => {

        const list = props.staffs.map((staff) => {
            return (
                <div className="col-6 col-md-4 col-lg-2 mt-2">
                    <RenderListItem staff={staff} />
                </div>
            );
        });

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h3>Nhân viên</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }

    

export default List;