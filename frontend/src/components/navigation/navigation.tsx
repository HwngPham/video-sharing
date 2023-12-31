import { useStore } from "../../store";
import { AuthForm } from "../authForm/authForm";
import { UserAction } from "../userAction/userAction";

export const Navigation = () => {
  const { user } = useStore();

  return (
    <nav className="fixed w-full bg-blue-500 p-6 rounded-sm">
      <div className="container flex justify-between mx-8 flex-wrap mx-auto">
        <h1 className="text-xl text-white">Funny Movies</h1>

        <div>{user ? <UserAction /> : <AuthForm />}</div>
      </div>
    </nav>
  );
};
