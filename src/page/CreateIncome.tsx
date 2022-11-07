import { FromIncome } from "../components/FromIncome";
import { Link } from "react-router-dom";

export const CreateIncome = () => {
  return (
    <div className="login">
      <button>
        <Link className="link" to={"/"}>
          Index
        </Link>
      </button>
      <h1>Registrar Ingreso</h1>
      <FromIncome />
    </div>
  );
};
