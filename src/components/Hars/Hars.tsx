import { ReactElement, useCallback } from "react";

import { DELETE_HAR } from "@src/constants";
import { HarItem } from "@src/interfaces/HarItem";

import styles from "./Hars.module.scss"

const getFilename = (har: HarItem): string => har.date + "_" + har.domain + ".har"

export interface HarsProps {
  hars: HarItem[]
}

const Hars = ({hars}: HarsProps): ReactElement => {
  const handleDelete = useCallback((id: string) => {
    chrome.runtime.sendMessage({ action: DELETE_HAR, value: id })
  }, [])

  const handleDownload = useCallback((har: HarItem) => {
    const file = new Blob([JSON.stringify(har.har, undefined, 4)], { type: "application/json" })

    const a = document.createElement("a")
    a.href = URL.createObjectURL(file)
    a.download = getFilename(har);
    a.click()
    a.remove();
    URL.revokeObjectURL(a.href);
  }, [])

  return (
    <table>
      <thead>
      <tr>
        <th className={styles.headerCell}>File</th>
        <th className={styles.headerCell}>Actions</th>
      </tr>
      </thead>
      <tbody>
      {hars.map((har) => {
          const filename = getFilename(har)
          return (
            <tr key={filename}>
              <td className={styles.filename}>{filename}</td>
              <td className={styles.actions}>
                <button className={styles.downloadButton} onClick={() => handleDownload(har)}>Download</button>
                <button className={styles.deleteButton} onClick={() => handleDelete(har.id)}>Delete</button>
              </td>
            </tr>
          );
        }
      )
      }
      </tbody>
    </table>

  );
}

export default Hars;
