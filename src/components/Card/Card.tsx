import { type PropsWithChildren, type ReactElement } from "react";

import classNames from "classnames";

import styles from "./Card.module.scss";

export interface CardProps {
  className?: string;
  elevation?: number;
  title: string;
}

const Card = ({
  children,
  className,
  elevation = 0,
  title,
}: PropsWithChildren<CardProps>): ReactElement => (
  <div
    className={classNames(
      styles.container,
      {
        [styles.elevation0]: elevation === 0,
        [styles.elevation1]: elevation === 1,
      },
      className
    )}
  >
    <div className={styles.title}>{title}</div>
    {children}
  </div>
);

export default Card;
