import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function Navbar() {

 const Logout=()=>{
    window.localStorage.clear(); 
    window.localStorage.removeItem("my_item_key");
    window.location.replace("/login");

  }

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" style={{ justifyContent: 'flex-end'}}>
      
      <UncontrolledDropdown >
      <DropdownToggle >
        ADMIN
      </DropdownToggle>
      <DropdownMenu>
       
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={Logout}  >LogOut</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>

      </nav>
    )
}
