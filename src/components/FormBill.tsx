import { useNavigate, useParams } from "react-router-dom";
import useBudget from "../hooks/useBudget";

export const FormBill = () => {
  const {
    amount,
    setAmount,
    description,
    setDescription,
    setAlerta,
    createBill,
    editandoBill,
  } = useBudget();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description || amount === 0) {
      setAlerta({
        msg: "Todos los Campos son Obligatorios",
        error: true,
      });
      return;
    }

    const bill = {
      description,
      amount: parseInt(amount),
    };
    if (id) {
      await editandoBill(id, bill);
      setAmount(0);
      setDescription("");
      navigate("/");
      return;
    }

    await createBill(bill);
    setAmount(0);
    setDescription("");
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="amount">amount</label>
        <input
          className="login_input"
          id="amount"
          type={"number"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input className="login_submit" type={"submit"} value="Add" />
      </form>
    </>
  );
};
