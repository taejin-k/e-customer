import { vars } from '@29cm/ui-tokens';
import type { ElementType, PropsWithChildren } from 'react';

export type TypographyType = keyof typeof vars.$semantic.typography;

export type ColorType = keyof typeof vars.$semantic.color.text;

export type TextProps = PropsWithChildren<{
  className?: string;
  as?: ElementType;
  color: ColorType;
  typography: TypographyType;
  lineLimit?: number;
  align?: 'left' | 'center' | 'right';
}>;
