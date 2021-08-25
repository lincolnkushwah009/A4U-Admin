import React from 'react'
import Leftside from '../Layout/Leftside'
import Footer from '../Layout/Footer'
import Layout from '../Layout/Layout'
import { Route } from 'react-router-dom'
import Users from './Users/Users'
import Navbar from '../Layout/Navbar'
import Lobby from './Users/Lobby'
import VIP from './Users/VIP'
import Tournament from './Users/Tournament'
import Shop from './Users/Shop'
import Coupon from './Users/Coupon'
import Reward from './Users/Reward'
import Club from "./Users/Club"
import Union from './Users/Union'
import Mission from './Users/Mission'
import Tutorial from './Users/Tutorial'
import Avatar from './Users/Avatar'
const Dashboard = () => {
    return (
        <div id="wrapper">
            <Leftside />

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                   <Navbar/>
                        <Route exact path="/" component={Layout} />
                        <Route exact path="/dashboard/users" component={Users} />
                        <Route exact path="/dashboard/lobby" component={Lobby} />
                        <Route exact path="/dashboard/vip" component={VIP} />
                        <Route exact path="/dashboard/tournament" component={Tournament} />
                        <Route exact path="/dashboard/shop" component={Shop} />
                        <Route exact path="/dashboard/club" component={Club} />
                        <Route exact path="/dashboard/union" component={Union} />
                        <Route exact path="/dashboard/coupon" component={Coupon} />
                        <Route exact path="/dashboard/reward" component={Reward} />
                        <Route exact path="/dashboard/mission" component={Mission} />
                        <Route exact path="/dashboard/tutorial" component={Tutorial} />
                        <Route exact path="/dashboard/avatar" component={Avatar} />
                    <Footer />
                </div>
            </div>
            </div>
    )
}

export default Dashboard
