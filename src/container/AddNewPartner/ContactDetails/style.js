import styled from "styled-components";
import { size } from "../../../App/device";
// import { Theme } from "../../App/theme";

const ContactDetailStyle = styled.div`

display: flex;

  .container {
    background: #F8F9FA;
    height: 100vh;
    overflow-y: auto;
    width: 100%;

    .allDiv {
      padding: 2em 1em 1em;
      .header {
        font-weight: 500;
        color: #16548B;
      }

      .boxDiv{
margin-top:1rem;

        .headerCard{
          color: #16548B;
          }
       
          .form-div {
            .cardDiv {
              margin-top: 2em;
              .label{
                font-size: 15px;
                font-weight: 700;
                color: #505458;
              }
            }
          }
          .btn-div {
            
            margin-top:2em;
            display: flex;
            justify-content: space-between;
           }


      }
      
    
        }
  }


`;

export { ContactDetailStyle };

