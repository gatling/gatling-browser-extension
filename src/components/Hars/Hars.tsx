import { type ReactElement, useCallback } from "react";

import GenerateSimulationButton from "@src/components/GenerateSimulationButton";
import { type SimpleEntry } from "@src/interfaces/Entry";
import { type HarItem } from "@src/interfaces/HarItem";
import { type RecorderConfiguration } from "@src/interfaces/RecorderConfiguration";
import { download, getFilename } from "@src/utils/file";
import { generate } from "@src/utils/generate/generate";

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

  const handleClickGenerate = useCallback((entries: SimpleEntry[]) => {
    const config: RecorderConfiguration = {
      core: {
        className: "RecorderDevSimulation",
        encoding: "utf-8",
        simulationsFolder: "",
        resourcesFolder: "",
        pkg: "io.gatling.dev",
        saveConfig: false,
        thresholdForPauseCreation: 100,
        format: "java17",
      },
      http: {
        automaticReferer: true,
        followRedirect: true,
        removeCacheHeaders: true,
        inferHtmlResources: true,
        checkResponseBodies: false,
        useSimulationAsPrefix: false,
        useMethodAndUriAsPostfix: false,
      },
      filters: {
        enabled: false,
        allowList: [],
        denyList: [],
      },
    };
    console.log("entries:", entries);
    generate(entries, config);
  }, []);

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
                  className={styles.generateButton}
                  onClick={(): void => handleClickGenerate(item.entries)}
                >
                  Generate simulation
                </button>
                <GenerateSimulationButton className={styles.generateButton} />
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
