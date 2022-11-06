import React from 'react'
import useBudget from '../hooks/useBudget'
import { useNavigate } from "react-router-dom"


export const FromIncome = () => {
    const{setAlerta,createIncome, incomeDescription,setIncomeDescription,incomeAmount,setIncomeAmount}=useBudget()
    const navigate = useNavigate()
    
    
    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!incomeDescription || incomeAmount === 0){
            setAlerta({
                msg: "Todos los Campos son Obligatorios",
                error: true,
              });
              return;
        }
        
       const income ={
        description:incomeDescription,
        amount:parseInt(incomeAmount)
       }
       
       await createIncome(income)
       setIncomeAmount(0)
       setIncomeDescription('')
       navigate('/')
     }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input id="description" type={"text"} value={incomeDescription} onChange={(e)=>setIncomeDescription(e.target.value)}/>
        <label htmlFor="amount">amount</label>
        <input  id="amount" type={"number"} value={incomeAmount} onChange ={(e)=>setIncomeAmount(e.target.value)}/>
        <input type={"submit"} value="Add"/>
    </form>
    </>
  )
}
