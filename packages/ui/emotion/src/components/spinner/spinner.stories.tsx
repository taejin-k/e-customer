import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';
import type { SpinnerProps } from './spinner.types';

const baseArgs: SpinnerProps = {
  size: 'medium',
  color: 'default',
};

export default {
  title: 'ui/Spinner',
  component: Spinner,
  args: baseArgs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
