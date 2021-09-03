import styled from "styled-components";
// import { size } from "../../components/Responsible/index";

const BlogStyle = styled.div`
  .mainDiv {
    margin: 1rem;
  }
  .scroll-bar {
    height: 90vh;
    overflow-y: auto;
  }
  .mainCard {
    border-radius: 10px;
    border: 1px solid #e5e4e2;
  }

  .parentCard {
    border-radius: 20px;
    border: 1px solid #e5e4e2;
    // box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
    box-shadow:0px 0px 10px rgb(0 0 0 / 10%);
  }

  .parentCard:hover{
    box-shadow: 0 0 10px #868585;
  }
  .iconDiv {
    display: flex;
    justify-content: flex-start;
    color: gray;
  }
  .icon{
    padding-right:10px
    
  }
  .icon2{
    padding-right:10px;
    padding-left:10px;
    
  }
  .button {
    border: none;
    color: #16548b;
    font-weight: 500;
  }

  .videoCard1 {
   
     .ant-card-body {
      padding: 0 !important;
    }
    border: 5px solid #fff;
    overflow: hidden;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    border-radius: 10px;
    /* height: 33vh; */
   
    margin-bottom: 1rem;
    > div {
      img {
        border-radius: 20px 20px 0 0 !important;
      }
    }
  }

  .footerDiv{
    display:flex;
    justify-content: space-between;
  }

  .footerRow{
    margin-top:2rem;
  }
`;

export { BlogStyle };
