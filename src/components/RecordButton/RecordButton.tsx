import { type ReactElement } from "react";

import styles from "./RecordButton.module.scss";

export type RecordingState = "active" | "inactive";

export interface RecordButtonProps {
  state: RecordingState
  onClick: () => void
}

const RecordButton = ({ state, onClick }: RecordButtonProps): ReactElement => {
  const label = state === "inactive" ? "Start recording" : "Stop recording";
  const className = state === "inactive" ? styles.successButton : styles.dangerButton;

  return (
      <button className={className} onClick={onClick}>{label}</button>
  )
}

export default RecordButton
