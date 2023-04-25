import { type PropsWithChildren, type ReactElement } from "react";

import classNames from "classnames";

import styles from "./Card.module.scss";

export interface CardProps {
  className?: string;
  title: string;
}

const Card = ({
  children,
  className,
  title,
}: PropsWithChildren<CardProps>): ReactElement => (
  <div className={classNames(styles.container, className)}>
    <div className={styles.title}>{title}</div>
    {children}
  </div>
);

export default Card;
