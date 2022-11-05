
import useBudget from '../hooks/useBudget'
interface billsInterface{
    id:number,
    description:string,
    amount:number,
    created_at:Date,
    update_ad:Date
}

export const Bills = () => {
    const{bills}=useBudget()
  
  return (
    <div>
       {bills.bills.map((b:billsInterface)=>(
        <div key={b.id}>
        <p>{b.description}:{b.amount}</p>
        
        
        </div>
        
       ))}
    </div>
  )
}
