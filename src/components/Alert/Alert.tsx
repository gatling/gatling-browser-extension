import React, { type PropsWithChildren, type ReactElement } from "react";

import classNames from "classnames";

import styles from "./Alert.module.scss";

export interface AlertProps {
  className?: string;
  variant: "info" | "danger" | "success" | "warning";
}

const Alert = ({ children, className, variant }: PropsWithChildren<AlertProps>): ReactElement => (
  <div role="alert" className={classNames(styles.container, styles[variant], className)}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Alert;
