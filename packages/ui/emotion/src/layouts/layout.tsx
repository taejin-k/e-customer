import styled from '@emotion/styled';
import { memo, type ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

type CommonLayoutProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  title?: string;
  cartCount?: number;
  children: ReactNode;
};

export const CommonLayout = memo(({ prefix, suffix, title, cartCount, children }: CommonLayoutProps) => (
  <RootContainer>
    <Header prefix={prefix} suffix={suffix} title={title} cartCount={cartCount} />
    <Main>{children}</Main>
    <Footer />
  </RootContainer>
));

const RootContainer = styled.div`
  position: relative;
  max-width: 385px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  box-shadow:
    12px 0 15px -4px rgba(0, 0, 0, 0.1),
    -12px 0 8px -4px rgba(0, 0, 0, 0.1);
`;
