import {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Card from "@src/components/Card";
import FilterList from "@src/components/FilterList";
import { ENCODING_ITEMS } from "@src/constants/encoding";
import {
  downloadGatling,
  getDefaultDownloadDirectory,
  getFileName,
  initDefaultDownloadDirectory,
  openFileDirectory,
  searchDownload,
} from "@src/utils/chrome/downloads";

import styles from "./GenerateSimulationForm.module.scss";

export interface GenerateSimulationFormProps {
  onClose: () => void;
}

const GenerateSimulationForm = ({
  onClose,
}: GenerateSimulationFormProps): ReactElement => {
  const [loadingDownload, setLoadingDownload] = useState<boolean>(false);
  const [downloadsDirectory, setDownloadsDirectory] = useState<string>("");
  const [gatlingDirectory, setGatlingDirectory] = useState<string>("");
  const downloadTypeRef = useRef<HTMLSelectElement>(null);
  const [enableFilters, setEnableFilters] = useState<boolean>(false);
  const handleClickEnableFilters = useCallback((value: boolean) => {
    setEnableFilters(value);
  }, []);

  useEffect((): void => {
    initDefaultDownloadDirectory().then((dir) => {
      setDownloadsDirectory(dir);
    });
  }, [setDownloadsDirectory]);

  const onChange = useCallback(
    (
      downloadId: number,
      downloadDelta: chrome.downloads.DownloadDelta
    ): void => {
      if (downloadDelta.id === downloadId && downloadDelta.state?.current) {
        if (downloadDelta.state.current === "in_progress") {
          if (!loadingDownload) {
            setLoadingDownload(true);
          }
        } else {
          if (downloadDelta.state.current === "complete") {
            openFileDirectory(downloadId);
            searchDownload(downloadId).then((items) => {
              if (items && items.length > 0) {
                const filepath = items[0].filename;
                const defaultDownloadDir =
                  getDefaultDownloadDirectory(filepath);
                const filename = getFileName(filepath);
                setDownloadsDirectory(defaultDownloadDir);
                setGatlingDirectory(filename);
              }
            });
          }
          setLoadingDownload(false);
        }
      }
    },
    [loadingDownload, setLoadingDownload]
  );

  const handleDownloadGatling = useCallback(() => {
    const type = downloadTypeRef.current?.value ?? "";
    if (type) {
      downloadGatling(type)
        .then((downloadId) => {
          if (downloadId !== undefined) {
            chrome.downloads.onChanged.addListener((downloadDelta) =>
              onChange(downloadId, downloadDelta)
            );
          } else {
            console.error("Le téléchargement a échoué");
          }
        })
        .catch((e) => console.log(e));
    }
  }, [onChange]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Card title="Simulation information">
          <div className={styles.simulationInformationBody}>
            <div className={styles.textFields}>
              <label htmlFor="pkg">Package (optional)</label>
              <input type="text" id="pkg" name="pkg" defaultValue="" />
              <label htmlFor="className">Class Name</label>
              <input
                type="text"
                id="className"
                name="className"
                defaultValue="RecordedSimulation"
              />
              <label htmlFor="format">Format</label>
              <select id="format" name="format" defaultValue="java8">
                <option value="java8">Java 8</option>
                <option value="java11">Java 11</option>
                <option value="java17">Java 17</option>
                <option value="kotlin">Kotlin</option>
                <option value="scala">Scala</option>
              </select>
            </div>
            <div className={styles.checkboxes}>
              <label htmlFor="followRedirect">
                <input
                  type="checkbox"
                  id="followRedirect"
                  name="followRedirect"
                  defaultChecked
                />
                Follow Redirects
              </label>

              <label htmlFor="inferHtmlResources">
                <input
                  type="checkbox"
                  id="inferHtmlResources"
                  name="inferHtmlResources"
                  defaultChecked
                />
                Infer HTML resources
              </label>

              <label htmlFor="automaticReferer">
                <input
                  type="checkbox"
                  id="automaticReferer"
                  name="automaticReferer"
                  defaultChecked
                />
                Automatic Referers
              </label>

              <label htmlFor="removeCacheHeaders">
                <input
                  type="checkbox"
                  id="removeCacheHeaders"
                  name="removeCacheHeaders"
                  defaultChecked
                />
                Remove cache headers
              </label>
            </div>
            <div className={styles.checkboxes}>
              <label htmlFor="useSimulationAsPrefix">
                <input
                  type="checkbox"
                  id="useSimulationAsPrefix"
                  name="useSimulationAsPrefix"
                />
                Use Class Name as request prefix
              </label>

              <label htmlFor="useMethodAndUriAsPostfix">
                <input
                  type="checkbox"
                  id="useMethodAndUriAsPostfix"
                  name="useMethodAndUriAsPostfix"
                />
                Use HTTP method and URI as request postfix
              </label>

              <label htmlFor="checkResponseBodies">
                <input
                  type="checkbox"
                  id="checkResponseBodies"
                  name="checkResponseBodies"
                />
                Save & check response bodies
              </label>
            </div>
          </div>
        </Card>
        <Card title="Output">
          <div className={styles.outputBody}>
            <div className={styles.directories}>
              <label htmlFor="downloadsDirectory">Downloads folder</label>
              <input
                id="downloadsDirectory"
                onChange={(e): void => setDownloadsDirectory(e.target.value)}
                name="downloadsDirectory"
                type="text"
                value={downloadsDirectory}
              />
              <label htmlFor="downloadsFolder">Gatling directory</label>
              <input
                id="gatlingDirectory"
                onChange={(e): void => setGatlingDirectory(e.target.value)}
                name="gatlingDirectory"
                type="text"
                value={gatlingDirectory}
              />
              <label htmlFor="format">Encoding</label>
              <select id="format" name="format" defaultValue="utf-8">
                {Array.from(ENCODING_ITEMS).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.downloadGatling}>
              <label htmlFor="downloadType">Bundle or build tool</label>
              <div className={styles.downloadGatlingType}>
                <select
                  className={styles.selectDownloadType}
                  id="downloadType"
                  ref={downloadTypeRef}
                >
                  <optgroup label="Bundle">
                    <option value="gatling-bundle">Gatling Bundle</option>
                  </optgroup>
                  <optgroup label="Maven">
                    <option value="gatling-maven-plugin-demo-java">Java</option>
                    <option value="gatling-maven-plugin-demo-kotlin">
                      Kotlin
                    </option>
                    <option value="gatling-maven-plugin-demo-scala">
                      Scala
                    </option>
                  </optgroup>
                  <optgroup label="Gradle">
                    <option value="gatling-gradle-plugin-demo-java">
                      Java
                    </option>
                    <option value="gatling-gradle-plugin-demo-kotlin">
                      Kotlin
                    </option>
                    <option value="gatling-gradle-plugin-demo-scala">
                      Scala
                    </option>
                  </optgroup>
                  <optgroup label="SBT">
                    <option value="gatling-sbt-plugin-demo">Scala</option>
                  </optgroup>
                </select>
                <button onClick={handleDownloadGatling}>Download</button>
              </div>
            </div>
          </div>
        </Card>
        <Card title="Filters">
          <div className={styles.filters}>
            <div className={styles.filtersHeader}>
              <label>Java regular expressions that match the entireURL</label>
              <label htmlFor="enableFilters">
                <input
                  type="checkbox"
                  id="enableFilters"
                  name="enableFilters"
                  checked={enableFilters}
                  onChange={(e): void =>
                    handleClickEnableFilters(e.target.checked)
                  }
                />
                Enable Filters
              </label>
            </div>
            <div className={styles.filtersBody}>
              <FilterList type="allow" />
              <FilterList
                type="deny"
                onClickStaticResources={(): void =>
                  handleClickEnableFilters(true)
                }
              />
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.footer}>
        <button className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button className={styles.generateButton} onClick={onClose}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default GenerateSimulationForm;
