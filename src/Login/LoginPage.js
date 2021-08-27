import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firebase from "../firebase";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios'

export default function LoginPage() {
  const [form, setForm] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [mobile, setMobile] = useState();
  const [otp, setOtp] = useState();


  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   se
  // };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };


  const onSignInSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    let phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");

        setToggle(true)


      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        console.log(result)
        console.log("result")
        var token = firebase.auth().currentUser.getIdToken(false);

        localStorage.setItem("token", result.user.Aa);


        const data = {
          token: localStorage.getItem('token')
        }

        axios.post('https://a4u-app.herokuapp.com/auth', data, {

        }).then(response => {
          localStorage.setItem("JWTtoken", response.data.token);
        })



        const JWT = {
          token: localStorage.getItem('JWTtoken'),

        }

        console.log(JWT.token)

        const head = {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${JWT.token}`
          }
        }

        axios.get("https://a4u-app.herokuapp.com/auth/profile", head)
          .then((res) => {

            console.log(res, "all response")

            console.log(res.data.profile)
            // ToastsStore.success('Login Successful');
            // window.location.replace("/dashboard/users");

            if (res.data.profile.role && res.data.profile.role == "Admin") {
              if (res.data.profile.role == "Admin") {
                ToastsStore.success('Login Successful');
                <ToastsContainer store={ToastsStore}/>

                window.location.replace("/dashboard/users");

              }
              else {
                alert("Your are not Admin")
                ToastsStore.error('Login Failed');
                <ToastsContainer store={ToastsStore}/>
  
              }

            }
            



          });


      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");


      });
  };




  return (
    <div class="login">

      <div fluid="sm" className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <h2 className="mb-3">A4U Admin</h2>
            <Form className="form" onSubmit={(e) => onSignInSubmit(e)}>
              <div id="recaptcha-container"></div>
              <Form.Group>
                <Form.Control
                  type="number"
                  name="mobile"
                  placeholder="Mobile Number"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </Form.Group>

              <button button="Submit" class="btn btn-primary" type="submit"> Send OTP</button>

            </Form>
          </Col>
        </Row>


        <Row className="justify-content-center" style={toggle ? { paddingTop: "10px" } : { display: 'none' }}>
          <Col xs={12} md={6} lg={5}>
            <Form className="form" onSubmit={(e) => onSubmitOtp(e)}>
              <Form.Group>
                <Form.Control
                  id="otp"
                  type="number"
                  name="otp"
                  placeholder="OTP"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group>
              <button button="Submit" type="submit" class="btn btn-primary" > Verify</button>

            </Form>
          </Col>
        </Row>


       


      </div>


    </div>
  )
}
