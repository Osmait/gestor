import axios from "axios";
import {createContext, useEffect, useState} from "react";

type Props = {
    children: JSX.Element,
  };

interface dataInterface {
 id:number,
 description:string,
 amount:number
}

const BuggetContext = createContext<any>(undefined)

export const BuggetProvider = ({children}:Props)=>{
    const [description , setDescription] = useState('')
    const [amount , setAmount] = useState(0)
    const [alerta, setAlerta] = useState({});
    const [bills, setBills]=useState([])




useEffect(()=>{
    const billsList = async () => {
        const token = localStorage.getItem("x-token")
        if(!token){
            setAlerta({
                msg:"No tienes autorizacion",
                error:true
            })
            return
        }
        const config = {
            headers:{
                "content-Type":"application/json",
                "x-token":token
            }
        }
        try {
            const url = "http://127.0.0.1:3000/api/gastos"
            const {data} = await axios.get(url,config)
            setBills(data)
        } catch (error) {
        console.log(error)
        }
    }
    billsList()
},[,bills])

const createBill =async (bill:object) =>{
    const token = localStorage.getItem("x-token")
    if(!token){
        setAlerta({
            msg:"No tienes autorizacion",
            error:true
        })
        return
    }
    const config = {
        headers:{
            "Content-Type":"application/json",
            "x-token":token
        }
    }

    try {

        const url = "http://127.0.0.1:3000/api/gastos/"
        console.log(bill)
       const {data}= await axios.post(url,bill,config)
       
        setBills([...bills,data])
    } catch (error) {
    console.log(error)
    }
}





    return(
        <BuggetContext.Provider
            value={{
                amount,
                setAmount,
                description,
                setDescription,
                createBill,
                setAlerta,
                alerta,
                bills

            }}
        >
            {children}
        </BuggetContext.Provider>
    )
}

export default BuggetContext
