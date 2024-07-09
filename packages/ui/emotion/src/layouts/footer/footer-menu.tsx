import styled from '@emotion/styled';

const items = [
  {
    text: '29CM 소개',
    linkUrl: 'https://www.29cm.co.kr/home/about',
  },
  {
    text: '인재채용',
    linkUrl: 'https://29cm.career.greetinghr.com/',
  },
  {
    text: '마케팅, 입점, 대량 주문 문의',
    linkUrl: 'https://customer.29cm.co.kr/contact-us',
  },
];

export const FooterMenu = () => (
  <Container>
    {items.map((item) => (
      <StyledLink key={item.text} href={item.linkUrl}>
        {item.text}
      </StyledLink>
    ))}
  </Container>
);

const Container = styled.div`
  margin: 8px 0 25px;
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
