import React, { useState } from 'react'
import TextValidetPassword from './subCValid/TextValidetPassword'

// const test = function (p) {
//     if (p.length < 4) {
//         return { mss: "Password doit avoir au moins t 4 caractères", cl: "rouge" };
//     }

//     return { mss: "pass ok", cl: "vert" };
// }

function validet(pass=""){
    if(pass.length < 1){
        return(<TextValidetPassword text="This field cannot be empty." color="empty p-2"/>)
    }
    if(pass.length > 8){
        return(<TextValidetPassword text="The password provided is not long enough." color="long p-2"/>)
    }
    if (pass.length < 4){
       return(<TextValidetPassword text="Password doit avoir au moins t 4 caractères" color="rouge p-2"/>)
    }else{
        return(<TextValidetPassword text="The password provided is not long enough." color="aqua aqua p-2"/>)
    }   
}

function Confirme(newpass='',pass){
    // console.log(pass)
    if(newpass ===  pass && newpass.length >= 4){
        return(<TextValidetPassword text="The password conforme " color="aqua p-2"/>)
    }
    else{
        return(<TextValidetPassword text="The password non conforme" color="rouge p-2"/>)
    }  
}


export default function LoginControl() {
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    
    return (
        <div>
            <div className='input-group m-1'>
                <label className='input-group-text'>Entrer votre password: </label> 
                <input className='form-control' type="password" value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div> 
            <div className='input-group m-1'>
                <label className='input-group-text'>Confir votre password: </label> 
                <input className='form-control' type="password"
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                />
            </div>           
            <div className='alert'>{passwordConfirm?Confirme(passwordConfirm,password):validet(password)}</div>

        </div>)
}
