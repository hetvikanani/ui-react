import styled from "styled-components";
import { size } from "../../../App/device";

const ContactDetailStyle = styled.div`
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

      .boxDiv {
        margin-top: 1rem;

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
          }


          
        }

        .buttonDiv{
          display: flex !important;
          align-items:center;
          justify-content:space-between;
          margin-top:1rem;


          @media ${size["tablet-sm-max"]} {
   
            
              display:block !important;
              float:left;
            }

          .buttonParent{
            margin-right:2rem;
          }

          .submit{
            float: right;

            @media ${size["tablet-sm-max"]} {
   
              margin-top:1rem;
              margin-right:10rem;
              
            }



        
          }
      }

         
      
      }
    }
  }
 }
  }

`;

export { ContactDetailStyle };
