import { PostsBtn } from "../components/Elements/Buttons/PostsBtn";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
export default {
  title: "Posts & Blogs bytton",
  component: PostsBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isActiveBtn: { description: "show active btn or not (with red color)" },
    onClick: {
      description: "callback func",
      defaultValue: () => console.log("/navigate"),
    },
  },
} as ComponentMeta<typeof PostsBtn>;

const Template: ComponentStory<typeof PostsBtn> = (args) => (
  <PostsBtn {...args} />
);

export const PostsBtnActive = Template.bind({});
export const PostsBtnNoActive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PostsBtnActive.args = {
  isActiveBtn: "PostsBtn",
  onClick: action("Iam active now"),
};
PostsBtnNoActive.args = {
  isActiveBtn: "BlogsBtn",
  onClick: action("Iam not active"),
};
