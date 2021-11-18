import styled from "styled-components";

interface EmojiProps {
  name: string;
}

const Emoji: React.FC<EmojiProps> = ({ children, name }) => {
  return (
    <Wrapper role="img" aria-label={name}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

export default Emoji;
