import { useNavigate } from "react-router-dom";
import useBudget from "../hooks/useBudget";

export const Bill = ({ bill }: any) => {
  const navigate = useNavigate();

  const { eliminarGasto } = useBudget();
  const handleclick = (id: number) => {
    confirm("Seguro que deseas eliminar este Gasto") ? eliminarGasto(id) : null;
  };
  const handleEdit = (id: number) => {
    navigate(`/bill/edite/${id}`);
  };

  return (
    <div className="block my-2 max-w-sm p-6 bg-neutral-900  border-gray-200 rounded-lg shadow-md hover:hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="mb-2 text-2xl font-bold tracking-tight  text-white">
        {bill.description}: $<strong>{bill.amount}</strong>
      </p>
      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => handleEdit(bill.id)}
        >
          Editar
        </button>
        <button
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => handleclick(bill.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
