import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { memo, type ReactNode } from 'react';

type HeaderMenuListProps = {
  suffix?: ReactNode;
  cartCount?: number;
};

export const HeaderMenuList = memo(({ suffix, cartCount }: HeaderMenuListProps) => (
  <HeaderMenuListContainer>
    <HeaderMenuItem>
      {suffix !== undefined
        ? suffix
        : cartCount !== undefined && (
            <HeaderMenuLink href="http://localhost:3001">
              <HeaderCartImage />
              {cartCount > 0 ? <HeaderCartCountText>{cartCount}</HeaderCartCountText> : null}
            </HeaderMenuLink>
          )}
    </HeaderMenuItem>
  </HeaderMenuListContainer>
));

const HeaderMenuListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 0;
  right: 0;
  height: 44px;
  padding-right: 20px;
  vertical-align: top;
`;

const HeaderMenuItem = styled.li`
  display: inline-block;
  vertical-align: top;
`;

const HeaderMenuLink = styled.a`
  position: relative;
`;

const HeaderCartImage = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  background: url(https://img.29cm.co.kr/next29cm/sp_m_29cm.png);
  background-size: 44px 44px;
  background-position: -22px 0px;
`;

const HeaderCartCountText = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  background: ${vars.$semantic.color.fill.accent};
  text-align: center;
  color: white;
  border-radius: 13px;
`;
