import styled from '@emotion/styled';

export const FooterDocumentation = () => (
  <>
    <StyledLink>사업자정보확인</StyledLink>
    <StyledLink>
      <strong>개인정보처리방침</strong>
    </StyledLink>
    <StyledLink>이용약관</StyledLink>
    <StyledLink>FAQ</StyledLink>
  </>
);

const StyledLink = styled.a`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: #9b9b9b;

  strong {
    font-weight: 700;
  }

  &:not(:last-of-type):after {
    margin: 0 10px;
    display: inline-block;
    width: 1px;
    height: 12px;
    background: #333232;
    vertical-align: top;
    content: '';
  }
`;
