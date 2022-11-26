import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bills } from "../components/Bills";
import { Cargando } from "../components/Cargando";

import { Incomes } from "../components/Incomes";
import { presupuestoDisponible } from "../helpers/Presupuesto";
import useAuth from "../hooks/useAuth";
import useBudget from "../hooks/useBudget";

export const Index = () => {
  const { incomes, bills, cerrarSession } = useBudget();
  const { auth } = useAuth();
  const [presupuesto, setPresupuesto] = useState(0);

  useEffect(() => {
    setPresupuesto(presupuestoDisponible(bills, incomes));
  }, [bills, incomes]);

  return (
    <>
      <div className="bg-neutral-900 min-h-screen ">
        <h1 className="mb-4  text-white text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
          Welcome: {auth.first_name}
        </h1>

        <h2 className="mb-4 text-white text-2xl font-extrabold tracking-tight leading-none  md:text-2xl lg:text-2xl ">
          Presupuesto Disponible:${presupuesto}{" "}
        </h2>

        <nav className="bg-neutral-900 border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center md:order-2">
              <button
                onClick={cerrarSession}
                className="text-white bg-red-700 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:outline-none dark:focus:ring-gray-800"
              >
                Logout
              </button>
            </div>
            <div
              id="mega-menu"
              className=" justify-between items-center w-full text-sm md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-lg "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    id="mega-menu-dropdown-button"
                    data-dropdown-toggle="mega-menu-dropdown"
                    className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-lg "
                  >
                    <Link className="link" to={"/create-income"}>
                      Register Income
                    </Link>
                  </button>
                </li>
                <li>
                  <Link
                    to={"/create-bill"}
                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-lg "
                  >
                    Register Bill
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="contenedor">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-3 md:w-4/6 lg:w-4/6 mx-auto shadow rounded-lg p-10 my-5 bg-neutral-800">
            <Incomes />

            <Bills />
          </div>
        </section>
      </div>
    </>
  );
};
