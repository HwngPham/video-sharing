import { useStore } from "../store";
import { Button } from "./button";

export const UserAction = () => {
  const { user } = useStore();

  return (
    <div className="flex justify-between gap-2">
      <p className="text-md text-white leading-8 mr-2">Welcome {user?.email}</p>

      <Button>Share a movie</Button>
      <Button>Logout</Button>
    </div>
  );
};
