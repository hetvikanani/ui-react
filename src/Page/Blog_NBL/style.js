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
    box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
  }
  .iconDiv {
    display: flex;
    justify-content: space-between;
    color: gray;
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
    overflow: hidden;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
    border-radius: 15px;
    /* height: 33vh; */
    margin-bottom: 1rem;
    > div {
      img {
        border-radius: 20px 20px 0 0 !important;
      }
    }
  }
`;

export { BlogStyle };
