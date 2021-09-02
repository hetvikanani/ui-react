import styled from "styled-components";
// import { size } from "../../components/Responsible/index";

const SupportStyle = styled.div`
  .mainDiv {
    width: 100%;
    margin: 0 auto;
    max-width: 415px;
    padding-top: 5%;

    .cardShadow {
      border-radius: 10px;
      border: 1px solid #e5e4e2;

      .parentDiv {
        margin: 1rem;
      }

      .btnDiv {
        float: right;
        margin: 1rem 0 2rem 0;

        .button {
          background-color: #16548b;
          color: white;
        }
      }
    }
  }
`;

export { SupportStyle };
