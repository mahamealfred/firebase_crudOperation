import React ,{ useState,useEffect } from "react"

import ContactForm from "./ContactForm"
import firebaseDb from "../firebase"

const Contacts =() => {
  var [registrationObject,setRegistrationObject] =useState({})
  var [currentUserId,setCurrentUserId] =useState('')

  useEffect(() => {
    firebaseDb.child('registration').on('value',snapshot =>{
if(snapshot.val()!=null)
setRegistrationObject({
  ...snapshot.val()
})
else
setRegistrationObject({ })

    })
  }, [])
 
   const addorEdit = obj => {
     if (currentUserId== '')
    firebaseDb.child('registration').push(
     obj,
      err => {
         if (err)
        console.log(err)
        else setCurrentUserId('')
      }
    )
    else
    firebaseDb.child(`registration/${currentUserId}`).set(
      obj,
       err => {
          if (err)
         console.log(err)
         else
         setCurrentUserId('')
       }
     )
   }
  const onDelete = key =>{
     if(window.confirm('Are you sure to delete this record?')){
      firebaseDb.child(`registration/${key}`).remove(
      
         err => {
            if (err)
           console.log(err)
           else
           setCurrentUserId('')
         }
       )
     }
   }

    return (
      <React.Fragment>
 <div class="jumbotron jumbotron-fluid">
            <div class="container">
         <h1 class="display-4 text-center ">Registration Form</h1>
              </div>
      </div>
   <div className="row">
<div className="col-md-5">
  <ContactForm  {  ...({addorEdit,currentUserId,registrationObject})}/>
      </div>
      <div className="col-md-7 ">
        <div><h3>List of Rgistered</h3></div>
        <table className="table table-borderless table-stripped">
          <thead className="thead-light">
            <tr>
              <th> Names</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
               Object.keys(registrationObject).map(id => {
                return <tr key={id}>
                  <td>{registrationObject[id].fullname}</td>
                  <td>{registrationObject[id].username}</td>
                  <td>{registrationObject[id].email}</td>
                  <td>{registrationObject[id].mobile}</td>
                  <td>
                    <a className="btn text-primary" onClick={()=> {setCurrentUserId(id)}}>
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a className="btn text-danger" onClick={ ()=> {onDelete(id)}}>
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>

      </div>
     </div>

      </React.Fragment>
       
   


    );

}
export default Contacts;