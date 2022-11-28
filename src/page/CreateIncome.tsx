import { FromIncome } from "../components/FromIncome";
import { Link } from "react-router-dom";

export const CreateIncome = () => {
  return (
    <div className="min-h-screen bg-neutral-900  grid  grid-rows-3  max-h-screen">
      <div>
        <h2 className="text-white text-8xl">Ingresos</h2>
        <a className=" text-white text-2xl">
          <Link className="link" to={"/"}>
            Inicio
          </Link>
        </a>
      </div>
      <div className="bg-neutral-800 md:w-2/8 lg:w-2/8 mx-auto shadow rounded-lg p-15 row-start-2">
        <FromIncome />
      </div>
    </div>
  );
};
