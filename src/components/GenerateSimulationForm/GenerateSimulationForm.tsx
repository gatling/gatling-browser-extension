import { type ReactElement, useCallback, useState } from "react";

import Card from "@src/components/Card";
import FilterList from "@src/components/FilterList";

import styles from "./GenerateSimulationForm.module.scss";

export interface GenerateSimulationFormProps {
  onClose: () => void;
}

const GenerateSimulationForm = ({
  onClose,
}: GenerateSimulationFormProps): ReactElement => {
  const [enableFilters, setEnableFilters] = useState<boolean>(false);
  const handleClickEnableFilters = useCallback((value: boolean) => {
    setEnableFilters(value);
  }, []);
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
