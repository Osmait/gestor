
import { FormBill } from '../components/FormBill'
import { Link } from "react-router-dom"


export const CreateBill = () => {
  return (
    <div className="login">
      <button >
      <Link className='link' to={'/'} >Index</Link>

      </button>
        <h2>Gastos</h2>
        <FormBill/>
    </div>
  )
}
