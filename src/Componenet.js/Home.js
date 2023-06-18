import { useRef, useState } from "react";
import "./Home.css";

export default function Home()
{
    let formRef=useRef();
    let [logDeatil, setLogDetail]=useState({uname:"", pass:""});
    let changeUname=(e)=>{
        let newUname={...logDeatil, uname:e.target.value};
        setLogDetail(newUname);
    }
    let changePass=(e)=>{
        let newPass={...logDeatil, pass:e.target.value};
        setLogDetail(newPass);
    }

    let addUserLogin=()=>{

        formRef.current.classList.add("was-validated");
        let formStatus = formRef.current.checkValidity();
        if (!formStatus) 
        {
            return;
        }
        let url =`http://localhost:9000/addLogin?uname=${logDeatil.uname}&pass=${logDeatil.pass}`;
        fetch(url);

        alert("Done");
    }
    return(
        <>
        <div  className="container-fluid">
            <div className="row "style={{height: "100%"}}>
                <div className="col-4" >
                    <img src="LoginSidePic1.jpg" alt="" height="100%"/>
                </div>
                <div className="col-8">
                    <div
                        class="row align-text-center justify-content-center"
                    >
                        <div class="col-sm-9 col-md-6 p-3 " style={{margin: "16vh"}}>
                        <h2 id="idh111" >Login</h2>
                        <form ref={formRef} className="needs-validation " novalidate>
                            <label htmlFor="uname">Username</label>
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                id="uname"
                                value={logDeatil.uname}
                                onChange={changeUname}
                                class="form-control my-2 border-warning"
                            />
                            <span id="ffname" class="text-danger"></span>
                            <label htmlFor="pass">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                id="pass"
                                class="form-control  my-2 border-warning"
                            />
                            <span id="ppword" class="text-danger"></span>
                        </form>
                        <div class="btndiv">
                            <input
                            type="button"
                            value="Login"
                            onClick={addUserLogin}
                            class="btn btn-primary mt-2 w-50 fs-4"
                            />
                        </div>
                        <div class="btndiv">
                            <p class="m-3">
                            Don't have an account ?
                            <a href="http://127.0.0.1:5500/register.html">Register Here</a>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}