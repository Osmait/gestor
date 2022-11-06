import { Link } from "react-router-dom"
import { Bills } from "../components/Bills"


import { Incomes } from "../components/Incomes"


export const Index = () => {
  return (
    <div>
      <h1>Welcome</h1>
    <Link to={'/create-bill'}>Create Bill</Link>
    <Link to={'/create-income'}>Create Income</Link>
      <Bills />
      <Incomes />
      
    </div>
  );
}
