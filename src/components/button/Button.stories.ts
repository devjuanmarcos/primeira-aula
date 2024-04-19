import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Button",
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    text: "Button",
    variant: "tertiary",
  },
};
