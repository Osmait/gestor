import useBudget from "../hooks/useBudget";
import { Bill } from "./Bill";
import { Cargando } from "./Cargando";
import { CargandoBillIncome } from "./CargandoBillIncome";
export interface billsInterface {
  id: number;
  description: string;
  amount: number;
  created_at: Date;
  update_ad: Date;
}

export const Bills = () => {
  const { bills, cargando } = useBudget();

  return (
    <div>
      <h1 className="ont-medium leading-tight text-5xl text-white">Gastos</h1>
      <h4 className="ont-medium leading-tight text-2xl text-white">
        Total de Gastos: ${" "}
        {bills.reduce(
          (total: number, gasto: billsInterface) => gasto.amount + total,
          0
        )}
      </h4>

      {!cargando ? (
        bills.map((bill: billsInterface) => <Bill bill={bill} key={bill.id} />)
      ) : (
        <CargandoBillIncome />
      )}
    </div>
  );
};
