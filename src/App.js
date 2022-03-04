import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Stafflist from './components/StaffListComponent';
import './App.css';
import { STAFFS } from './shared/staffs';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container NavBar">
            <NavbarBrand><b>ỨNG DỤNG QUẢN LÝ NHÂN SỰ V1.0</b></NavbarBrand>
          </div>
        </Navbar>
        <Stafflist staffs={this.state.staffs} />
      </div>
    );
  }
}
export default App;
