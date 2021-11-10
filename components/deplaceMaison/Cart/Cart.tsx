import UnstyledButton from "@/components/UnstyledButton";
import styled from "styled-components";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  return (
    <Wrapper>
      <UnstyledButton>Cart 0</UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 1.5vw;
  right: 2vw;
`;

export default Cart;
