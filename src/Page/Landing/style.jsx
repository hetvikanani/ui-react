import styled from "styled-components";
const FarmStyle = styled.div`
  .RowNav {
    display: flex;
    align-items: center;
    height: 100% !important;
  }
  .navbar {
    width: 100vw;
    height: 60px;
    background-color: #183444;
  }
  .header {
    color: white;
    letter-spacing: 1px;
    font-size: 166%;
    margin: 0 0.7rem;
  }
  .ant-menu {
    background: #183444;
    color: white;
  }

  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
  }
  .ant-menu-submenu-arrow {
    color: white;
  }

  .advanceSearch {
    width: 65%;
  }

  .resource .ant-menu-submenu .ant-menu-submenu-title {
    padding: 0 !important;
  }

  .BtnTry {
    background: #f5a623;
    border: none;
  }
  .BtnLog {
    background: #183444;
    border: #183444;
    color: white;
    font-weight: bold;
  }

  .topBar-section {
    padding: 2rem 2rem 0rem 2rem;
    display: flex;
    width: 100%;
    background-color: #e9f0ff;
    border: white;
  }
  .topBar-img {
    width: 10%;
  }
  .topBar-first {
    width: 90%;
  }
  .topBar-first > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topBar-first-heading {
    margin: 0rem 0rem 1rem 2rem;
  }

  .ant-tabs-nav {
    margin: -2px !important;
  }
  .ant-tabs-tab {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    padding: 15px 30px !important;
    margin: 0 2rem !important;
    background-color: #e9f0ff !important;
    border: #e9f0ff !important;
  }

  .ant-tabs-tab-active {
    border-bottom: none;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    background-color: white !important;
  }

  .aboutRow {
    width: 100%;
    height: 70vh;
  }
  .verticalLine {
    border-left: 1px solid red;
    height: 26rem;
  }
`;

export { FarmStyle };
