import styled from "styled-components";

type StyledInputProps = {
  err?: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  width: 130px;
  height: 35px;
  border: ${(props) => (props.err ? "1px solid #e00000" : "1px solid #828282")};
  text-align: center;
  outline: none;
  border-radius: 8px;
`;
