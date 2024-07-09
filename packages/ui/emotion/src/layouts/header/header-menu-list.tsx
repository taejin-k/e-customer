import styled from '@emotion/styled';
import { memo, type ReactNode } from 'react';

type HeaderMenuListProps = {
  suffix?: ReactNode;
  cartCount?: number;
};

export const HeaderMenuList = memo(({ suffix, cartCount = 0 }: HeaderMenuListProps) => (
  <HeaderMenuListContainer>
    <HeaderMenuItem>
      {suffix !== undefined ? (
        suffix
      ) : (
        <HeaderMenuLink href="http://localhost:3001">
          <HeaderCartImage />
          {cartCount > 0 ? <HeaderCartCountText>{cartCount}</HeaderCartCountText> : null}
        </HeaderMenuLink>
      )}
    </HeaderMenuItem>
  </HeaderMenuListContainer>
));

const HeaderMenuListContainer = styled.ul`
  position: absolute;
  padding-right: 3px;
  padding-top: 3px;
  top: 0;
  right: 0;
  vertical-align: top;
`;

const HeaderMenuItem = styled.li`
  display: inline-block;
  vertical-align: top;
`;

const HeaderMenuLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const HeaderCartImage = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background: url(https://img.29cm.co.kr/next29cm/sp_m_29cm.png);
  background-size: 48px 48px;
  background-position: -24px 0px;
`;

const HeaderCartCountText = styled.span`
  position: absolute;
  top: 5px;
  right: 2px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  background: red;
  text-align: center;
  color: white;
  border-radius: 13px;
`;
