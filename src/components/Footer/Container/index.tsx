import styled from "styled-components";
import FooterContent from "../Content";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--rodape);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent />
    </FooterContainer>
  );
}
