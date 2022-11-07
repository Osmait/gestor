import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { billsInterface } from "../components/Bills";
import { incomeInterface } from "../components/Incomes";

type Props = {
  children: JSX.Element;
};

interface dataInterface {
  id: number;
  description: string;
  amount: number;
}

const BuggetContext = createContext<any>(undefined);

export const BuggetProvider = ({ children }: Props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [alerta, setAlerta] = useState({});
  const [bills, setBills] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [incomeDescription, setIncomeDescription] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [cargando, setCargando] = useState(false);

  useMemo(() => {
    const billsList = async () => {
      setCargando(true);
      const token = localStorage.getItem("x-token");
      if (!token) {
        setAlerta({
          msg: "No tienes autorizacion",
          error: true,
        });
        return;
      }
      const config = {
        headers: {
          "content-Type": "application/json",
          "x-token": token,
        },
      };
      try {
        const url = "http://127.0.0.1:3000/api/gastos";
        const { data } = await axios.get(url, config);
        setBills(data.bills);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    billsList();
  }, []);

  const createBill = async (bill: object) => {
    const token = localStorage.getItem("x-token");
    if (!token) {
      setAlerta({
        msg: "No tienes autorizacion",
        error: true,
      });
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    try {
      const url = "http://127.0.0.1:3000/api/gastos/";

      const { data } = await axios.post(url, bill, config);

      setBills([...bills, data.dato]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const incomeList = async () => {
      setCargando(true);
      const token = localStorage.getItem("x-token");
      if (!token) {
        setAlerta({
          msg: "No tienes autorizacion",
          error: true,
        });
        return;
      }
      const config = {
        headers: {
          "content-Type": "application/json",
          "x-token": token,
        },
      };
      try {
        const url = "http://127.0.0.1:3000/api/income";
        const { data } = await axios.get(url, config);
        setIncomes(data.income);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    incomeList();
  }, []);

  const createIncome = async (income: object) => {
    const token = localStorage.getItem("x-token");
    if (!token) {
      setAlerta({
        msg: "No tienes autorizacion",
        error: true,
      });
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    try {
      const url = "http://127.0.0.1:3000/api/income";

      const { data } = await axios.post(url, income, config);

      setIncomes([...incomes, data.dato]);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarIncome = async (id: number) => {
    const token = localStorage.getItem("x-token");
    if (!token) {
      setAlerta({
        msg: "No tienes autorizacion",
        error: true,
      });
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    try {
      const url = `http://127.0.0.1:3000/api/income/${id}`;

      const { data } = await axios.delete(url, config);
      const incomesActualizados = incomes.filter(
        (income: dataInterface) => income.id !== id
      );

      setIncomes(incomesActualizados);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarGasto = async (id: number) => {
    const token = localStorage.getItem("x-token");
    if (!token) {
      setAlerta({
        msg: "No tienes autorizacion",
        error: true,
      });
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    try {
      const url = `http://127.0.0.1:3000/api/gastos/${id}`;

      const { data } = await axios.delete(url, config);
      const billsActualizados = bills.filter(
        (bill: dataInterface) => bill.id !== id
      );

      setBills(billsActualizados);
    } catch (error) {
      console.log(error);
    }
  };

  const editandoBill = async (id: number, bill: {}) => {
    const token = localStorage.getItem("x-token");
    if (!token) {
      setAlerta({
        msg: "No tienes autorizacion",
        error: true,
      });
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    try {
      const url = `http://127.0.0.1:3000/api/gastos/${id}`;

      const { data } = await axios.put(url, bill, config);
      const { billDB } = data;

      const billActualizado = bills.map((billEdit: billsInterface) =>
        billEdit.id === billDB.id ? billDB : billEdit
      );
      setBills(billActualizado);
    } catch (error) {
      console.log(error);
    }
  };

  const editandoincome = async (id: number, income: {}) => {
    const token = localStorage.getItem("x-token");
    if (!token) {
      setAlerta({
        msg: "No tienes autorizacion",
        error: true,
      });
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    try {
      const url = `http://127.0.0.1:3000/api/income/${id}`;

      const { data } = await axios.put(url, income, config);
      const { incomeDB } = data;

      const incomeActualizado = incomes.map((incomeEdit: incomeInterface) =>
        incomeEdit.id === incomeDB.id ? incomeDB : incomeEdit
      );

      setIncomes(incomeActualizado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BuggetContext.Provider
      value={{
        amount,
        setAmount,
        description,
        setDescription,
        createBill,
        setAlerta,
        alerta,
        bills,
        incomes,
        createIncome,
        incomeDescription,
        setIncomeDescription,
        incomeAmount,
        setIncomeAmount,
        cargando,
        eliminarGasto,
        eliminarIncome,
        editandoBill,
        editandoincome,
      }}
    >
      {children}
    </BuggetContext.Provider>
  );
};

export default BuggetContext;
