import React, { useState, useEffect } from "react";
import Axios from "axios";


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = async () => {
        try {
            Axios({
                method: "POST",
                url: "http://localhost:3002/signup",
                data: {
                    email,
                    password
                }
            }).then((res)=>{
                console.log(res);
                alert(res.data.message)
            }) 
        } catch(err) {
            console.log('err: ', err);
            alert(err)
        }
    }
    
    return (
        <div>
            <div>
                <h1> Signup </h1>
            </div>
            <div>
                <div className="formLabel"> Email </div>
                <input onChange={(event) => {
                    setEmail(event.target.value)
                    }} className="inpBox" type="text" />
            </div>
            <div>
                <div className="formLabel"> Password: </div>
                <input onChange={(event) => {
                    setPassword(event.target.value)
                    console.log(password)
                }} className="inpBox" type="text" />
            </div>
            <div>
                <button className="submitBtn" onClick={() => submitForm()}> Signup </button>
            </div>
        </div>
    )
}

export default Signup ;