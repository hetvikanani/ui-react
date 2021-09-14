import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";
const WalletStyle = styled.div`
  display: flex;
  .container {
    background: #f8f9fa;
    height: 100vh;
    overflow-y: auto;
    width: 100%;
    .allDiv {
      padding: 2em 1em 1em;
      .box {
        box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
        border-radius: 0 15px 15px 0;
        border-bottom: 5px solid #ffff;
        height: 8em;
        padding: 10px;
        :hover {
          border-bottom: 5px solid #16548b;
        }
        .ant-card-body {
          padding: 0;
          margin: 0.5em 0;
          .mark {
            text-align: end !important;
            font-weight: 700;
          }
          .name {
            font-weight: revert;
            color: ${Theme.mainColor};
          }
        }
        .input-div {
          display: flex;
          .inputBox {
            // width: 63%;
          }
        }
      }
      .boxDiv {
        margin-top: 3em;
        padding: 1%;
        box-shadow: 0 1px 3px rgb(0, 0, 0, 0.12), 0 1px 2px rgb(0, 0, 0, 0.24);
        .ant-input-number {
          width: 52px;
        }
        .table-div {
          margin-top: 1em;
        }
        .show {
          margin-top: 4px;
          font-size: 1em;
          font-weight: 600;
          padding-right: 5px;
        }
        .entries {
          margin-top: 4px;
          font-size: 1em;
          font-weight: 600;
          padding-left: 5px;
        }
        .last-para {
          font-weight: 600;
          margin-top: 16px;
        }
        .inputNum-div {
          margin: 25px 0px 0px 0px;
          display: flex;
          justify-content: space-between;
          @media ${size["tablet-sm-max"]} {
            display: block !important;
            width: 45%;
          }
          .serachBox {
            // width: 16%;
            margin-left: auto;
            display: flex;
            @media ${size["tablet-sm-max"]} {
              // display: block !important;
              width: 10em;
            }
          }
        }
      }
    }
  }
`;
export { WalletStyle };
