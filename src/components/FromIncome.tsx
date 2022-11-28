import React from "react";
import useBudget from "../hooks/useBudget";
import { useNavigate, useParams } from "react-router-dom";

export const FromIncome = () => {
  const {
    setAlerta,
    createIncome,
    incomeDescription,
    setIncomeDescription,
    incomeAmount,
    setIncomeAmount,
    editandoincome,
  } = useBudget();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!incomeDescription || incomeAmount === 0) {
      setAlerta({
        msg: "Todos los Campos son Obligatorios",
        error: true,
      });
      return;
    }

    const income = {
      description: incomeDescription,
      amount: parseInt(incomeAmount),
    };

    if (id) {
      await editandoincome(id, income);
      setIncomeAmount(0);
      setIncomeDescription("");
      navigate("/");
      return;
    }

    await createIncome(income);
    setIncomeAmount(0);
    setIncomeDescription("");
    navigate("/");
  };
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-neutral-900 max-w-sm">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label inline-block mb-2 text-white"
          >
            Descripcion
          </label>
          <input
            type="text"
            value={incomeDescription}
            onChange={(e) => setIncomeDescription(e.target.value)}
            className="form-control

        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Descripcion del Gasto"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label inline-block mb-2 text-white"
          >
            Monto
          </label>
          <input
            type="number"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Add
        </button>
      </form>
    </div>
  );
};
