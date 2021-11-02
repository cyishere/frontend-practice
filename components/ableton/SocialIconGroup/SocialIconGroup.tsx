import styled from "styled-components";
import { Facebook, Twitter, YouTube, Instagram } from "../Assets";

const SocialIconGroup: React.FC = () => {
  return (
    <Wrapper>
      <FacebookIcon href="#">
        <Facebook />
      </FacebookIcon>
      <TwitterIcon href="#">
        <Twitter />
      </TwitterIcon>
      <YouTubeIcon href="#">
        <YouTube />
      </YouTubeIcon>
      <InstagramIcon href="#">
        <Instagram />
      </InstagramIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Icon = styled.a`
  display: block;
  width: 40px;
  height: 40px;
`;

const FacebookIcon = styled(Icon)`
  background-color: #3477f2;
`;

const TwitterIcon = styled(Icon)`
  background-color: #1da1f2;
`;

const YouTubeIcon = styled(Icon)`
  background-color: #ff001d;
`;

const InstagramIcon = styled(Icon)`
  background-color: #f77737;
`;

export default SocialIconGroup;
