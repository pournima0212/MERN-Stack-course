import React, { useEffect, useState } from 'react'
import loginpageimg from "./../../assets/Login-page-image.png"
import instagramtextimg from "./../../assets/intagram-text-img.png"
import googleiconlogo from "./../../assets/Logo-Google-image.webp"
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    let navigate = useNavigate();

    const submitLoginForm = async () => {
        try {
            const apiResponse = await axios.post("http://localhost:9090/api/auth/login", {
                email: email,
                password: password,
            })
            if (apiResponse.data.token) {
                toast.success("Login Successfull !")
                setTimeout(() => {
                    localStorage.setItem("userToken", apiResponse.data.token)
                    navigate("/home");
                }, 1000);

            }
        } catch (error) {
            console.log(error)

            const errorMessage = error.response.data.message || "Invalid email or password"
            toast.error(errorMessage)
        }
    }

    const checkLoginisTrue = async () => {
        try {

            const token = localStorage.getItem("userToken");
            if (token) {
                navigate("/home");
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkLoginisTrue();
    }, []);



    return (
        <div className="login-page">

            <div className='container'>
                <div className='row'>


                    <div className='col-md-6 m-auto'>
                        <img src={loginpageimg} alt="" className="w-100" />
                    </div>
                    <div className='col-md-6 text-center'>
                        <img src={instagramtextimg} alt="" className="instagram-icon mb-4" />
                        <form className="login-form">
                            <div className="form-group">
                                <input type="email"
                                    className="form-control my-2"
                                    id="exampleInputEmail1"
                                    placeholder="Mobile Number or email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control my-2"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                            </div>
                            <Button variant="primary" className="btn btn-primary  mt-3 login-btn" onClick={submitLoginForm}>
                                Sign Up
                            </Button>
                            <hr />
                            <div className="text-center">
                                <img src={googleiconlogo}
                                    alt=""
                                    className="logo-google mt-2" />
                            </div>
                            <p className="text-center mt-2">Login with Google</p>
                            <p className="text-center mt-3"><b>Forgot Password?</b></p>
                            <p className="text-center mt-5">
                                Don't have an account?<span className="bold"><u> <Link to="/register"><b>Sign up</b></Link></u></span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
}

export default Login;