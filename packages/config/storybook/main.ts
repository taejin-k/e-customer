import type { StorybookConfig } from '@storybook/nextjs';

export const baseNextJsStorybookConfig: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../public'],
  typescript: { reactDocgen: 'react-docgen-typescript' },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
