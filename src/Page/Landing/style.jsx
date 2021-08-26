import styled from "styled-components";
const FarmStyle = styled.div`
  //navbar

  .RowNav {
    display: flex;
    align-items: center;
    height: 100% !important;
  }
  .navbar {
    width: 100vw;
    height: 60px;
    background-color: #183444;
    position: sticky;
    top: 0;
    z-index: 1;
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
    position: fixed;
    width: 200px;
    top: 5px;
    color: white;
  }
  .resource {
    position: fixed;
    width: 100px;
    top: 5px;
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

  //topbar

  .topBar-section {
    box-sizing: border-box;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODgwIDUwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMntmaWxsOiMxNDZhZmY7b3BhY2l0eTouMDN9PC9zdHlsZT48L2RlZnM+PHBhdGggZmlsbD0iI2Y1ZjhmZiIgZD0iTTAgMGgyODgwdjUwMEgweiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI4ODAgNTAwSDBWNTguODVDNTA1LjIxNCAyOTIuNjc4IDE1MjcuNjEyIDI0MC41NjQgMjg4MCAweiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI4ODAgNTAwSDBWMzA3LjFjMjU2LjY0My02MjMuMzE1IDI0MzEuMDM5IDE2NC41NjkgMjg4MCAxODguMjI2eiIvPjwvc3ZnPg==);
    background-color: #e9eff5;
    padding: 2rem 2rem 0rem 2rem;
    display: flex;
    width: 100%;

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

  .topBar-header {
    font-size: 2rem;
    font-weight: 500;
  }
  .topBar-btn {
    border-color: #f5a623;
    border-radius: 10px;
    margin-right: 10px;
  }
  .TopBar-side {
    margin-right: 8rem;
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

  .OrganizationDiv {
    padding: 0.5rem;
  }

  //about

  .aboutRow {
    width: 100%;
  }
  .verticalLine {
    margin-top: 1rem;
    border-left: 1px solid #e5e4e2;
    height: 25rem;
  }
  .divider {
    border: none;
    height: 20px;
    width: 100%;
    height: 50px;
    margin-top: 0;
    border-bottom: 1px solid white;
    box-shadow: 0 20px 3px -20px #333;
    margin: -50px auto 10px;
  }

  .viewLink {
    text-align: centre;
  }

  .SaveBtn {
    border-radius: 10px;
    background-color: #146aff;
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding-top: -1px;
  }
  .dotSpan {
    font-weight: 700;
    padding-left: 16px;
    font-size: 2rem;
  }
  //middle

  .middle-span {
    display: flex;
  }
  //comapany

  .company-section {
    margin-top: 2rem;
  }

  //footer

  .Box {
    background: #183444;
    width: 100%;
    padding-top: 1rem;
  }
  .Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
  }
  .footerHeading {
    color: white;
    letter-spacing: 1px;
    font-size: 178%;
    margin: 0 0.7rem;
  }
  .footerCol {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
  }
  .footerHead {
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
  }
  .footerDiv {
    color: #fff;
    margin-top: 12px;
    font-size: 14px;
    font-weight: 500;
  }
  .footerDiv2 {
    color: #fff;
    margin-top: 2.8125rem;
    font-size: 14px;
    font-weight: 500;
  }
  .footerDiv3 {
    color: #fff;
    padding-top: 7px;
  }
  .footerCol1 {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 7rem;
  }
  .footerEnd {
    color: white;
    font-weight: bold;
    margin-top: 4rem;
    margin-left: 23rem;
  }
  .footerEnd1 {
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    margin-left: 10rem;
  }

  .jadu {
    box-sizing: border-box;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODgwIDUwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMntmaWxsOiMxNDZhZmY7b3BhY2l0eTouMDN9PC9zdHlsZT48L2RlZnM+PHBhdGggZmlsbD0iI2Y1ZjhmZiIgZD0iTTAgMGgyODgwdjUwMEgweiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI4ODAgNTAwSDBWNTguODVDNTA1LjIxNCAyOTIuNjc4IDE1MjcuNjEyIDI0MC41NjQgMjg4MCAweiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI4ODAgNTAwSDBWMzA3LjFjMjU2LjY0My02MjMuMzE1IDI0MzEuMDM5IDE2NC41NjkgMjg4MCAxODguMjI2eiIvPjwvc3ZnPg==);
    background-color: #e9eff5;
    box-shadow: 0 7px 4px -4px #00000042;
    padding: 0;
    top: 60px;
    z-index: 2;
    position: fixed;
    height: 100px;
    /* padding: 2rem 2rem 0rem 2rem; */
    display: flex;
    width: 100%;
    border: white;
  }
`;

export { FarmStyle };
