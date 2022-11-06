

export const Income = ({income}:any) => {
  return (
    
          <div key={income.id}>
                <p>{income.description}: ${income.amount} </p>
            </div>
   
  )
}
