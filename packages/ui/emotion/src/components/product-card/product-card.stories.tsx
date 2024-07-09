import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { ProductCard } from './product-card';
import type { ProductCardProps } from './product-card.types';

const baseArgs: ProductCardProps = {
  productName: '스탠리 클래식 런치박스',
  priceText: '75,000원',
  imageUrl:
    'https://img.29cm.co.kr/next-product/2023/07/31/bb40f6ce78e44627bfc1c46ba5246ab3_20230731114922.jpg?width=400',
  availableCoupon: true,
  inCart: false,
  onClick: action('onClick'),
};

export default {
  title: 'ui/ProductCard',
  component: ProductCard,
  args: baseArgs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProductCard>;

type Story = StoryObj<typeof ProductCard>;

type CustomArgsStory = ComponentProps<typeof ProductCard> & { productListCount?: number };

export const Default: Story = {};

export const ProductCardList: StoryObj<CustomArgsStory> = {
  args: {
    productListCount: 4,
  },
  render: ({ productListCount = 2, ...props }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {[...Array(productListCount)].map((_, index) => (
        <ProductCard key={index} {...props} />
      ))}
    </div>
  ),
};
