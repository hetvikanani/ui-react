import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const ProDetailstyle = styled.div`
  height: 100vh;
  overflow-y: auto;
  background: #f8f9fa;
  display: flex;
  .allDiv {
    padding: 1%;
    .boxDiv {
      margin-top: 2%;
      padding: 1%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
    p {
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 22px;
      color: #676767;
    }
    .txtHead {
      margin-top: 6px;
    }

    .Feature-card {
      text-align: center;
      margin-top: 15%;
      width: 194px;
      .img-div {
        border: 1px solid orange;
        height: 3em;
        border-radius: 25px;
        width: 3em;
        display: flex;
        margin: auto;
        bottom: 53px;
        position: absolute;
        right: 20px;
        left: 20px;
      }
      .ant-image-img {
        display: block;
        margin: auto;
        height: auto;
        width: 67%;
      }
    }
    .box3 {
      .blue-head {
        font-weight: bold;
        color: #16548b;
      }
      .switch-div {
        display: flex;
        justify-content: center;
      }
      .Card-Div {
        text-align: center;
        margin-top: 20px;
        padding: 20px;
        .card-prop {
          height: 24rem;
        }
        li {
          padding-top: 8px;
        }
        .amount-box {
          background: radial-gradient(
            circle,
            rgba(67, 137, 195, 1) 0%,
            rgba(22, 84, 139, 1) 79%
          );
          height: 50px;
          border-radius: 10px;
          padding: 6px;
          color: white;
          font-size: 22px;
          font-weight: bold;
          .month-txt {
            font-size: 14px;
          }
        }
        .list-name {
          list-style-position: outside;
          text-align: left;
          min-height: 15em;
        }
      }
    }
    .box5 {
      .boxDiv {
        .pdfIcon {
          box-shadow: 0 1px 3px rgb(0, 0, 0, 0.12), 0 1px 2px rgb(0, 0, 0, 0.24);
          width: 1.5em;
          color: #16548b;
          font-size: 50px;
          text-align: center;
        }
      }
    }
    .box6 {
      .react-multi-carousel-list {
        .react-multiple-carousel__arrow {
          min-width: 34px;
          min-height: 34px;
        }

        .react-multi-carousel-track {
          padding: 22px;
          margin: 5px;
        }

        .react-multi-carousel-dot button {
          display: inline-block;
          margin-right: 0px;
          margin: 0 5px;
        }
        .ant-image-img {
          width: 114%;
        }
      }
    }
  }
`;
export { ProDetailstyle };
