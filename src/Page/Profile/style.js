import styled from "styled-components";
import { size } from "../../components/Responsible/index";
import { Theme } from "../../components/theme";

const ProfileStyle = styled.div`
 .optionui {
    border-radius: 4px;
    margin: 5px;
    color: #fff;
    background-color: ${Theme.mainColor};
    padding: 2px 5px;
    width: fit-content;
    @media ${size["laptop-max"]} {
      display: block;
    }
    .anticon {
      margin-left: 5px;
    }

  }
  .button{
    display:flex;
    margin-top: 1rem;
    justify-content: end;
  }

`;

export { ProfileStyle };
