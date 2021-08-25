import React from "react";

import { NavLink,BrowserRouter,Switch,Route} from "react-router-dom";
const Leftside = () => {
  return (
    
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <NavLink exact className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
       
        {/* Nav Item - Pages Collapse Menu */}
        {/*<li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            to="/"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog" />
            <span>User Management</span>
          </NavLink>
          
  </li>*/}
      <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/dashboard/users">
            <i className="fas fa-fw fa-table" />
           
            <span> Users</span>
            </NavLink>
        </li>

        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/dashboard/lobby">
            <i className="fas fa-fw fa-table" />
           
            <span> Architects</span>
            </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/dashboard/vip">
            <i className="fas fa-fw fa-table" />
           
            <span> Representative</span>
            </NavLink>
        </li>
       
       
         <li className="nav-item">
          <NavLink exact className="nav-link" to="/dashboard/tournament">
            <i className="fas fa-fw fa-chart-area" />
            <span>Create </span>
          </NavLink>
        </li>


        {/* <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/shop">
            <i className="fas fa-fw fa-table" />
            <span> Create Architect/Representative</span> 
            
            </NavLink>
        </li> */}

        {/*
        
        <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/club">
            <i className="fas fa-fw fa-table" />
            <span>Club Management</span> 
            </NavLink>
        </li>
         
        <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/union">
            <i className="fas fa-fw fa-table" />
            <span>Union Management</span> 
            </NavLink>
        </li>
          
        <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/coupon">
            <i className="fas fa-fw fa-table" />
            <span>coupon Management</span> 
            </NavLink>
        </li>
          
        <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/reward">
            <i className="fas fa-fw fa-table" />
            <span>Daily Reward Management</span> 
            </NavLink>
        </li>

        <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/mission">
            <i className="fas fa-fw fa-table" />
            <span>Mission Management</span> 
            </NavLink>
        </li>
          
        <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/tutorial">
            <i className="fas fa-fw fa-table" />
            <span>Tutorials Management</span> 
            </NavLink>
        </li>
          
        <li className="nav-item">
            <NavLink exact className="nav-link" to="/dashboard/avatar">
            <i className="fas fa-fw fa-table" />
            <span>Avatars Management</span> 
            </NavLink>
        </li> */}

      </ul>
    
  );
};

export default Leftside;
