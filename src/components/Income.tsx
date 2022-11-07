import { useNavigate } from "react-router-dom"
import useBudget from "../hooks/useBudget"


export const Income = ({income}:any) => {

  const navigate = useNavigate()
  const {eliminarIncome}= useBudget()
 const handleclick =(id:number)=>{
  confirm("Seguro que deseas eliminar este Gasto") ? eliminarIncome(id):null
 }

 const handleEdit =(id:number) => {
  navigate(`/income/edite/${id}`)
}
  return (
    
          <div className="montos" >
                <p>{income.description}: $<strong>{income.amount}</strong></p>
                <button onClick={()=>handleEdit(income.id)}>Editar</button>
                <button onClick={()=> handleclick(income.id)}>Eliminar</button>
            </div>
   
  )
}
