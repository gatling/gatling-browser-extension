import React, { type FC, type ReactElement } from "react";

import { type ComponentMeta } from "@storybook/react";

import { LOREM_IPSUM } from "@src/constants/storybook";

import Alert, { type AlertProps } from "./Alert";

const AlertStory: ComponentMeta<typeof Alert> = {
  title: "Alert",
  component: Alert,
  args: {
    variant: "info",
    children: LOREM_IPSUM,
  },
  argTypes: {
    variant: {
      options: ["info", "warning", "danger", "success"],
      control: { type: "select" },
    },
  },
};

interface AlertTemplateProps extends FC<AlertProps> {
  args?: Partial<AlertProps>;
}

const AlertTemplate: AlertTemplateProps = (args: AlertProps): ReactElement => (
  <Alert {...args} />
);

export const Info = AlertTemplate.bind({});
Info.args = {
  variant: "info",
};

export default AlertStory;
