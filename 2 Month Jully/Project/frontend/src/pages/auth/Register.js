import React from 'react';
import "./../../css/register.css"
import instagramtextimg from "./../../assets/intagram-text-img.png"
import googleiconlogo from "./../../assets/Logo-Google-image.webp"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Register = () => {

    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setpassword] = useState("")

    const submitForm = async () => {
        try {
            console.log(email, "email")
            console.log(userName, "userName")
            console.log(fullName, "fullName")
            console.log(password, "password")

            const apiResponse = await axios.post("http://localhost:9090/api/auth/register", {
                userName: userName,
                email: email ,
                fullName: fullName ,
                password: password,
            }) 

            console. log(apiResponse, "apiResponse ===>")

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="insta-container">
            <div className="insta-right">
                <div className="register-box">
                    <img className="logo" src={instagramtextimg} alt="Instagram Logo" />
                    <p className="heading"><b>Sign up to see photos and videos from your friends.</b></p>
                    <form>
                        <button type="submit" className="btn btn-primary loginwithgooglebtn mt-3 my-3">
                            <img src={googleiconlogo}
                                alt=""
                                className="google-logo" />
                            Log in with Google
                        </button>
                        <input type="email"
                            className="form-control my-2"
                            id="exampleInputEmail1"
                            placeholder="Mobile Number or email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password"
                            className="form-control my-2"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <input type="text"
                            className="form-control my-2"
                            id="exampleInputfullname1"
                            placeholder="Full Name"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input type="text"
                            className="form-control my-2"
                            id="exampleInputusername1"
                            placeholder="User Name"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <p>
                            People who use our service may have uploaded your contact information to Instagram.
                        </p>

                        {/* <button type="submit"
                         className="btn btn-primary signupbtn" onClick={submitForm}>
                            Sign Up
                            </button> */}

                        <Button variant="primary" onClick={submitForm}>
                            Submit
                        </Button>

                        <p className="text-center my-3"><b>Have an account ?</b> <Link to="/"><b>Log in</b></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
