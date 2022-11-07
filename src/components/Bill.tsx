import { useNavigate } from "react-router-dom"
import useBudget from "../hooks/useBudget"


export const Bill = ({bill}:any) => {
  const navigate = useNavigate()

  
  const {eliminarGasto}= useBudget()
 const handleclick =(id:number)=>{
  confirm("Seguro que deseas eliminar este Gasto") ? eliminarGasto(id):null
 }
 const handleEdit =(id:number) => {
  navigate(`/bill/edite/${id}`)
}

  return (
    <div className="montos">
        <p>{bill.description}: $<strong>{bill.amount }</strong></p>
        <button onClick={()=>handleEdit(bill.id)}>Editar</button>
        <button onClick={()=>handleclick(bill.id)}>Eliminar</button>
    </div>
  )
}


