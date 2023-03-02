import { type ReactElement, useCallback } from "react";

import { type HarItem } from "@src/interfaces/HarItem";
import { download, getFilename } from "@src/utils/file";

import styles from "./Hars.module.scss";

export interface HarsProps {
  items: HarItem[];
  onClickDelete: (id: string) => void;
}

const Hars = ({ items, onClickDelete }: HarsProps): ReactElement => {
  const handleClickDelete = useCallback(
    (id: string) => {
      onClickDelete(id);
    },
    [onClickDelete]
  );

  return (
    <table>
      <thead>
        <tr>
          <th className={styles.headerCell}>File</th>
          <th className={styles.headerCell}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          const filename = getFilename(item);
          return (
            <tr key={filename}>
              <td className={styles.filename}>{filename}</td>
              <td className={styles.actions}>
                <button
                  className={styles.downloadButton}
                  onClick={(): void => download(item)}
                >
                  Download
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={(): void => handleClickDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Hars;
