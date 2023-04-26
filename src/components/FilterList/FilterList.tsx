import {
  type ChangeEvent,
  type ReactElement,
  useCallback,
  useState,
} from "react";

import classNames from "classnames";

import styles from "./FilterList.module.scss";

const INITIAL_VALUE: string[] = [];

const NO_STATIC_RESOURCES = [
  ".*.js",
  ".*.css",
  ".*.gif",
  ".*.jpeg",
  ".*.jpg",
  ".*.ico",
  ".*.woff",
  ".*.woff2",
  ".*.(t|o)tf",
  ".*.png",
  ".*.svg",
  ".*detectportal.firefox.com.*",
];

export interface FilterListProps {
  onClickStaticResources?: () => void;
  type: "deny" | "allow";
}

const FilterList = ({
  onClickStaticResources,
  type,
}: FilterListProps): ReactElement => {
  const [filters, setFilters] = useState<string[]>(INITIAL_VALUE);

  const handleAdd = useCallback(() => {
    setFilters([...filters, ""]);
  }, [filters]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, rowIndex: number): void => {
      const updatedTableau = [...filters];
      updatedTableau[rowIndex] = event.target.value;
      setFilters(updatedTableau);
    },
    [filters]
  );

  const handleClear = useCallback(() => {
    setFilters(INITIAL_VALUE);
  }, []);

  const handleDelete = useCallback(
    (rowIndex: number) => {
      setFilters(filters.filter((_, index) => index !== rowIndex));
    },
    [filters]
  );

  const handleNoStaticResources = useCallback(() => {
    setFilters([...filters, ...NO_STATIC_RESOURCES]);
    onClickStaticResources?.();
  }, [filters, onClickStaticResources]);

  return (
    <table className={classNames(styles.container)}>
      <thead>
        <tr>
          <th> {type === "deny" ? "Deny List" : "Allow List"}</th>
        </tr>
      </thead>
      <tbody>
        {filters.map((filter, index) => (
          <tr key={index}>
            <td>
              <input
                name="inputValue"
                value={filter}
                onChange={(event): void => handleChange(event, index)}
              />
              <button onClick={(): void => handleDelete(index)}>-</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className={styles.footer}>
            <button onClick={handleAdd}>+</button>

            <button onClick={handleClear}>Clear</button>
            {type === "deny" && (
              <button onClick={handleNoStaticResources}>
                No static resources
              </button>
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default FilterList;
