import React, { type FC, type ReactElement } from "react";

import { type ComponentMeta } from "@storybook/react";

import GenerateSimulationForm, {
  type GenerateSimulationFormProps,
} from "./GenerateSimulationForm";

const GenerateSimulationFormStory: ComponentMeta<
  typeof GenerateSimulationForm
> = {
  title: "GenerateSimulationForm",
  component: GenerateSimulationForm,
};

interface GenerateSimulationFormTemplateProps
  extends FC<GenerateSimulationFormProps> {
  args?: Partial<GenerateSimulationFormProps>;
}

const GenerateSimulationFormTemplate: GenerateSimulationFormTemplateProps = (
  args: GenerateSimulationFormProps
): ReactElement => <GenerateSimulationForm {...args} />;

export const Form = GenerateSimulationFormTemplate.bind({});

export default GenerateSimulationFormStory;
