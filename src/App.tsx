import { type ReactElement, useCallback, useEffect, useState } from "react";

import Alert from "@src/components/Alert";
import Hars from "@src/components/Hars";
import RecordButton, { RecordingState } from "@src/components/RecordButton";
import { INIT, RECORDING, RECORDING_ACTIVE, RECORDING_INACTIVE, TOGGLE_RECORD_BUTTON, UPDATE_HAR_LIST } from "@src/constants";
import { HarItem } from "@src/interfaces/HarItem";
import logo from "@src/images/logo.svg"

import styles from "./App.module.scss";

const App = (): ReactElement => {
  const [state, setState] = useState<RecordingState>("inactive");
  const [hars, setHars] = useState<HarItem[]>([]);

  const handleClick = useCallback(() => {
    chrome.runtime.sendMessage({ action: TOGGLE_RECORD_BUTTON })
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(
      (request) => {
        if (request.action === RECORDING) {
          if (request.value === RECORDING_ACTIVE) {
            setState("active");
          } else if (request.value === RECORDING_INACTIVE) {
            setState("inactive");
          }
        } else if (request.action === UPDATE_HAR_LIST) {
          setHars(request.value);
        }
      })

    chrome.runtime.sendMessage({ action: INIT })
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.logo} alt="Gatling logo" src={logo} />
      <RecordButton state={state} onClick={handleClick}/>
      {state === "active" && <Alert variant="info">Recording has started!</Alert>}
       {hars?.length > 0 && <Hars hars={hars} />}
    </div>
  )
}

export default App
