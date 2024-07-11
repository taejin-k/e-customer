import styled from '@emotion/styled';
import { memo, type ReactNode } from 'react';
import { Text } from '../../components';
import { HeaderMenuList } from './header-menu-list';

type HeaderProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  title?: string;
  cartCount?: number;
};

export const Header = memo(({ prefix, suffix, title, cartCount }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <HeaderMenuListBox>
          <LogoBox>{prefix !== undefined ? prefix : <LogoLink href="http://localhost:3000" />}</LogoBox>
          {title ? (
            <Text typography="text-xl-bold" color="primary">
              {title}
            </Text>
          ) : null}
          <HeaderMenuList suffix={suffix} cartCount={cartCount} />
        </HeaderMenuListBox>
      </HeaderBox>
    </HeaderContainer>
  );
});

const HeaderContainer = styled.div`
  margin: 0 auto;
  min-width: 320px;
  padding-top: 50px;

  @supports (position: sticky) or (position: -webkit-sticky) {
    position: sticky;
    padding-top: 0;
    top: 0;
    z-index: 10;
  }
`;

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-width: 320px;
  height: 44px;
  z-index: 10;
  transform: translateY(0);
  transition: transform 0.3s;
  background: white;

  @supports (position: sticky) or (position: -webkit-sticky) {
    position: relative;
  }
`;

const HeaderMenuListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(0);
  transition: transform 0.3s;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 44px;
  padding-left: 20px;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

const LogoLink = styled.a`
  display: inline-block;
  overflow: hidden;
  background: url('https://img.29cm.co.kr/next-next_attach/2023/05/24/244dfcad0e1c4490b2a7d6fd85aa20fe_20230524160435.png')
    no-repeat 0 0;
  background-size: 60px 16px;
  vertical-align: top;
  line-height: 100em;
  width: 60px;
  height: 16px;
`;
