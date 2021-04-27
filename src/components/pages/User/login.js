import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

function login() {
    return (
        <div>
            <div className="container ">
                <div className="login-box">
                    <form className='form-login'>
                        <h3 className="title-login">Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                <p className="forgot-password text-right">
                                    Forgot <a href="#d" className="pwd">password?</a>
                                </p>
                        </div>
                    </form>
                </div>
               

            </div>
             
        </div>
        
    )
}

export default login
