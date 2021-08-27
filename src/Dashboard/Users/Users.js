import axios from 'axios';
import React, { useEffect } from 'react'



export default function Users() {

const getUsers =()=>{
  var token = localStorage.getItem("JWTtoken");
  
  const head =
  {
      headers: {
          'Content-Type': 'application/json',

          "Authorization": `Bearer ${token}`

      }
  }

  axios.get("https://a4u-app.herokuapp.com/admin/users", head)


      .then((res) => {
        console.log(res,"all Response")
        
        console.log(res.data.users)

      });

   
}

useEffect(() => {
  console.log("res")
  getUsers()
      },  [])


    return (
        <div>
            <table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Created</th>
      <th scope="col">Status</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Leonard Hofstadter</td>
      <td>07/06/2016</td>
      <td>Pending</td>
      <td>lhofstadter@caltech.edu</td>
    </tr>
    <tr>
      <td scope="row">Sheldon Cooper</td>
      <td>07/01/2016</td>
      <td>Active</td>
      <td>scooper@@caltech.edu</td>
    </tr>
    <tr>
      <td scope="row">Howard Wolowitz</td>
      <td>06/05/2016</td>
      <td>Inactive</td>
      <td>hwolowitz@caltech.edu</td>
    </tr>
    <tr>
      <td scope="row">Raj Koothrappali</td>
      <td>06/20/2016</td>
      <td>Active</td>
      <td>rkoothrappali@caltech.edu</td>
    </tr>
    <tr>
      <td scope="row">Penny</td>
      <td>07/06/2016</td>
      <td>Active</td>
      <td>penny@cheesecakefactory.com</td>
    </tr>
    <tr>
      <td scope="row">Bernadette Rostenkowski</td>
      <td>07/05/2016</td>
      <td>Pending</td>
      <td>brostenkowski@caltech.edu</td>
    </tr>
    <tr>
      <td scope="row">Amy Farrah Fowler</td>
      <td>07/05/2016</td>
      <td>Pending</td>
      <td>afowler@caltech.edu</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
