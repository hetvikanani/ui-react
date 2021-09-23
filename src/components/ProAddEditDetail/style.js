import styled from "styled-components";
import { Theme } from "App/theme";

const ProAddEditStyle = styled.div`
h2{
  margin-top: 1em;
}
.field {
    margin-top: 1em;
    label {
      font-size: 16px;
    }    
    .ant-upload {
      font-size: 1.5em;
      padding-left: 1em;
      display: block;
      color: ${Theme.mainColor};
      max-width: 10em;
      cursor: pointer;
    }  
  }

`;
export { ProAddEditStyle };
