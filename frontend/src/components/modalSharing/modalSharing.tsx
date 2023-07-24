import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../button/button";
import { TextInput } from "../textInput/textInput";
import { useStore } from "../../store";

export interface ModalSharingProps {
  open: boolean;
  toggleOpen: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
}
export const ModalSharing = ({
  open,
  toggleOpen,
  onCancel,
  onSubmit,
}: ModalSharingProps) => {
  const [sharingUrl, setSharingUrl] = useState("");
  const { createVideo } = useStore();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSharingUrl(e.target.value);
  };

  const handleCancel = () => {
    onCancel && onCancel();
    setSharingUrl("");
    toggleOpen();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sharingUrl) return;

    await createVideo(sharingUrl);
    setSharingUrl("");
    onSubmit && onSubmit();
    toggleOpen();
  };

  return (
    open && (
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-2 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-baseline">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900 mb-4"
                    id="modal-title"
                  >
                    Share a Youtube movie
                  </h3>
                  <button className="font-semibold" onClick={handleCancel}>
                    X
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex items-baseline text-sm">
                    <label htmlFor="src" className="whitespace-nowrap mr-2">
                      Youtube URL:{" "}
                    </label>
                    <TextInput
                      required
                      id="src"
                      name="src"
                      value={sharingUrl}
                      onChange={onChange}
                    />
                  </div>
                  <Button className="w-full mt-4" type="submit">
                    Share
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
