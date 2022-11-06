import useBudget from "../hooks/useBudget"
import { Cargando } from "./Cargando"
import { Income } from "./Income"


 export interface incomeInterface{
    id:number,
    description:string,
    amount:number,
    created_at:Date,
    update_ad:Date
}

export const Incomes = () => {
    const{incomes,cargando}=useBudget()

  return (
    <div>
        <h1>Ingresos</h1>
        {!cargando ?incomes.map((income:incomeInterface)=> (
          <Income income ={income} key={income.id ?? Math.random()}/>
        )):<Cargando/>}

        <p>
       Total de Ingreso: $ {incomes.reduce((total:number,ingreso:incomeInterface)=> ingreso.amount+ total,0 )}
        </p>
    </div>
  )
}
