import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';
import type { TextProps } from './text.types';

const baseArgs: TextProps = {
  children: '우리는 고객의 더 나은 선택을 돕는다',
  typography: 'title-xs-bold',
  color: 'primary',
};

export default {
  title: 'ui/Text',
  component: Text,
  args: baseArgs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

Default.args = {
  typography: 'title-xs-bold',
  color: 'primary',
};
