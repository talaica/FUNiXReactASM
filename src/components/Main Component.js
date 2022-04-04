import React, { Component } from 'react';
import Home from './HomeComponent';
import List from './StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { STAFFS } from '../shared/staffs';
import StaffDetail from './staffdetailComponent';
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS
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
                    {/* <Route exact path="/department" />
                    <Route exact path="/salary" /> */}
                    <Redirect to="/list" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;