import styled from "styled-components";

const BasicDetailStyle = styled.div`
  display: flex;

  .container {
    background: #f8f9fa;
    height: 100vh;
    overflow-y: auto;
    width: 100%;

    .allDiv {
      padding: 2em 1em 1em;

      .header {
        font-weight: 500;
        color: #16548b;
      }
      .headerCard {
        color: #16548b;
      }

      .form-div {
        .cardDiv {
          margin-top: 2em;
          .label {
            font-size: 15px;
            font-weight: 700;
            color: #505458;
          }
          .switch {
            color: #18558a;
            .ant-switch {
              margin: 1em;
            }
          }
        }
      }
      .btn-div {
        margin-top: 2em;
        display: flex;
        justify-content: flex-end;

        .submitBtn {
          margin-right: 3em;
        }
      }
    }
  }

  .ant-upload {
    font-size: 2em;
    padding-left: 1em;
    display: block;
    color: #18558a;
  }
`;

export { BasicDetailStyle };
