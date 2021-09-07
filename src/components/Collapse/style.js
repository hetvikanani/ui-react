import styled from "styled-components";

const CollapseStyle = styled.div`
  .ant-collapse {
    background-color: #FFFFFF;
    .ant-card-body {
      word-break: break-all;
    }
    .ant-collapse-item {
      border: none;
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      margin-bottom: 2em;
    }
    .ant-collapse-arrow {
      font-size: 15px !important;
      color: #C5C5C5;
      top: 1.4em !important;
    }
  }
`;

export { CollapseStyle };
