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
    <>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          className="login_input"
          id="description"
          type={"text"}
          value={incomeDescription}
          onChange={(e) => setIncomeDescription(e.target.value)}
        />
        <label htmlFor="amount">amount</label>
        <input
          className="login_input"
          id="amount"
          type={"number"}
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <input className="login_submit" type={"submit"} value="Add" />
      </form>
    </>
  );
};
