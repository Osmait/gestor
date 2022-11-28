import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cargando } from "../components/Cargando";
import useAuth from "../hooks/useAuth";

export interface alertaInterface {
  msg: string;
  error: boolean;
}
export interface errorInterfase {
  response: {
    data: {
      msg: string;
    };
  };
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  const { setAuth, setCargando, cargando } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los Campos son Obligatorios",
        error: true,
      });
      return;
    }

    try {
      setCargando(true);
      const url = `${import.meta.env.VITE_URL_API}api/login`;

      const { data } = await axios.post(url, { email, password });
      localStorage.setItem("x-token", data.token);
      setAlerta({});

      await setAuth(data.user);
      navigate("/");
      setCargando(false);
    } catch (error) {
      setCargando(false);
      setAlerta({
        msg: (error as errorInterfase).response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alerta as alertaInterface;

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : (
        <div className="bg-neutral-800 md:w-2/6 lg:w-2/6 mx-auto shadow rounded-lg p-10 row-start-2">
          <form onSubmit={handleSubmit}>
            {msg && (
              <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <span className="font-medium"></span>
                {msg}
              </div>
            )}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label className="ml-2 text-sm font-medium text-white">
                Remember me
              </label>
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type={"submit"}
              value="Login"
            >
              Submit
            </button>
            <p className="text-white text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link
                to={"/registrar"}
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};
