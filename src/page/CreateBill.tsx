
import { FormBill } from '../components/FormBill'
import { Link } from "react-router-dom"


export const CreateBill = () => {
  return (
    <div>
      <Link to={'/'} >Index</Link>
        <h2>Gastos</h2>
        <FormBill/>
    </div>
  )
}
