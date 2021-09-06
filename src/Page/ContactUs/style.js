import styled from "styled-components";
import { size } from "../../components/Responsible/index";

const ContactUsStyle = styled.div`
  .mainDiv {
    background: #f8f9fa;

    ul {
      list-style-type: none;
    }

    .cardShadow {
      height: 90%;
      margin: 1rem;
      border: 1px solid #e5e4e2;
      box-shadow: 0px 0px 50px rgb(0 0 0 / 20%);

      .divCard {
        display: flex;
        justify-content: space-between;

        .inputCard {
          margin: 10px 10px 15px 6px;
        }
      }
      // .textareaDiv {
      //   margin: 10px 10px 15px 6px;
      // }
      .empty {
        margin: 10px 2px 5px 8px;
      }

      .btnDiv {
        float: right;
        margin-top: 1rem;

        .btnCard1 {
          background-color: #16548b;
          color: white;
        }
      }
      .divCardHead {
        display: flex;

        .iconDiv {
          width: 6%;
          .icon {
            color: #16548b;
          }
        }
      }
    }
    .cardfooterShadow {
      height: 84%;
      margin: 1rem;
      border: 1px solid #e5e4e2;
      box-shadow: 0px 0px 50px rgb(0 0 0 / 20%);

      .headerDiv {
        display: flex;
        justify-content: space-between;
        @media ${size["tablet-sm-max"]} {
          display: block !important;
          width: 45%;
        }
      }
    }
    .footerCol {
      display: flex;
      flex-direction: column;
      text-align: left;
      .footerDiv2 {
        margin-top: 1.8125rem;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
`;

export { ContactUsStyle };
