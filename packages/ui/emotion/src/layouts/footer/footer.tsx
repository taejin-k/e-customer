import styled from '@emotion/styled';
import { FooterBottom } from './footer-bottom';
import { FooterCompanyInfo } from './footer-company-info';
import { FooterDocumentation } from './footer-documentation';
import { FooterMenu } from './footer-menu';
import { useFooterService } from './footer.hooks';

export const Footer = () => {
  const { open, handleOpenToggle } = useFooterService();

  return (
    <FooterContainer>
      <FooterDropdownButton type="button" open={open} onClick={handleOpenToggle}>
        (주)무신사 사업자 정보
      </FooterDropdownButton>
      {open && <FooterCompanyInfo />}
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

const FooterDropdownButton = styled.button<{ open: boolean }>`
  display: block;
  position: relative;
  padding-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  color: #9b9b9b;

  &:after {
    display: inline-block;
    position: absolute;
    top: 3px;
    width: 7px;
    height: 7px;
    margin-left: 10px;
    transform: rotate(45deg);
    border-right: 1px solid #9b9b9b;
    border-bottom: 1px solid #9b9b9b;
    vertical-align: sub;
    content: '';
    box-sizing: content-box;

    ${({ open }) =>
      open &&
      `
        top: 7px;
        border: 1px solid #9b9b9b;
        border-right: none;
        border-bottom: none;
      `}
  }
`;
