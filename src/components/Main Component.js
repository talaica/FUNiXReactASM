import React, { Component } from 'react';
import List from './StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import StaffDetail from './staffdetailComponent';
import Department from './Department';
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            depts: DEPARTMENTS,
        };
    }

    render() {
         const StaffWithId = ({match}) => {
             return(
                 <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
             );
         }

        return(
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/list" component={() => <List staffs={this.state.staffs} />} />
                    <Route path="/list/:staffId" component={StaffWithId} />
                    <Route exact path="/department" component={() => <Department depts={this.state.depts} />} />
                    <Route exact path="/salary" />
                    <Redirect to="/list" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;