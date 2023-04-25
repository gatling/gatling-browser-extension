import React, { type FC, type ReactElement } from "react";

import { type ComponentMeta } from "@storybook/react";

import { LOREM_IPSUM } from "@src/constants/storybook";

import Card, { type CardProps } from "./Card";

const CardStory: ComponentMeta<typeof Card> = {
  title: "Card",
  component: Card,
  args: {
    title: "Title",
    children: LOREM_IPSUM,
  },
  argTypes: {
    title: {
      control: { type: "string" },
    },
  },
};

interface CardTemplateProps extends FC<CardProps> {
  args?: Partial<CardProps>;
}

const CardTemplate: CardTemplateProps = (args: CardProps): ReactElement => (
  <Card {...args} />
);

export const Info = CardTemplate.bind({});
Info.args = {
  title: "Title",
};

export default CardStory;
