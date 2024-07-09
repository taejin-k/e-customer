import styled from '@emotion/styled';

export const FooterCompanyInfo = () => (
  <Container>
    <Title>대표이사</Title>
    <Description>한문일</Description>
    <Title>사업자등록번호</Title>
    <Description>211-88-79575</Description>
    <Title>주소</Title>
    <Description>서울특별시 성동구 아차산로 13길 11, 1층 (성수동2가, 무신사캠퍼스 엔1)</Description>
    <Title>전화번호</Title>
    <Description>1644-0560</Description>
    <Title>이메일</Title>
    <Description>customer@29cm.co.kr</Description>
    <Title>통신판매업신고</Title>
    <Description>2022-서울성동-01952</Description>
    <Title>개인정보 보호책임자</Title>
    <Description>이인섭</Description>
    <Title>호스팅서비스</Title>
    <Description>(주)무신사</Description>
    <LongDescription>
      일부 상품의 경우 29CM는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수
      있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
    </LongDescription>
  </Container>
);

const Container = styled.dl`
  display: block;
  padding: 8px 0 12px;
  font-size: 12px;
  line-height: 20px;
  color: #646464;
`;

const Title = styled.dt`
  float: left;
  margin-right: 10px;
`;

const Description = styled.dd`
  padding-bottom: 4px;
  font-weight: 300;
  color: #9b9b9b;
`;

const LongDescription = styled.p`
  padding: 6px 0 4px;
  line-height: initial;
`;
