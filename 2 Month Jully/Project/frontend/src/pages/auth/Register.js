import React from 'react';
import "./../../css/register.css"
import instagramtextimg from "./../../assets/intagram-text-img.png"
import googleiconlogo from "./../../assets/Logo-Google-image.webp"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="insta-container">
            <div className="insta-right">
                <div className="register-box">
                    <img className="logo" src={instagramtextimg} alt="Instagram Logo" />
                    <p className="heading"><b>Sign up to see photos and videos from your friends.</b></p>
                    <form>
                        <button type="submit" class="btn btn-primary loginwithgooglebtn mt-3 my-3"><img src={googleiconlogo}
                            alt=""
                            className="google-logo" />Log in with Google</button>
                        <input type="email" class="form-control my-2" id="exampleInputEmail1" placeholder="Mobile Number or email" />
                        <input type="password" class="form-control my-2" id="exampleInputPassword1" placeholder="Password" />
                        <input type="email" class="form-control my-2" id="exampleInputEmail1" placeholder="Full Name" />
                        <input type="password" class="form-control my-2" id="exampleInputPassword1" placeholder="User Name" />
                        <p>People who use our service may have uploaded your contact information to Instagram.</p>
                        <Link to="/birthday"><button type="submit" class="btn btn-primary signupbtn">Sign Up</button></Link>
                        <p class="text-center my-3"><b>Have an account ?</b> <Link to="/"><b>Log in</b></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
