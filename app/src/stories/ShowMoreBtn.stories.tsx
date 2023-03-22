import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ShowMoreBtn } from "../components/Elements/Buttons/ShowMoreBtn";

export default {
  title: "ShowMoreBtn",
  component: ShowMoreBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    noBorder: { description: "Btn with Border or" },
  },
} as ComponentMeta<typeof ShowMoreBtn>;

const Template: ComponentStory<typeof ShowMoreBtn> = (args) => (
  <ShowMoreBtn {...args} />
);

export const WithBorder = Template.bind({});
export const NoneBorder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithBorder.args = {
  noBorder: true,
};
NoneBorder.args = {
  noBorder: false,
};
