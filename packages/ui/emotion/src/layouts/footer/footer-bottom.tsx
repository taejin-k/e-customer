import styled from '@emotion/styled';

export const FooterBottom = () => (
  <FooterBottomContainer>
    <SocialLink
      href="https://instagram.com/29cm.official"
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/1830bce606f3414f8ac62ecf31c387e3_20230214020455"
    >
      <Text>instagram</Text>
    </SocialLink>
    <SocialLink
      href="https://www.youtube.com/@29CM"
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/7eb922eab8794352a0e26f701a4730a7_20230214020512"
    >
      <Text>youtube</Text>
    </SocialLink>
    <SocialLink
      href="https://apps.apple.com/us/app/29cm/id789634744"
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/be0d982f48f748c489e81247df619681_20230214020602"
    >
      <Text>29CM iOS app download</Text>
    </SocialLink>
    <SocialLink
      href="https://play.google.com/store/apps/details?id=com.the29cm.app29cm"
      target="_blank"
      backgroundUrl="next-next_attach/2023/02/14/47fffa1ac78348d9a7b6de7c64f30510_20230214020617"
    >
      <Text>29CM Android app download</Text>
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
