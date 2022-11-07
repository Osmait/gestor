import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bills } from "../components/Bills";

import { Incomes } from "../components/Incomes";
import { presupuestoDisponible } from "../helpers/Presupuesto";
import useAuth from "../hooks/useAuth";
import useBudget from "../hooks/useBudget";

export const Index = () => {
  const { incomes, bills } = useBudget();
  const { auth } = useAuth();
  const [presupuesto, setPresupuesto] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setPresupuesto(presupuestoDisponible(bills, incomes));
  }, [bills, incomes]);

  const cerrarSession = () => {
    localStorage.removeItem("x-token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome: {auth.first_name}</h1>
      <button onClick={cerrarSession}>Cerrar Seccion</button>
      <h2 className="presupuesto">Presupuesto Disponible:${presupuesto} </h2>
      <button>
        <Link className="link" to={"/create-bill"}>
          Registrar Gasto
        </Link>
      </button>
      <button>
        <Link className="link" to={"/create-income"}>
          Registrar Ingreso
        </Link>
      </button>
      <section className="contenedor">
        <div className="contenido">
          <Incomes />
          <Bills />
        </div>
      </section>
    </div>
  );
};
