import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <section className="min-h-screen bg-neutral-900  grid  grid-rows-3  max-h-screen">
        <Outlet />
      </section>
    </>
  );
};
