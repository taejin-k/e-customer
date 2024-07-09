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
            <HeaderTitle>
              <Text typography="title-m-bold" color="primary">
                {title}
              </Text>
            </HeaderTitle>
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
  height: 50px;
  padding: 8px 0;
  z-index: 10;
  transform: translateY(0);
  transition: transform 0.3s;
  background: white;

  @supports (position: sticky) or (position: -webkit-sticky) {
    position: relative;
  }
`;

const HeaderMenuListBox = styled.div`
  position: relative;
  width: 100%;
  transform: translateY(0);
  transition: transform 0.3s;
`;

const HeaderTitle = styled.span`
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 72px;
  display: flex;
  padding: 0;
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
  width: 72px;
  height: 18px;
`;
