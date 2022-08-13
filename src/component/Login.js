import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
          <div className="frame-1">
          <div className="overlap-group">
            <div className="rectangle-2"></div>
            <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className='img'>
            <div className='ellipse-4' ></div>
            <div className='ellipse-5' ></div>
          <img src='1.png' alt='img' className='logo' />
        </div>
            <h1 className="title"> SIGN IN</h1>
                  <div className='continue'>sign in to continue our application</div>
                  <div className='login'>
                      login
          </div>
          <div className='sign-up'>
                      sign up
          </div>
                  <div className='sign-up'>Sign up</div>
                              <form action="">
                                     <input type="text" id="email" name="email"  placeholder=" "/>
                                         <label for="fullName">Email</label>
            <input type="text" id="password" name="password"  placeholder=" "/>
                                         <label for="fullName">password</label>
            <div className='forgot'><div>forgot password?</div><div className='create'>create account</div> 
            </div>
            <div></div>
                                        <div className='btn2'>
                                            <button className='btn'>Sign in</button>
                                        </div>
                               </form>
                  
                  
        </div>
        <div>
          <img className='undraw' src='undraw_mobile_encryption_re_yw3o.svg' alt='undrow' />
          </div>
        </div>
    </div>
  )
}

export default Login