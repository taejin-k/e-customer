import styled from '@emotion/styled';

export const FooterDocumentation = () => (
  <Container>
    <StyledLink href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118879575&apv_perm_no=">사업자정보확인</StyledLink>
    <StyledLink href="https://www.29cm.co.kr/home/private">
      <strong>개인정보처리방침</strong>
    </StyledLink>
    <StyledLink href="https://www.29cm.co.kr/home/agreement">이용약관</StyledLink>
    <StyledLink href="https://www.29cm.co.kr/mypage/cscenter/faq-cs/faq-list">FAQ</StyledLink>
  </Container>
);

const Container = styled.div`
  padding-top: 17px;
  border-top: 1px solid #333232;
`;

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
