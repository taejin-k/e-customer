import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import type { ButtonProps } from './button.types';

const baseArgs: ButtonProps = {
  size: 'large',
  variant: 'primary',
  disabled: false,
  children: '더보기',
  onClick: action('onClick'),
};

export default {
  title: 'ui/Button',
  component: Button,
  args: baseArgs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
