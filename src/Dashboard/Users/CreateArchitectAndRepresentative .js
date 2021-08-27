import axios from 'axios';
import React, { useState,useEffect } from 'react'

const CreateArchitectAndRepresentative = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState({});
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [pin, setPin] = useState();
    const [role, setRole] = useState();
    const [landmark, setLandmark] = useState();
    const [country, setCountry] = useState("India");

    


    const CreateUser = () => {

        console.log(name, email,pin,phone,state,city,landmark,role)


        // const data2 = {
        //     "name": "test",
        //     "email": "test@gmail.com",
        //     "role": "Architect",
        //     "phone": "+913333333333",
        //     "address": {
        //         "address": "abc",
        //         "pin": "1212",
        //         "landmark": "mm",
        //         "city": "agra",
        //         "state": "UP",
        //         "country": "IN"

        //     }
        // }

        const data =
        {
            "name": name,
            "email": email,
            "role": role,
            "phone": phone,
            "address": {
                "address": address,
                "pin": pin,
                "landmark": landmark,
                "city": city,
                "state": state,
                "country": country

            }
        }
        var token = localStorage.getItem("JWTtoken");
        const head =
        {
            headers: {
                'Content-Type': 'application/json',

                "Authorization": `Bearer ${token}`



            }
        }

        axios.post("https://a4u-app.herokuapp.com/admin/users", data, head)


            .then((res) => {


            });
    }


    useEffect(() => {
        console.log(name, email,pin,phone,state,city,landmark,role)
    }, [])




    return (
        <div>
            <div style={{ padding: "40px" }}>
                <h1>Create Architect/Representative</h1>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="filter">Role</label>
                        <select class="form-control" id="role" onChange={(e) => setRole(e.target.value)}>
                        <option selected>Select Role</option>
                            <option value="Architect" >Architect</option>
                            <option value="Representative">Representative</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" onChange={(e) => setName(e.target.value)} placeholder="name" />
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPhone">Phone</label>
                        <input type="phone" class="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                    </div>
                </div>


                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="landmark">LandMark</label>
                        <input type="text" class="form-control" id="landmark" onChange={(e) => setLandmark(e.target.value)} placeholder="Landmark" />
                    </div>


                </div>


                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" onChange={(e) => setCity(e.target.value)} id="city" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="state" onChange={(e) => setState(e.target.value)} class="form-control">
                            <option selected>Choose State </option>

                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">PIN</label>
                        <input type="text" class="form-control" onChange={(e) => setPin(e.target.value)} id="pin" />
                    </div>

                </div>

                <button type="submit" class="btn btn-primary" onClick={CreateUser}>Create</button>
            </div>
        </div>
    )
}

export default CreateArchitectAndRepresentative
