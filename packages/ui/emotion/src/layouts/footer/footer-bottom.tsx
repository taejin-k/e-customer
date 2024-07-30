import styled from '@emotion/styled';

export const FooterBottom = () => (
  <FooterBottomContainer>
    <SocialLink
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/1830bce606f3414f8ac62ecf31c387e3_20230214020455"
    >
      <Text>instagram</Text>
    </SocialLink>
    <SocialLink
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/7eb922eab8794352a0e26f701a4730a7_20230214020512"
    >
      <Text>youtube</Text>
    </SocialLink>
    <SocialLink
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/be0d982f48f748c489e81247df619681_20230214020602"
    >
      <Text>eCustomer iOS app download</Text>
    </SocialLink>
    <SocialLink
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/47fffa1ac78348d9a7b6de7c64f30510_20230214020617"
    >
      <Text>eCustomer Android app download</Text>
    </SocialLink>
  </FooterBottomContainer>
);

const FooterBottomContainer = styled.section`
  position: relative;
  letter-spacing: -4px;
`;

const SocialLink = styled.a<{ backgroundUrl: string }>`
  display: inline-block;
  overflow: hidden;
  background: ${({ backgroundUrl }) => `url('https://img.29cm.co.kr/${backgroundUrl}.png')`};
  background-size: 40px;
  vertical-align: top;
  line-height: 100em;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

const Text = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  font-size: 1px;
  line-height: 100px;
  white-space: nowrap;
`;
