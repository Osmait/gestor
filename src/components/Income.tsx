import useBudget from "../hooks/useBudget"


export const Income = ({income}:any) => {

  const {eliminarIncome}= useBudget()
 const handleclick =(id:number)=>{
  confirm("Seguro que deseas eliminar este Gasto") ? eliminarIncome(id):null

  
 }
  return (
    
          <div className="montos" >
                <p>{income.description}: $<strong>{income.amount}</strong></p>
                <button>Editar</button>
                <button onClick={()=> handleclick(income.id)}>Eliminar</button>
            </div>
   
  )
}
