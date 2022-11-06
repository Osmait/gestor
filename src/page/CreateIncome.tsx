
import { FromIncome } from '../components/FromIncome'
import { Link } from "react-router-dom"


export const CreateIncome = () => {
  return (
    <div>
        <Link to={'/'} >Index</Link>
        <h1>Registrar Ingreso</h1>
        <FromIncome/>
    </div>
  )
}
