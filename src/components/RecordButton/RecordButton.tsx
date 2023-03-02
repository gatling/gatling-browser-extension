import { type ReactElement } from "react";

import styles from "./RecordButton.module.scss";

export interface RecordButtonProps {
  recording: boolean;
  onClick: () => void;
}

const RecordButton = ({
  recording,
  onClick,
}: RecordButtonProps): ReactElement => {
  const label = recording ? "Stop recording" : "Start recording";
  const className = recording ? styles.dangerButton : styles.successButton;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default RecordButton;
