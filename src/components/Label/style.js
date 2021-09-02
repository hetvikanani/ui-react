import styled from "styled-components";
const FormWrapper = styled.div`
  label {
    margin: 1em 0;
    font-size: 15px;
    font-weight: 500;
    color:black;
    letter-spacing: 0.05em;
    line-height: 15px;
    display: block;
    &.empty {
      color: #e81c1c;
    }
  }
`;
export { FormWrapper };
