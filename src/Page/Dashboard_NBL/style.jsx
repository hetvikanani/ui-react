import styled from "styled-components";
const DashboardStyle = styled.div`
  .mainDiv {
    background: #f8f9fa;
  }
  .cardShadow {
    height: 45vh;
    margin: 1rem;
    border: 1px solid #e5e4e2;
    box-shadow: 0px 0px 50px rgb(0 0 0 / 20%);
  }

  .divCard1 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
  .inputCard {
    width: 48%;
  }
  .btnDiv {
    float: right;
    margin-top: 1rem;
  }

  .btnCard1 {
    background-color: #16548b;
    color: white;
  }
 

  .divCard2 {
    display: flex;
  }

  .iconDiv {
    width: 6%;
  }
  .icon {
    color: #16548b;
  }

  .pragraphDiv {
    width: 94%;
  }

  .card3Shadow {
    width: 127%;
    height: 84%;
    margin: 1rem;
    border: 1px solid #e5e4e2;
    box-shadow: 0px 0px 50px rgb(0 0 0 / 20%);
  }
  .inputDiv{
      margin-left:57rem;
  }
  .inputCard3{
      width:126%;
  }

  .footerCol {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
  }
  .footerDiv2 {
    margin-top: 1.8125rem;
    font-size: 14px;
    font-weight: 700;
  }
`;

export { DashboardStyle };
