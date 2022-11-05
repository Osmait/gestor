import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

interface alertaInterface {
    msg:string,
    error:boolean
}
interface errorInterfase {
    response:{
      data:{
        msg:string
      }
    }
  }



export const Login = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [alerta, setAlerta] = useState({});

  const navigate = useNavigate()

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=> { 
    e.preventDefault()

    if ([email, password].includes("")) {
        setAlerta({
          msg: "Todos los Campos son Obligatorios",
          error: true,
        });
        return;
      }
    try {
        const url = "http://127.0.0.1:3000/api/login"
        const {data} =await axios.post(url,{email,password})
        localStorage.setItem("x-token",data.token)
        setAlerta({});
        navigate('/')
    } catch (error) {
      
        setAlerta({
            msg: (error  as errorInterfase).response.data.msg,
            error: true,
          });
    }


    
}
    const { msg } = alerta as alertaInterface

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {msg && <p>{msg}</p>}
            <label htmlFor="email">Email</label>
            <input id="email" type={"text"} placeholder= "Email" onChange={(e)=> setEmail(e.target.value)} value ={email}/>
            <label htmlFor="password" >Password</label>
            <input id="password" type={"password"}placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <input type={"submit"} value="Login"/>
        </form>
    </div>
  )
}
