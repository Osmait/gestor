import useBudget from "../hooks/useBudget"


export const Bill = ({bill}:any) => {


  const {eliminarGasto}= useBudget()
 const handleclick =(id:number)=>{
  confirm("Seguro que deseas eliminar este Gasto") ? eliminarGasto(id):null

  
 }

  return (
    <div className="montos">
        <p>{bill.description}: $<strong>{bill.amount }</strong></p>
        <button>Editar</button>
        <button onClick={()=>handleclick(bill.id)}>Eliminar</button>
    </div>
  )
}
