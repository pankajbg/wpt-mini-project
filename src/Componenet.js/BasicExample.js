import React, { useState } from 'react';


export default function BasicExample(){
    let [user, setUser] = useState({
        username: "",
        firstname: "",
        lastname: "",
        gmail: "",
        mobno: "",
        password: "",
        confirmpassword: "",
      });
    
      let HandlerUsernameAction = (e) => {
        let newuser = { ...user, username: e.target.value };
        setUser(newuser);
      };
      let HandlerFirstnameAction = (e) => {
        let newuser = { ...user, firstname: e.target.value };
        setUser(newuser);
      };
      let HandlerLastnameAction = (e) => {
        let newuser = { ...user, lastname: e.target.value };
        setUser(newuser);
      };
      let HandlerGmailAction = (e) => {
        let newuser = { ...user, gmail: e.target.value };
        setUser(newuser);
      };
      let HandlerMobnoAction = (e) => {
        let newuser = { ...user, mobno: e.target.value };
        setUser(newuser);
      };
      let HandlerPasswordAction = (e) => {
        let newuser = { ...user, password: e.target.value };
        setUser(newuser);
      };
      let HandlerConfirmPasswordAction = (e) => {
        let newuser = { ...user, confirmpassword: e.target.value };
        setUser(newuser);
      };
    let registerAction = async () => {
        
     
      
  
        let url = `http://localhost:4000/adduser?username=${user.username}&firstname=${user.firstname}&lastname=${user.lastname}&gmail=${user.gmail}&mobno=${user.mobno}&password=${user.password}&confirmpassword=${user.confirmpassword}`;
        await fetch(url);
    
        let newuser = {
          username: "",
          firstname: "",
          lastname: "",
          gmail: "",
          mobno: "",
          password: "",
          confirmpassword: "",
        };
      setUser(newuser);
     
      
      };
    
      return (
        <>
          <div className="container-fluid">
            <form >
          <div
                className="row align-text-center justify-content-center"
          >
            <div className="col-sm-12 col-md-4 p-3 bg-light m-5">
                  <h2 style={{ textAlign: "center" }}>Register</h2>
  
              <input
                type="text"
                placeholder="User Name"
                required
                
                    className="form-control form-control-lg mt-2 border-warning"
                    value={user.username}
                    onChange={HandlerUsernameAction}
                   
                   
                  />
                    
                  
                  <input
                type="text"
                placeholder="First Name"
                
               
                    className="form-control form-control-lg mt-2 border-warning"
                    value={user.firstname}
                    onChange={HandlerFirstnameAction}
                   
                  />
                    
            
                  
                  <input
                type="text"
                placeholder="Last Name"
                
                
                    className="form-control form-control-lg mt-2 border-warning"
                    value={user.lastname}
                    onChange={HandlerLastnameAction}
                   
                   
                  />
                   
            
            
  
              <input
                type="tel"
                placeholder="Mobile No.(Excluding countrty-code)"
                
                    className="form-control form-control-lg mt-2 border-warning"
                    value={user.mobno}
                    onChange={HandlerMobnoAction}
              />
             
              <input
                type="email"
                placeholder="Gmail@xyz.com"
              
                    className="form-control form-control-lg mt-2 border-warning"
                    value={user.gmail}
                    onChange={HandlerGmailAction}
              />
              
              <input
                type="password"
                placeholder="Password"
                
                    className="form-control form-control-lg mt-2 border-warning"
                    value={user.password}
                    onChange={HandlerPasswordAction}
              />
              
              <input
                type="password"
                placeholder="Confirm Password"
                
                    className="form-control form-control-lg mt-2 border-warning"
                    value={user.confirmpassword}
                  onChange={HandlerConfirmPasswordAction}
              />
             
  
              
  
              <input
                type="button"
                value="Submit"
                className="w-100"
                  onClick={registerAction}
                  
              />
            </div>
          </div>
              </form>
           </div>
         
        </>
      );
}
