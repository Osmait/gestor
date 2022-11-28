import useBudget from "../hooks/useBudget";
import { Cargando } from "./Cargando";
import { CargandoBillIncome } from "./CargandoBillIncome";
import { Income } from "./Income";

export interface incomeInterface {
  id: number;
  description: string;
  amount: number;
  created_at: Date;
  update_ad: Date;
}

export const Incomes = () => {
  const { incomes, cargando } = useBudget();

  return (
    <div>
      <h1 className="ont-medium leading-tight text-5xl text-white">Ingresos</h1>
      <h4 className="ont-medium leading-tight text-2xl text-white">
        Total de Ingreso: ${" "}
        {incomes.reduce(
          (total: number, ingreso: incomeInterface) => ingreso.amount + total,
          0
        )}
      </h4>
      {!cargando ? (
        incomes.map((income: incomeInterface) => (
          <Income income={income} key={income.id} />
        ))
      ) : (
        <CargandoBillIncome />
      )}
    </div>
  );
};
