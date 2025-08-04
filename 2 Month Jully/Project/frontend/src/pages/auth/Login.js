import React from 'react'
import loginpageimg from "./../../assets/Login-page-image.png"
import instagramtextimg from "./../../assets/intagram-text-img.png"
import googleiconlogo from"./../../assets/Logo-Google-image.webp"
import { Link } from 'react-router-dom';

const Login = () => {
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
                            <div class="form-group">
                                <input type="email" class="form-control my-2 width: 100%;" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username or email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control my-2 width: 100%" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-primary mt-3 login-btn">Log in</button>
                            <hr/>
                            <div className="text-center">
                                <img src={googleiconlogo}
                                    alt=""
                                    className="logo-google mt-2" />
                            </div>
                            <p className="text-center mt-2">Login with Google</p>
                            <p className="text-center mt-3"><b>Forgot Password?</b></p>
                            <p className="text-center mt-5">
                                Don't have an account? <b><Link to="/register">Sign up</Link></b>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login