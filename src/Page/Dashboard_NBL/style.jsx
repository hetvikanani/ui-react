import styled from "styled-components";
import { size } from "../../components/Responsible/index";

const DashboardStyle = styled.div`
  .mainDiv {
    background: #f8f9fa;

    .cardShadow {
      height: 90%;
      margin: 1rem;
      border: 1px solid #e5e4e2;
      box-shadow: 0px 0px 50px rgb(0 0 0 / 20%);

      .divCard1 {
        display: flex;
        justify-content: space-between;

        .inputCard {
          margin: 1rem 1rem 1rem 0;
        }
      }
      .btnDiv {
        float: right;
        margin-top: 1rem;

        .btnCard1 {
          background-color: #16548b;
          color: white;
        }
      }
      .divCard2 {
        display: flex;

        .iconDiv {
          width: 6%;
          .icon {
            color: #16548b;
          }
        }
       
      }
    }
    .card3Shadow {
      height: 84%;
      margin: 1rem;
      border: 1px solid #e5e4e2;
      box-shadow: 0px 0px 50px rgb(0 0 0 / 20%);

      .headerDiv {
        display: flex;
        justify-content: space-between;

       
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
  }
  @media ${size["tablet-sm-max"]} {
    .headerDiv {
      display: block !important;
      width: 45%;
    }
`;

export { DashboardStyle };
