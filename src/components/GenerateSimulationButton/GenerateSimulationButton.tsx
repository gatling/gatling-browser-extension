import { type ReactElement, useState } from "react";

import { createPortal } from "react-dom";

import GenerateSimulationForm from "@src/components/GenerateSimulationForm";
import Modal from "@src/components/Modal";

export interface GenerateSimulationButtonProps {
  className?: string;
}

const GenerateSimulationButton = ({
  className,
}: GenerateSimulationButtonProps): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className={className} onClick={(): void => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <Modal
            onClose={(): void => setShowModal(false)}
            title="Generate simulation"
          >
            <GenerateSimulationForm onClose={(): void => setShowModal(false)} />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default GenerateSimulationButton;
