import useBudget from "../hooks/useBudget"


export const FormBill = () => {
    const{amount,setAmount,description,setDescription,setAlerta,createBill}=useBudget()
    
    
    
    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!description || amount === 0){
            setAlerta({
                msg: "Todos los Campos son Obligatorios",
                error: true,
              });
              return;
        }
        
       const bill ={
        description,
        amount:parseInt(amount)
       }
       
       await createBill(bill)
     }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input id="description" type={"text"} value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <label htmlFor="amount">amount</label>
        <input  id="amount" type={"number"} value={amount} onChange ={(e)=>setAmount(e.target.value)}/>
        <input type={"submit"} value="Add"/>
    </form>
    </>
  )
}
