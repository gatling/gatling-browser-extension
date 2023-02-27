import { type ReactElement, useCallback, useState } from "react";

import Alert from "@src/components/Alert";
import Hars from "@src/components/Hars";
import RecordButton from "@src/components/RecordButton";
import { HarItem } from "@src/interfaces/HarItem";
import logo from "@src/images/logo.svg"

import styles from "./App.module.scss";
import { startRecording, stopRecording } from "@src/utils/devtools";

const App = (): ReactElement => {
  const [recording, setRecording] = useState(false);
  const [records, setRecords] = useState<HarItem[]>([]);

  const handleClick = useCallback((recording: boolean) => {
    console.log("handleClick recording:", recording);
    console.log("handleClick records:", records);
    if (recording) {
      const newHar = stopRecording()
      console.log("newHar:", newHar);
      setRecords(oldRecords => [...oldRecords, newHar]);
    } else {
      startRecording()
    }

    setRecording(prevState => !prevState)
  }, []);

  const handleClickDelete = useCallback((id: string) => {
    setRecords(prevState => prevState.filter(item => item.id !== id))
  }, [])

  console.log("recording:", recording);
  console.log("records:", records);

  return (
    <div className={styles.container}>
      <div className={styles.logo} />
      <RecordButton onClick={() => handleClick(recording)} recording={recording}/>
      {recording && <Alert variant="info">Recording has started!</Alert>}
       {records?.length > 0 && <Hars items={records} onClickDelete={handleClickDelete} />}
    </div>
  )
}

export default App
