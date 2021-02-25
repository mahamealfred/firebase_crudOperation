import React, { useState,useEffect } from "react"


const ContactForm =(props) => {
    const initialfieldValues= {
        fullname:'',
        username:'',
        mobile:'',
        email:'',
        password:'',
        confirmpassword:''
    }
    var [values,setValues] =useState(initialfieldValues)

    useEffect( () =>{
        if(props.currentUserId=='')
        setValues({
            ...initialfieldValues
        })
        else
        setValues({
            ...props.registrationObject[props.currentUserId]
        })
    },[props.currentUserId,props.registrationObject])

    const handleInputChange = e => {
  var {name,value}= e.target
  console.log(e.target.value)
  setValues({
      ...values,
      [name]: value
  })
    }
    const handleSubmit = e=> {
        e.preventDefault();
props.addorEdit(values)
    }
    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group input-group w-100">
              <div className="input-group-prepend">
                  <div className="input-group-text">
                      <i className="fas fa-user"></i>
                     
                  </div>

              </div>
              <input className="form-control" placeholder="Full Name" name="fullname" 
              value={values.fullname}
              onChange={handleInputChange}
              />

          </div>
          <div className="form-row">
          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <div className="input-group-text">
                      <i className="fas fa-user"></i>
                     
                  </div>

              </div>
              <input className="form-control" placeholder="Username" name="username" 
              value={values.username}
              onChange={handleInputChange}
              />

          </div>
          <div className="form-group input-group col-md-6">
              <div className="input-group-prepend">
                  <div className="input-group-text">
                      <i className="fas fa-mobile-alt"></i>
                     
                  </div>

              </div>
              <input className="form-control" placeholder="Mobile" name="mobile" 
              value={values.mobile}
              onChange={handleInputChange}
              />

          </div>
          <div className="form-group input-group col-md-6">
              <div className="input-group-prepend">
                  <div className="input-group-text">
                      <i className="fas fa-envelope"></i>
                     
                  </div>

              </div>
              <input className="form-control" placeholder="Email" name="email" 
              value={values.email}
              onChange={handleInputChange}
              />

          </div>
          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <div className="input-group-text">
                      <i className="fas fa-key"></i>
                     
                  </div>

              </div>
              <input className="form-control" placeholder="Password" name="password" 
              value={values.pasword}
              onChange={handleInputChange}
              />

          </div>
          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <div className="input-group-text">
                      <i className="fas fa-key"></i>
                     
                  </div>

              </div>
              <input className="form-control" placeholder="Confirm Password" name="confirmpassword" 
              value={values.confirmpassword}
              onChange={handleInputChange}
              />

          </div>
          
          </div>
          <div className="form-group">
       <input type="submit" value={props.currentUserId == ''?"Save":"Update"} className="btn btn-primary btn-block w-100" />
      </div>
      </form>
      
     
    );

}
export default ContactForm;