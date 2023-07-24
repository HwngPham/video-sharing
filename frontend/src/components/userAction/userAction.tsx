import { useState } from "react";
import { useStore } from "../../store";
import { Button } from "../button/button";
import { ModalSharing } from "../modalSharing/modalSharing";

export const UserAction = () => {
  const { user, logout } = useStore();
  const [isModalSharingOpen, setModalSharingOpen] = useState(false);

  const toggleModalSharing = () => setModalSharingOpen(!isModalSharingOpen);

  return (
    <div className="flex justify-between gap-2 flex-wrap">
      <p className="text-md text-white leading-8 mr-2">Welcome {user?.email}</p>

      <div className="flex gap-2">
        <Button onClick={toggleModalSharing}>Share a movie</Button>
        <Button onClick={logout}>Logout</Button>
      </div>

      <ModalSharing open={isModalSharingOpen} toggleOpen={toggleModalSharing} />
    </div>
  );
};
