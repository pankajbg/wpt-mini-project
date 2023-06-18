import { useState } from "react"

export default function GetContact()
{
    let [getMsg, setGetMsg]=useState([]);

    let getContactMessage= async ()=>{
        let url=`http://localhost:1000/readContactMsg`;
        let res = await fetch(url);
        let list = await res.json();

        setGetMsg(list);
        console.log(getMsg);
    };
    return(
        <>
            <h1>Get Contact Msg</h1>
            <input 
                type="button" 
                value="Get Contact Msg" 
                onClick={getContactMessage}
            />
             {/** {getTodoMsg.map((msg)=><h5>{msg.Todomsg}</h5>)}*/}
             {getMsg.map((msg)=><h5>{msg.FirstName}</h5>)}
        </>
    )
}