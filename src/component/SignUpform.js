import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./SignUpform.css"

function SignUpform() {
  return (



<div className=' row root-element'>
<div class= "col-6 sign-up-section">
<div className=" text-center auth-style" >
<button   class="btn btn-light col-6  mt-3" type="button">Sign up with Linkedln</button>  <br></br>
  <button class="btn btn-light col-6  mt-3" type="button">Sign up with Twitter</button>  <br></br>
  <button class="btn btn-light col-6  mt-3" type="button">Sign up with Facebook</button>
</div>
</div>

<div className='col-6 sign-up-section-form'>
<div className=" auth-styles">
<h1 className='text-center'>Sign Up</h1>
<p className='text-center'>Get started absolutely free</p>
<Form>
  <div className="row">
      <div className='col-8 div-section' >
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" placeholder="Enter email" />
        </Form.Group>
      </div>
      <div className='col-8 div-section'>
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
      </div>
  </div>
      

      
      <Form.Group className="mb-5" controlId="formBasicCheckbox" >
        <Form.Check type="checkbox" className='div-section' label="Creating an account means you’re okay with our Terms of Service, Privacy Policy, and default Notification Settings" />
      </Form.Group>
      <div  style={{display: 'flex', justifyContent: 'center'}}>
       <Button className='w-25' variant="primary" type="submit">
         Sign up
      </Button>
      </div>
    </Form>
</div>
</div>

</div>




  )
}

export default SignUpform