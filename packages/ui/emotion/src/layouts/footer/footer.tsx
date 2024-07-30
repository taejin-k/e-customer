import styled from '@emotion/styled';
import { FooterBottom } from './footer-bottom';
import { FooterDocumentation } from './footer-documentation';
import { FooterMenu } from './footer-menu';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterDocumentation />
      <FooterMenu />
      <FooterBottom />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: block;
  padding: 36px 20px 104px;
  background: black;
  font-weight: 400;
`;
